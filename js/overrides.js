
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
