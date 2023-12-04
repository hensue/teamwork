import React from "react";

function Error404() {
    return (
        <div style={{ backgroundColor: "lightgrey", width: "100vw", height: "100vh"}}>
            <div style={{ position: "absolute", left:0, bottom: 0, width: "100vw",height: 40, backgroundColor: "black"}}>
                
            </div>
            <p style={{fontSize: 196, fontWeight: 600, margin: 0, lineHeight: 1, position:"absolute", left: 208, top: 38}}>404</p>
            <p style={{fontSize: 120, fontWeight: 600, margin: 0, position: "absolute", left: 208, lineHeight: 1, top: 234}}>
              PAGE<br></br>  
              NOT<br></br>
              FOUND
            </p>
            <img src="/assets/img/errors/unsplash_XcZ78DlXtes (Traced).png" style={{ width: 450, position: "absolute", bottom: 40, right: 96, zIndex:10}}></img>
            <img src="/assets/img/errors/avy-website-banner-pattern-white 1.png" style={{ width: 150, position: "absolute", right: 0, bottom: 40}}></img>
        </div>
    );
}

export default Error404;