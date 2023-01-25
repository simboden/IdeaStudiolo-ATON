//=======vars

let APP = ATON.App.realize();
window.APP = APP;

// assets root folder
APP.assetsPath = APP.basePath + "content/";

// tell ATON to look for 3D content here
ATON.setPathCollection(APP.assetsPath);

// Interaction Modes
APP.MODE_FP = 0;    // First Person
APP.MODE_TP = 1;    // Third Person
APP.MODE_CU = 2;    // Close-up

// POVs
APP.POV_HOME = new ATON.POV().setPosition(-1.8,1.6,-1.0).setTarget(-1.8, 0.8, -6.8).setFOV(75.0);

//=======setup
APP.setup = ()=>{

    APP.currMode = APP.MODE_FP;

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //SIL overriding ATON.functions -- must be befeore Realize
    ATON._updateScreenMove = onMouseMove
    ATON._onResize         = onResize
    ATON.FE._update        = feUpdate
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    ATON.FE.realize(); 
	ATON.FE.addBasicLoaderEvents(); 
    //ATON.createSceneNode("demo").load("virtual_studiolo_boxes.glb").attachToRoot(); 

    // load models
    const assets = [
        'muri',
        'picture_1',
        'picture_2',
        'picture_3',
        'picture_4',
        'picture_5',
        'picture_6',
        'picture_7',
        'bassorilievo',
        'bacco',
        'ercole',
        'venere',
        'medaglia',
        'sportello',
        'apri_sportello',
        'chiudi_sportello',
        'mensola',
        'mensole',
        'misure'
    ]
    assets.forEach( name => {
        ATON.createSceneNode(name).load( name + ".glb").attachToRoot();     
    })

    // load triggers
    const triggers = [
        'picture_1',
        'picture_2',
        'picture_3',
        'picture_4',
        'picture_5',
        'picture_6',
        'picture_7',
        'bassorilievo',
        'bacco',
        'ercole',
        'venere',
        'medaglia',
        'apri_sportello',
        'chiudi_sportello',
    ]
    triggers.forEach( name => {
        ATON.createSemanticNode(name).load( name + "_t.glb").attachToRoot();     
    })

    ATON.getSceneNode('misure').visible = false
    ATON.getSceneNode('sportello').position.x = -7.2845
    ATON.getSceneNode('sportello').position.y =  1.0251
    ATON.getSceneNode('sportello').position.z = -0.6976
    ATON.getSceneNode('apri_sportello').visible = true
    ATON.getSceneNode('chiudi_sportello').visible = false
    ATON.getSemanticNode('chiudi_sportello').visible = false

    APP.setupEventHandling();
    
    ATON.Nav.setFirstPersonControl();
    ATON.Nav.setAndRequestHomePOV(APP.POV_HOME);
};
//=======setupEventHandling
APP.setupEventHandling = ()=>{

    // All resources loaded
    ATON.on("AllNodeRequestsCompleted", ()=>{  
        attachEventListener() 
        fillCatalogue() 
        fillTimebar()
    });

    // A sample switch to CloseUp when double-tapping on valid trigger
    ATON.on("DoubleTap", (e)=>{
        const S = ATON.getHoveredSemanticNode();
        if( S ) {

            if( S.name == 'apri_sportello') { 
                apri_sportello() 
            } else { 
                if ( S.name == 'chiudi_sportello') { 
                    chiudi_sportello() 
                } else { 
                    enterCloseupMode();
                    ATON.Nav.requestPOVbyNode(S);
                }
            }
        }
    });
};
//=======changeInteractionMode
APP.changeInteractionMode = (mode)=>{
    if (mode === APP.currMode) return;

    if (mode === APP.MODE_FP){
        ATON.Nav.setFirstPersonControl();
        ATON.Nav.setAndRequestHomePOV(APP.POV_HOME);
        //ATON.Nav.requestHome(APP.POV_HOME);
    }
    if (mode === APP.MODE_CU){
        ATON.Nav.setOrbitControl();
        ATON.Nav._cOrbit.enablePan = false;
    }
    APP.currMode = mode;
};
//=======update: called at every frame
APP.update = ()=>{
    updateMap()
};

//=======run the ppp
window.addEventListener('load',()=>{
    APP.run();
});