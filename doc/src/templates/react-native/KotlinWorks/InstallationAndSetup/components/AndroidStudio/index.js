import React from "react";
import { Highlight } from "e-ui-react";

const AndroidStudio = () =>{
 return (<div>
    <div><h5><b>1. Install Android Studio</b></h5></div>
    <div className="mtop5p padLeft15p">
        <div><b>Because</b></div>
        <ul>
            <li className="mtop5p">Install Android SDK</li>
            <li className="mtop5p">Install Platform tools</li>
            <li className="mtop5p">Installs build tools</li>
            <li className="mtop5p">Easier SDK Management</li>
        </ul>
        <div>You can still code fully in VSCode.</div>
    </div>
    <div className="mtop5p"><h5><b>2. Verify Android SDK</b></h5></div>
    <div className="mtop5p padLeft15p">
        <Highlight content={`<ANDROID_HOME>/sdk`} lang="html" />
    </div>
 </div>);
};

export default AndroidStudio;