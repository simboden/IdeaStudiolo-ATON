/*
	Studiolo App

==============================================================*/

let APP = ATON.App.realize();
window.APP = APP;

// This is our assets root folder
//APP.assetsPath = APP.basePath + "content/";  //SIL:  APP.basePath==undefined
APP.assetsPath = "/a/studiolo/content/";

// Tell ATON to look for 3D content here
ATON.setPathCollection(APP.assetsPath);

// Interaction Modes
APP.MODE_FP = 0;    // First Person
APP.MODE_TP = 1;    // Third Person
APP.MODE_CU = 2;    // Close-up

// APP.setup() is required for web-app initialization
// You can place here UI setup (HTML), events handling, etc.
APP.setup = ()=>{
    console.log( APP.assetsPath );

    ATON.FE.realize(); // Realize the base front-end
	ATON.FE.addBasicLoaderEvents(); // Add basic events handling
    
    ATON.createSceneNode("demo").load("virtual_studiolo_boxes.glb").attachToRoot(); // SIL
    
    APP.setupUI();

    APP.currMode = APP.MODE_FP;
};

// Setup for HTML UI
APP.setupUI = ()=>{

};

APP.changeInteractionMode = (mode)=>{
    if (mode === APP.currMode) return;

    // TODO: ...

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