//==UI VARS===========================================================

// buttons color
//const pressed_button_color = "#626262";
//const normal_button_color  = "#212529";
const blue_button_color    = "#007BFF";

// panels dimension when shown
const toolbar_h   = 40;
const catalogue_w = 400;
const timebar_h   = 300;
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
}

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
