/*
	Studiolo App

==============================================================*/

let APP = ATON.App.realize();
window.APP = APP;

// This is our assets root folder
APP.assetsPath = APP.basePath + "content/";  //SIL:  APP.basePath==undefined (BF: use latest ATON version)
//APP.assetsPath = "/a/studiolo/content/";

// Tell ATON to look for 3D content here
ATON.setPathCollection(APP.assetsPath);

// Interaction Modes
APP.MODE_FP = 0;    // First Person
APP.MODE_TP = 1;    // Third Person
APP.MODE_CU = 2;    // Close-up

// POVs
APP.POV_HOME = new ATON.POV().setPosition(-1.8,1.6,-1.0).setTarget(-1.8, 0.8, -6.8).setFOV(75.0);


// APP.setup() is required for web-app initialization
// You can place here UI setup (HTML), events handling, etc.
APP.setup = ()=>{
    console.log( APP.assetsPath );

    ATON.FE.realize(); // Realize the base front-end
	ATON.FE.addBasicLoaderEvents(); // Add basic events handling
    APP.setupEvents();
    
    ATON.createSceneNode("demo").load("virtual_studiolo_boxes.glb").attachToRoot(); // SIL

    APP.setupTriggers();
    
    APP.setupUI();

    APP.currMode = APP.MODE_FP;
    ATON.Nav.setFirstPersonControl();
    ATON.Nav.setAndRequestHomePOV(APP.POV_HOME);
};

APP.setupTriggers = ()=>{
    ATON.createSemanticNode("sample1").load("triggers/sample-trigger1.glb").attachToRoot();
};

// Here we handle events
APP.setupEvents = ()=>{

    ATON.on("AllNodeRequestsCompleted", ()=>{ 
        // All resources loaded
    });

    // A sample switch to CloseUp when double-tapping on valid trigger
    ATON.on("DoubleTap", (e)=>{
        let S = ATON.getHoveredSemanticNode();

        if (S){
            APP.changeInteractionMode(APP.MODE_CU);
            ATON.Nav.requestPOVbyNode(S);
        }
    });
};

// Setup HTML UI
APP.setupUI = ()=>{

};

APP.changeInteractionMode = (mode)=>{
    if (mode === APP.currMode) return;

    if (mode === APP.MODE_FP){
        ATON.Nav.setFirstPersonControl();
        ATON.Nav.requestHome(APP.POV_HOME);
    }

    if (mode === APP.MODE_CU){
        ATON.Nav.setOrbitControl();
        ATON.Nav._cOrbit.enablePan = false;
    }

    APP.currMode = mode;
};

/* APP.update() if you plan to use an update routine (executed continuously)
APP.update = ()=>{

};
*/



// Run the App
window.addEventListener('load',()=>{
    APP.run();
});