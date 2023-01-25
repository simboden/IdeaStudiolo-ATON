
//==ATON Override===========================================================

// OVERRIDE ATON._onResize 
function onResize() {

    const c = document.getElementById('idView3D') 
    const w = c.clientWidth
    const h = c.clientHeight
    console.log("on-resize ",w,h );

    ATON.Nav._camera.aspect = w / h;
    ATON.Nav._camera.updateProjectionMatrix();
    ATON._renderer.setSize( w, h );

    if (ATON.FX.composer){
        ATON.FX.composer.setSize( w, h );
        
        if (ATON.FX.passes[ATON.FX.PASS_AA]){
            let UU = ATON.FX.passes[ATON.FX.PASS_AA].material.uniforms;
            if (UU) UU.resolution.value.set( (1/w), (1/h) );
        }
    }
}
// OVERRIDE ATON._updateScreenMove
function onMouseMove (e) {
    if (e.preventDefault) e.preventDefault();
    if (ATON._bCenteredQuery) return;

    // per il picking
    // devo andare in coordinate canvas, e poi normalizzare come vuole threejs
    const c = ATON._renderer.domElement
    // clientWidth/Height funzionano, ma clientLeft/Top tornano sempre zero
    const r = c.getBoundingClientRect()
    const l = r.x
    const t = r.y
    const w = r.width
    const h = r.height
    const x = (e.x - l) / w
    const y = (e.y - t) / h
    //console.log('ATON._updateScreenMove', l,t,w,h,x,y)

    ATON._screenPointerCoords.x =     x*2 - 1;   // valori in -1 ..+1
    ATON._screenPointerCoords.y =  1 -y*2;       // valori in -1 ..+1 invertiti

    //console.log( '---IDEA._updateScreenMove', e.x, e.y, e, t)
}

// OVERRIDE FE._update
function feUpdate() {

    if (ATON.FE._bControlLight){
        // Normalized
        const sx = ATON._screenPointerCoords.x;
        const sy = ATON._screenPointerCoords.y;

        ATON.FE._cLightDir.x = -Math.cos(sx * Math.PI);
        ATON.FE._cLightDir.y = -sy * 4.0;
        ATON.FE._cLightDir.z = -Math.sin(sx * Math.PI);
        ATON.FE._cLightDir.normalize();
        ATON.setMainLightDirection(ATON.FE._cLightDir);
    }

    // Immersive VR/AR
    if (ATON.XR._bPresenting){
        let v = ATON.XR.getAxisValue(ATON.XR.HAND_R);
        
        if (!ATON.VRoadcast._bStreamFocus){
            let s = ATON.SUI._selectorRad;
            s += (v.y * 0.01);

            if (s > 0.001) ATON.SUI.setSelectorRadius(s);
        }
    }
    // Default
    else {
        if (ATON.Nav.isTransitioning() || ATON.Nav._bInteracting || ATON._bPauseQuery){
            $("#idPopupLabel").hide();
            return;
        }

        if (ATON.FE._bSem && ATON.FE._bShowSemLabel){
            $("#idPopupLabel").show();

            const c = ATON._renderer.domElement
            const r = c.getBoundingClientRect()

            const l = r.x
            const t = r.y
            const w = r.width
            const h = r.height

            // la label sta al centro di un div largo come la window -- togliendo meta' window lo centro sul mouse
            const x = (     ATON._screenPointerCoords.x + 1  )*0.5 * w + l    - window.innerWidth*0.5
            const y = ( 1 - ATON._screenPointerCoords.y      )*0.5 * h + t    - 55

            //console.log('---feUpdate---')
            //---------------------

            $("#idPopupLabel").css('transform', "translate("+x+"px, "+y+"px)");
        }
        else $("#idPopupLabel").hide();
    }
};


//==UI VARS===========================================================

// buttons color
//const pressed_button_color = "#626262";
//const normal_button_color  = "#212529";
const blue_button_color    = "#007BFF";

// panels dimension when shown
const toolbar_h   = 40;
const catalogue_w = 400;
const timebar_h   = 350;
const lighting_h  = 40;

// panels visibility flags
let show_toolbar    = true;
let show_map        = false;
let show_catalogue  = false;
let show_timebar    = false;
let show_lighting   = false;
let show_annotations= false;
let show_measure    = false;
let show_help       = false;
let show_fullscreen = false;

// lighting vars
let light_time = 0;
let light_season = 0;

//==UI UTILS===========================================================

function update_button( id, show ) {
    document.getElementById(id).style.setProperty( "border-bottom", show ? "2px solid #007BFF" : "0px" );
}
function update_panel( id, show ) {
    document.getElementById(id).hidden = !show;
}
function update_layout( id, show, value ) {
    document.querySelector(':root').style.setProperty( id, show ? value+'px' : '0px' );
    onResize()
}
function onBtnClick( id, func ) {
    document.getElementById(id).addEventListener('click', func );    
}

//==UI FUNC===========================================================

function showToolbar( show ) {
    show_toolbar = show;
    update_panel("toolbar-panel", show)
    update_panel("menu-panel",  !show)
    update_layout( '--toolbar-h', show, toolbar_h )
}
function doFirstPerson() {
    console.log("doFirstPerson")
    update_button("first-person-btn", true )
    update_button("third-person-btn", false)
}
function doThirdPerson() {
    console.log("doThirdPerson")
    update_button("first-person-btn", false)
    update_button("third-person-btn", true )
}
function showMap( show ) {
    show_map = show;
    update_button("map-btn",   show)
    update_panel ("map-panel", show)
}
function showCatalogue( show ) {
    show_catalogue = show;
    update_button("catalogue-btn", show)
    update_panel ("catalogue-panel", show)
    update_layout( '--catalogue-w', show, catalogue_w )
}
function showTimeBar( show ) {
    show_timebar = show;
    //if( show && show_lighting ) showLighting(false);
    update_button("timebar-btn",   show)
    update_panel ("timebar-panel", show)
    update_layout( '--timebar-h', show, timebar_h )
}
function showLighting( show ) {
    show_lighting = show;
    //if( show && show_timebar ) showTimeBar(false);
    update_button("lighting-btn",   show)
    update_panel ("lighting-panel", show)
    update_layout( '--lighting-h', show, lighting_h )
}
function showAnnotations( show ) {
    show_annotations = show;
    update_button("annotations-btn", show )
}
function showMeasure( show ) {
    show_measure = show;
    update_button("measure-btn", show)
    ATON.getSceneNode("misure").visible = show
}
function showHelp( show ) {
    show_help = show;
    update_button("help-btn", show)
    update_panel ("help-panel", show  )
}
function toggleFullscreen( event )
{
    var entering_fullscreen = ! document.fullscreenElement;
    if( entering_fullscreen )
    {
        if (document.body.requestFullscreen)
            document.body.requestFullscreen();
        else if (document.body.mozRequestFullScreen)
            document.body.mozRequestFullScreen();
        else if (document.body.webkitRequestFullscreen)
            document.body.webkitRequestFullscreen();
        else if (document.body.msRequestFullscreen)
            document.body.msRequestFullscreen();
    }
    else // exiting fullscreen
    {
        if (document.exitFullscreen)
            document.exitFullscreen();
        else if (document.mozCancelFullScreen)
            document.mozCancelFullScreen();
        else if (document.webkitExitFullscreen)
            document.webkitExitFullscreen();
        else if (document.msExitFullscreen)
            document.msExitFullscreen();
    }
}
function fullScreenChanged( event ){
    show_fullscreen = document.fullscreenElement
    update_button("fullscreen-btn", show_fullscreen)
}
function doReset() {
    showToolbar(true);
    showMap(false);
    showCatalogue(false);
    showTimeBar(false);
    showLighting(false);
    showAnnotations(false);
    showMeasure(false);
    showHelp(false);
    ATON.Nav.setAndRequestHomePOV(APP.POV_HOME);

    if( ATON.getSceneNode("chiudi_sportello").visible )
        chiudi_sportello()
}


function toggleToolbar()    { showToolbar       ( !show_toolbar     ) }
function toggleMap()        { showMap           ( !show_map         ) }
function toggleCatalogue()  { showCatalogue     ( !show_catalogue   ) }
function toggleTimeBar()    { showTimeBar       ( !show_timebar     ) }
function toggleLighting()   { showLighting      ( !show_lighting    ) }
function toggleAnnotations(){ showAnnotations   ( !show_annotations ) }
function toggleMeasure()    { showMeasure       ( !show_measure     ) }
function toggleHelp()       { showHelp          ( !show_help        ) }

//==LIGHTING===========================================================

function setLightTime( t2 ) {
    var t1 = light_time;
    light_time = t2;

    update_button("light-time0"  , (light_time==0));
    update_button("light-time1"  , (light_time==1));
    update_button("light-time2"  , (light_time==2));
    update_button("light-time3"  , (light_time==3));

    update_button("light-season0", (light_season==0));
    update_button("light-season1", (light_season==1));
    update_button("light-season2", (light_season==2));
    update_button("light-season3", (light_season==3));

    // var start = t1 + light_season * 10;
    // var stop  = t2 + light_season * 10;

    // // -- do not animate when going back in time
    // if( start>stop )
    //     start = stop;

    // animateLight( start, stop );
}

function setLightSeason( s2 ) {
    light_season = s2;
    setLightTime( light_time )
}

//==CONNECT FUNCTIONS===========================================================

function attachEventListener() {
    onBtnClick( "menu2-btn"          , toggleToolbar      );
    onBtnClick( "menu-btn"           , toggleToolbar      );
    onBtnClick( "first-person-btn"   , doFirstPerson      );
    onBtnClick( "third-person-btn"   , doThirdPerson      );
    onBtnClick( "map-btn"            , toggleMap          );
    onBtnClick( "catalogue-btn"      , toggleCatalogue    );
    onBtnClick( "timebar-btn"        , toggleTimeBar      );
    onBtnClick( "lighting-btn"       , toggleLighting     );
    onBtnClick( "annotations-btn"    , toggleAnnotations  );
    onBtnClick( "measure-btn"        , toggleMeasure      );
    onBtnClick( "fullscreen-btn"     , toggleFullscreen   );
    onBtnClick( "help-btn"           , toggleHelp         );
    onBtnClick( "help-panel"         , toggleHelp         );
    onBtnClick( "reset-btn"          , doReset            );

    onBtnClick( "exit-closeup-btn"   , exitCloseupMode    );

    document.addEventListener('webkitfullscreenchange', fullScreenChanged );
    document.addEventListener('mozfullscreenchange',    fullScreenChanged );
    document.addEventListener('msfullscreenchange',     fullScreenChanged );
    document.addEventListener('fullscreenchange',       fullScreenChanged );

    onBtnClick( "light-time0"  , function() { setLightTime(0);   } );
    onBtnClick( "light-time1"  , function() { setLightTime(1);   } );
    onBtnClick( "light-time2"  , function() { setLightTime(2);   } );
    onBtnClick( "light-time3"  , function() { setLightTime(3);   } );
    onBtnClick( "light-season0", function() { setLightSeason(0); } );
    onBtnClick( "light-season1", function() { setLightSeason(1); } );
    onBtnClick( "light-season2", function() { setLightSeason(2); } );
    onBtnClick( "light-season3", function() { setLightSeason(3); } );
}

//==Catalogue===========================================================

function make_el( parent, type, cls ) {
    const el = document.createElement(type);
    el.classList.add(cls)
    parent.appendChild(el)
    return el
}

function fillCatalogue() {
    const catalogue = document.getElementById("catalogue-panel")
    const cat_list =  make_el( catalogue, 'UL', "cat-ul") 

    Artworks.forEach( a => { 
        const list_item  = make_el( cat_list, 'LI', 'cat-li') 
        
        const item_title = make_el( list_item, 'H5', 'cat-title') 
        item_title.textContent = a.name
        
        const item_kind = make_el( list_item, 'DIV', 'cat-kind') 
        item_kind.textContent = artwork_kind[ a.kind ]

        a.asset_s.forEach( as => {
            const link = make_el( item_kind, 'a', 'cat-goto-link') 
            link.href = 'javascript: focus_asset('+as+')'

            const icon = make_el( link, 'img', 'small_icon') 
            icon.src = 'images/mirino.svg'
        })
        a.asset_v.forEach( as => {
            const link = make_el( item_kind, 'a', 'cat-viewer-link') 
            //TODO link.href = 'javascript: focus_asset('+as+')'

            const icon = make_el( link, 'img', 'small_icon') 
            icon.src = 'images/cube.svg'
        })
        a.asset_m.forEach( as => {
            const link = make_el( item_kind, 'a', 'cat-measure-link') 
            //TODO link.href = 'javascript: focus_asset('+as+')'

            let icon = make_el( link, 'img', 'small-icon') 
            icon.src = 'images/square.svg'
        })
        a.artists.forEach( ar => {
            const div = make_el( list_item, 'DIV', 'cat-artist') 
            div.textContent = ar.name
        })
        if( a.medium ) {
            const div = make_el( list_item, 'DIV', 'cat-medium') 
            div.textContent = a.medium
        }
        if( a.dimensions ) {
            const div = make_el( list_item, 'DIV', 'cat-dimensions') 
            div.textContent = a.dimensions
        }
        if( a.inventory ) {
            const div = make_el( list_item, 'DIV', 'cat-inventory') 
            div.textContent = "Inventory " + a.inventory
        }
        if( a.transcription_tr ) {
            const div = make_el( list_item, 'DIV', 'cat-transcription') 
            div.textContent = a.transcription_tr
        }
        if( a.transcription ) {
            const div = make_el( list_item, 'DIV', 'cat-transcription') 
            div.textContent = a.transcription
        }
        if( a.references.length ) {
            const div = make_el( list_item, 'DIV', 'cat-references-div') 
            const span = make_el( div, 'span', 'cat-references') 
            span.textContent = "References "
            a.references.forEach( r => {
                const link = make_el( div, 'a', 'cat-reference-link') 
                link.href = r.url
                link.textContent = r.label
                const span = make_el( div, 'span', 'cat-reference-span') 
                span.textContent = r.pos + ';'
            })
            const link = make_el( div, 'a', 'cat-reference-link') 
            link.href = 'https://www.zotero.org/groups/1472028/idea_bibliography'
            link.textContent = 'Idea Bibliography'
            
        }
    })
}

//==TIMEBAR===========================================================

function fillTimebar() {

    const date_start   = '1496-01-01';
    const date_end     = '2020-12-01';
    const hide_start   = '1535-01-01';
    const hide_end     = '2023-01-01';
    const date_today   = '2023-01-01';//new Date();
    const current_year = 2023;
    
    const selected_timebar_item = null;
    const selected_timebar_items = null;

    let timebar_items = [
        { id:'back1', content:'first period',       start:'1497-01-01', end: '1520-01-01', type:'background',   style:'z-index:0; background-color:rgb(30,30,30); z-index:0; color:rgb(200,200,200);' },
        { id:'back2', content:'',                   start:'1520-01-01', end: '1522-01-10', type:'background',   style:'z-index:0; background:linear-gradient(90deg, rgb(30,30,30) 10%, rgb(60,60,60) 90%);' },
        { id:'back3', content:'second period',      start:'1522-01-01', end: hide_start,   type:'background',   style:'z-index:0; background-color:rgb(60,60,60); z-index:0; color:rgb(200,200,200);' },
        //{ id:0,       content:'today',            start:date_today,                      type:'point',        style:'z-index:0; background-color:pink;' },
    ]

    Artworks.forEach( a => {
        if( a.aq_date ) {
            
            // '1500-1502' --> '155-01-01'
            const date = a.aq_date.split('-')[0].trim() + '-01-01'   

            const item = {
                id         : timebar_items.length,
                type       : 'point',
                start      : date,
                content    : a.fullname,
                selectable : a.asset_s.length ? true : false,
                className  : a.asset_s.length ? 'vis-selectable' : 'vis-normal'
            }
            //console.log('item', item )
            timebar_items.push(item)
        }
    })

    // Configuration for the Timeline
    const options = { 
        height:'350px',
        cluster:false, 
        start: date_start, 
        end: date_end, 
        min: date_start, 
        max: date_end, 
        zoomMax: (2022-1496) * 365 * 24 * 3600 * 1000, // milliseconds
        zoomMin: 2592000000,  // milliseconds
        maxMinorChars:5,
        margin:0,
    
        hiddenDates: { start: hide_start, end:hide_end },
        showCurrentTime:false,
    
        type:'point',
        showMajorLabels: false
    };
    // Create the Timeline
    const timeline_el = document.getElementById('timebar-div');
    const items = new vis.DataSet(timebar_items)
    const timeline = new vis.Timeline(timeline_el, items, options);


    // insert the time-cursor   
    timeline.addCustomTime( date_today, 'time-cursor');
    timeline.setCustomTimeTitle('current time', 'time-cursor');

    // the time-cursor can be set by dragging it
    timeline.on('timechanged', function (event) {
    if( event.id == 'time-cursor')
        on_time_changed( event.time.getFullYear()+1 );// event.time is a 'Date' object
    });

    // the time-cursor can be set by by double-clicking
    timeline.on('doubleClick', function (event) {
    timeline.setCustomTime( event.time, 'time-cursor');
    on_time_changed( event.time.getFullYear() ); // event.snappedTime is a 'Moment' object
    });

    // function called when the time-cursor changes
    function on_time_changed( year )
    {
        console.log( 'time-cursor set to:', year);
        current_year = year;
        //var filter = String(year)
        //var catalogue  = $('#catalogue-panel' )[0].contentWindow;
        //catalogue.load( filter )
    }

    function set_current_year( year )
    {
        current_year = year;
        var filter = String(year)
        timeline.setCustomTime( filter + '-01-01', 'time-cursor');
        // var catalogue  = $('#catalogue_frame' )[0].contentWindow;
        // catalogue.load( filter );
    }

    timeline.on( 'select', function( arg )
    {
        if( !arg.items.length )
            return;
        item_id = arg.items[0];
        artwork_name = items.get( item_id ).content;
        console.log('timeline.selected', artwork_name );

        // var catalogue  = $('#catalogue_frame' )[0].contentWindow;
        // catalogue.load( artwork_name );
    });
}
//==INTERACTIONS======================================================

function enterCloseupMode() {
    APP.changeInteractionMode(APP.MODE_CU);
    update_panel( 'exit-closeup-panel', true ) 
}
function exitCloseupMode() {
    APP.changeInteractionMode(APP.MODE_FP);
    update_panel( 'exit-closeup-panel', false ) 
}

function updateMap()
{
    const map_cursor = $('#map_cursor')[0]
    if( !map_cursor ) return;

    const pos = ATON.Nav.getCurrentEyeLocation()
    const x =  pos.x;
    const y = -pos.z;

    const dir = ATON.Nav.getCurrentDirection()
    const dx = - dir.x;
    const dy =   dir.z;
    const a  = Math.atan2( dy, dx ) * 180 / 3.1415;

    const t = map_cursor.transform.baseVal[0]; // transform.traslation
    const r = map_cursor.transform.baseVal[1]; // transform.rotation

    t.setTranslate( x, y, 0 );
    r.setRotate( a +180, 0, 0 );
}
function apri_sportello() {
    const sportello = ATON.getSceneNode('sportello')
    ATON.getSceneNode('apri_sportello').visible = false
    ATON.getSemanticNode('apri_sportello').disablePicking();
    gsap.to( sportello.rotation, {
        duration: 1, 
        y: Math.PI * 0.5, 
        ease: "power2",
        onComplete: () => {
            ATON.getSceneNode('chiudi_sportello').visible = true
            ATON.getSemanticNode('chiudi_sportello').enablePicking();
        }
    })
}
function chiudi_sportello() {
    const sportello = ATON.getSceneNode('sportello')
    ATON.getSceneNode('chiudi_sportello').visible = false
    ATON.getSemanticNode('chiudi_sportello').disablePicking();
    gsap.to( sportello.rotation, {
        duration: 1, 
        y: 0, 
        ease: "power2",
        onComplete: () => {
            ATON.getSceneNode('apri_sportello').visible = true
            ATON.getSemanticNode('apri_sportello').enablePicking();
        }
    })
}