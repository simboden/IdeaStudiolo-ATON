// REFS: 
// minimal threejs app : https://github.com/briangershon/threejs-minimal
// outline pass        : https://www.npmjs.com/package/three-outlinepass
// billboard           : https://jsfiddle.net/prisoner849/w19d5km7/
// gsap animations     : https://www.npmjs.com/package/gsap

import {
    AmbientLight,
    AxesHelper,
    BoxGeometry,
    BufferGeometry,
    BufferAttribute,
    Clock,
    Group,
    Mesh,
    MeshBasicMaterial,
    MeshLambertMaterial,
    PerspectiveCamera,
    PointLight,
    Raycaster,
    Scene,
    TextureLoader,
    Vector2,
    Vector3,
    WebGLRenderer,
} from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { RenderPass, EffectComposer, OutlinePass } from "three-outlinepass"

import gsap from "gsap";  // animation  https://www.npmjs.com/package/gsap

//============================================
// globals 

const FP = 1               // interaction mode 'First Person'
const TP = 2               // interaction mode 'Third Person'  
const CU = 3               // interaction mode 'CloseUp'  
let mode = FP              // current interaction mode  -- set it through set_mode
let prev_mode = undefined  // previous interaction mode 
let animating = false      // true when performing camera animation -- inhibit the picker

const cp  = new Vector3()  // generic camera positions
const cp0 = new Vector3()
const tp  = new Vector3()  // generic target positions 
const tp0 = new Vector3()
const tp1 = new Vector3()
const cd  = new Vector3(); // generic camera direction
const la  = new Vector3(); // generic lookat vector

const prev_cp = new Vector3() // camera and target position saved when entering closeup mode
const prev_tp = new Vector3()

//=====================================
// retrieve and connect buttons

const fp_button = document.getElementById("button1")
const tp_button = document.getElementById("button2")
const exit_button = document.getElementById("button3")
const reset_button = document.getElementById("button4")

fp_button.onclick    = function(){ set_mode(FP)    } 
tp_button.onclick    = function(){ set_mode(TP)    }
exit_button.onclick  = function(){ exit_closeup()  }
reset_button.onclick = function(){ do_reset()      }

function update_buttons() {

    fp_button.style.borderColor   = (mode==FP) ? "red" : "black"
    tp_button.style.borderColor   = (mode==TP) ? "red" : "black"
    exit_button.style.borderColor = (mode==CU) ? "red" : "black"

    fp_button.disabled   = (mode==CU) 
    tp_button.disabled   = (mode==CU) 
    exit_button.disabled = (mode!=CU)
}
//=====================================
// set_mode 
function set_mode( new_mode ) {

    prev_mode = mode 
    mode = new_mode 

    update_buttons()
    controls.enableZoom  = (mode!=FP)
    controls.enablePan   = (mode!=CU)

    if( mode == FP ) activate_fp()
    if( mode == TP ) activate_tp()
}

//=====================================
// setup renderer, scene, light, axes

const renderer = new WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const scene = new Scene();

const ar = window.innerWidth / window.innerHeight
const camera = new PerspectiveCamera( 75, ar, 0.1, 1000 );

const ambientLight = new AmbientLight(0xaA0A0A0);
scene.add(ambientLight);

const d = 10;
const light = new PointLight(0xffffff, 3);
light.position.set(-10, 20, 15);
light.castShadow = true;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
light.shadow.camera.left = - d;
light.shadow.camera.right = d;
light.shadow.camera.top = d;
light.shadow.camera.bottom = - d;
light.shadow.camera.far = 100;
scene.add(light);

const axes = new AxesHelper( 1 );
scene.add( axes );
axes.material.linewidth = 3

//=====================================
// scene objects: 
// floor  = visible floor
// floor2 = valid player positions ( hidden )
// wall_x = room walls
// art_x  = pickable objects
// pointer= shows the picked_pos on floor
// isa    = the player avatar shown in third person

function make_box( parent, name, px,py,pz, sx,sy,sz, color) {
    const geometry = new BoxGeometry(sx, sy, sz)
    const material = new MeshLambertMaterial( {color: color} )
    const cube = new Mesh(geometry, material )
    cube.position.set(px+sx/2,py+sy/2,pz+sz/2)
    cube.name = name
    cube.receiveShadow = true;
    cube.castShadow = true;    
    parent.add(cube);
    return cube    
}

const pickables = new Group()
scene.add( pickables ) 

const floor    = make_box( pickables, "floor",  0,-0.06,0,    8,0.1,5,     "#555")
const floor2   = make_box( pickables, "floor2", 1, 0, 1,      6,0.1,3,     "#050")
const wall_1   = make_box( pickables, "wall1",  0,0,0,        8,3,0.1,     "#055")
const wall_2   = make_box( pickables, "wall2",  0,0,4.9,      8,3,0.1,     "#055")
const wall_3   = make_box( pickables, "wall3",  8,0,0,        0.1,3,5,     "#005")
const art_1    = make_box( pickables, "art_1",  3,1.2,0.1,    1,1,0.1,     "#550")
const art_2    = make_box( pickables, "art_2",  4.5,1.2,0.1,  1,1,0.1,     "#550")
const art_3    = make_box( pickables, "art_3",  6,1.2,0.1,    1,1,0.1,     "#550")
const art_4    = make_box( pickables, "art_4",  7.9,0.2,2,    0.1,1,1,     "#550")
const light_ob = make_box( scene,     "light",  10,15,20,     1,1,1,       "#AAA")
const pointer  = make_box( scene,     "pointer",0,0,0,        0.2,0.2,0.2, "#500")

pointer.visible = false

floor2.visible = false
floor2.onclick = ()=>{ do_move_player() }

// posizione da dove questo oggetto va osservato, si potrebbe calcolare automaticamente 
//                                       cx   cy    cz       tx   ty     tz   
art_1.onclick  = ()=>{ activate_closeup( 3.5, 1.7,   1,      3.5, 1.7,   0 ) } 
art_2.onclick  = ()=>{ activate_closeup( 5,   1.7,   1,      5,   1.7,   0 ) } 
art_3.onclick  = ()=>{ activate_closeup( 6.5, 1.7,   1,      6.5, 1.7,   0 ) } 
art_4.onclick  = ()=>{ activate_closeup( 7,   0.7, 2.5,      8 ,  0.7, 2.5 ) } 

//============================================
// when mode == TP, hide walls that are between camera and target

function do_hide_walls() {

    // se le mesh sono complicate, il backface-culling potrebbe no bastare
    if( mode == TP ) {
        floor.visible  = camera.position.y > 0
        wall_1.visible = camera.position.z > 0
        wall_2.visible = camera.position.z < 5
        wall_3.visible = camera.position.x < 8
    } else {
        floor.visible  = true
        wall_1.visible = true
        wall_2.visible = true
        wall_3.visible = true
    }
    art_1.visible = wall_1.visible 
    art_2.visible = wall_1.visible 
    art_3.visible = wall_1.visible 
    art_4.visible = wall_3.visible 
}
//============================================
// isa avatar -- a quad with origin at the center-bottom -- used as a billboard

function make_isa() {
    const isa_w = 0.4
    const isa_h = 1.7

    const isa_verts = new Float32Array([
       -isa_w, 0.0,   0.0,
       -isa_w, isa_h, 0.0,
        isa_w, isa_h, 0.0,

        isa_w, isa_h, 0.0,
        isa_w, 0.0,   0.0,
       -isa_w, 0.0,   0.0,
    ])
    const isa_uv = new Float32Array([
        0.0,   0.0,
        0.0,   1.0,
        1.0,   1.0,

        1.0,   1.0,
        1.0,   0.0,
        0.0,   0.0,
    ])
    const isa_geom = new BufferGeometry(); 
    isa_geom.setAttribute( 'position', new BufferAttribute( isa_verts, 3 ) );
    isa_geom.setAttribute( 'uv',       new BufferAttribute( isa_uv,    2 ) );

    const textureLoader = new TextureLoader();
    const isa_tex = textureLoader.load( "/src/isa.png" )
    const isa_mat = new MeshBasicMaterial({ map: isa_tex, transparent:true, opacity:1.0 })
    const mesh = new Mesh( isa_geom, isa_mat )
    mesh.name = "isa"

    mesh.position.set( 4, 0.1, 2.5 )
    mesh.rotateY( Math.PI/2.0 )
    mesh.visible = false

    scene.add( mesh )
    return mesh
}
const isa = make_isa()

//============================================
// track object under the mouse

const mouse_pos    = new Vector2(); // current mouse position as needed for raycast
let   need_raycast = false          // mouse pos has changed since the last raycast
let   picked_ob    = null           // object under the mouse
let   picked_pos   = null           // position of the pick in world coord

function on_mousemove(event) {
    if ( event.isPrimary === false ) return;
	mouse_pos.x =   ( event.clientX / window.innerWidth  ) * 2 - 1;
	mouse_pos.y = - ( event.clientY / window.innerHeight ) * 2 + 1;    
    need_raycast = true
}
renderer.domElement.addEventListener( 'pointermove', on_mousemove );

const raycaster = new Raycaster();

// mousemove may be much more frequent then the render, so I call raycast from do_frame, if needed 
function do_raycast() {

    picked_ob  = null
    picked_pos = null
    need_raycast = false

    raycaster.setFromCamera( mouse_pos, camera );

    // interseco solo i pickables (per evitare isa e pointer)
	const intersects = raycaster.intersectObjects( pickables.children );

    // prendo floor2  oppure il primo oggetto visibile
    //( i muri possono essere nascosti, ma sono pickabili lo stesso ) 
    let i=0
    while( i < intersects.length  ) {
        if( intersects[i].object.name == "floor2" || intersects[i].object.visible  )
        {
            picked_ob  = intersects[i].object
            picked_pos = intersects[i].point
            return
        }
        i++
    }  
}
//=====================================
// object hilighting using outlinePass

let hilighted_ob = undefined  // the hilighted object

var compose = new EffectComposer(renderer);
var renderPass = new RenderPass(scene, camera);
var outlinePass = new OutlinePass(new Vector2(window.innerWidth, window.innerHeight), scene, camera );
outlinePass.renderToScreen = true;

compose.addPass(renderPass);
compose.addPass(outlinePass);

outlinePass.edgeStrength = 2;
outlinePass.edgeGlow = 1;
outlinePass.edgeThickness = 3;
outlinePass.visibleEdgeColor.set(0xffffff);
outlinePass.hiddenEdgeColor.set(0xffffff);

function hilight_object( object ) {
    hilighted_ob = object
    outlinePass.selectedObjects = ( object) ? [object] : []
}

function do_hilight() {

    if( picked_ob == hilighted_ob ) 
        return // nothing to do 

    if( picked_ob && picked_ob.name.startsWith('art') ) {
        hilight_object( picked_ob )
        return
    }

    hilight_object( null )
}
//=====================================
// handle resize

function on_window_resize() {

    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize( width, height );
    
    compose.setSize( width, height );
    effectFXAA.uniforms[ 'resolution' ].value.set( 1 / width, 1 / height );
}
window.addEventListener( 'resize', on_window_resize );

//=====================================
// orbit controls

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener( 'start', ()=>{ animating=true  })
controls.addEventListener( 'end',   ()=>{ animating=false })

//=====================================
// custom camera animation 
// (animate both camera.position and controls.target, accept optional update and done callback ) 

function do_animation(  duration, camera_pos,  target_pos,  update_cb=null, done_cb=null  ) {
    
    animating = true
    function onUpdate()   { controls.update();  if( update_cb != null ) update_cb()  }
    function onComplete() { animating = false;  if( done_cb   != null ) done_cb()    }

    gsap.to( 
        camera.position,  {   // object to animate   
            x: camera_pos.x,  // object property final value 
            y: camera_pos.y,  // object property final value 
            z: camera_pos.z,  // object property final value 
            duration:duration, 
            ease:'power2', 
        }
    )
    gsap.to(  controls.target, {   
            x : target_pos.x,
            y : target_pos.y,               
            z : target_pos.z,               
            duration : duration, 
            ease : 'power2', 
            onUpdate : onUpdate, 
            onComplete : onComplete
        }
    )
}
//=====================================
// handle mouse clicks

// we want both camera rotation, artwork selection, and click-on-the-floor-to-move all activated by left-mouse-click
// if the user click and drag    -- controls perform the rotation
// if the user click and release -- we may perform other actions depending on the picked object

let mouse_down_pos = new Vector2();

function on_mouse_down(event) {
    if( event.button == 0)
        mouse_down_pos.set( event.x, event.y )
}
renderer.domElement.addEventListener( 'pointerdown', on_mouse_down, true ); // setting USeCapture to take over the Orbit ontrol

function on_mouse_up(event) {
    if( event.button == 0) {
        // if the user has done a click and drag, he just made a rotation, return
        if( mouse_down_pos.x != event.x || mouse_down_pos.y != event.y ) 
            return
        if( picked_ob && picked_ob.onclick !== undefined )
            picked_ob.onclick()
    }
}
renderer.domElement.addEventListener( 'pointerup', on_mouse_up, true ); // setting USeCapture to take over the Orbit ontrol

//=====================================
// update floor pointer visibility and position

function do_check_floor_collision() {
    pointer.visible = false
    if( picked_ob == floor2 ) {
        pointer.position.copy( picked_pos )
        pointer.visible = true
    }
}
//=====================================
// move player to the floor pointer 
function do_move_player() {
    
    if( mode == FP ) { 
    
        //muovo la camera sul picked_pos, il target si muove mantenedo lo stesso offset dalla camera

        cp.x = picked_pos.x
        cp.y = camera.position.y
        cp.z = picked_pos.z

        const dx = ( cp.x - camera.position.x )
        const dz = ( cp.z - camera.position.z )
        const duration = Math.sqrt( dx*dx + dz*dz ) * 0.2   

        tp.x = controls.target.x + dx
        tp.y = controls.target.y
        tp.z = controls.target.z + dz

        do_animation( duration, cp,  tp )
         
    }
    if( mode == TP )
    {
        // muovo il target e isa sul picked_pos, la camera si nuove mantenedo lo stesso offset dal target

        tp.x = picked_pos.x
        tp.y = controls.target.y
        tp.z = picked_pos.z

        const dx = ( tp.x - controls.target.x )
        const dz = ( tp.z - controls.target.z )
        const duration = Math.sqrt( dx*dx + dz*dz ) * 0.2   

        cp.x = camera.position.x + dx
        cp.y = camera.position.y
        cp.z = camera.position.z + dz

        function on_update() { 
            isa.position.x = controls.target.x
            isa.position.z = controls.target.z
        }

        do_animation( duration, cp,  tp,  on_update  )
    }
}
//=====================================
// activate_FP

function activate_fp() {
    
    function on_done() { isa.visible = false }

    if( prev_mode == FP ) {
        
        // old target position
        tp0.copy( controls.target )

        // la camera deve andare sul target ( la testa di isa )
        // il target deve andare 10cm + avanti lungo la direzione della vista
        camera.getWorldDirection(cd);
        cd.normalize().multiplyScalar(0.1);
        
        //new target position
        tp1.x = tp0.x + cd.x
        tp1.y = tp0.y
        tp1.z = tp0.z + cd.z

        do_animation( 2, tp0,  tp1, null, on_done  )
    }
    if( prev_mode == CU ) {
         do_animation( 2, prev_cp, prev_tp )
    }
}

//=====================================
// activate_TP

function activate_tp() {

    isa.visible = true

    if( prev_mode == FP ) {
        // old camera position (testa dell' avatar)
        cp0.copy( camera.position )

        isa.position.x = cp0.x
        isa.position.z = cp0.z
        
        // la camera si deve allontanare di 2mt dalla testa dell'avatar
        camera.getWorldDirection(cd);
        cd.negate(0).normalize().multiplyScalar(2);

        // new camera position
        cp.x = cp0.x + cd.x
        cp.y = 3;
        cp.z = cp0.z + cd.z

        // new target == old camera == testa dell'avatar

        do_animation( 2, cp, cp0 )
    }
    if( prev_mode == CU ) {
        do_animation( 2, prev_cp, prev_tp )
    }
}
//=====================================
// activate_closeup

function activate_closeup( cx,cy,cz, tx,ty,tz ) {

    if( mode != CU ) { // posso attivare closeup piu' volte 
        prev_cp.copy( camera.position )
        prev_tp.copy( controls.target )
        set_mode( CU )
    }

    isa.visible = false

    cp.set(cx,cy,cz)
    tp.set(tx,ty,tz)

    const dx = ( cp.x - camera.position.x )
    const dz = ( cp.z - camera.position.z )
    const duration = Math.sqrt( dx*dx + dz*dz ) * 0.2   

    do_animation( duration, cp, tp )
}
//=====================================
// exit_closeup

function exit_closeup() {
    set_mode(prev_mode)
}
//=====================================
// do_reset

function do_reset() {
    mode = FP
    prev_mode = null
    update_buttons()
    need_raycast = false
    isa.visible = false
    do_hide_walls()

    // inizialize the controls as FirstPerson ( no pan, no zoom, target 10cm in front of the camera )
    camera.position.set(  0,  1.8, 2.5 ); 
    controls.target.set( 0.1, 1.8, 2.5 )
    controls.enablePan = false
    controls.enableZoom = false
    //controls.maxPolarAngle =  Math.PI -0.5  // fa casini
    //controls.minPolarAngle =  0.5
    controls.update();
}
do_reset()

//=====================================
// main loop
var clock = new Clock();

function do_frame() {

    if( need_raycast && !animating ) {
        do_raycast()    
        do_hilight()
        do_check_floor_collision()
    }
    do_hide_walls() // si puo evitare di chiamarlo sempre -- ma sporco il codice

    // rotate isa billboard
    camera.getWorldDirection(cd);
    cd.setY(0).normalize();
	isa.lookAt( la.copy(cd).add(isa.position) );

    //rennder
    var delta = clock.getDelta();    
    requestAnimationFrame(do_frame);
    compose.render(delta);
    controls.update();
}
do_frame();

//=====================================
// make these vars visible to chrome console
window.vars = {
    s : scene,
    r : renderer,
    c : camera,
    o : controls
}

console.log("index.js loaded--- access vars as windows.vars.s|r|c|o")
