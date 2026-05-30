import React from "react";
import { Card } from "e-ui-react";

const GradleSetup = () =>{
 return (<div>
    <div><h5><b>1. Install Java JDK 17</b></h5></div>
    <div className="mtop5p padLeft15p">(Gradle requires Java)</div>

    <div className="mtop5p"><h5><b>2. Verify Java</b></h5></div>
    <div className="mtop5p padLeft15p">(Open terminal and verify <code><b>java --version</b></code>)</div>

    <div className="mtop5p"><h5><b>3. Download Gradle and Extract it</b></h5></div>
    <div className="mtop5p padLeft15p">
        <Card padding={15} backgroundColor="#f5f5f5">
            To check what is the Version, our Android App is using - 
            Go to <code><b>&lt;APP_FOLDER&gt;/android/gradle/wrapper/gradle-wrapper.properties</b></code>
        </Card>
    </div>

    <div className="mtop5p"><h5><b>4. Set Environment Variables</b></h5></div>
    <div className="mtop5p padLeft15p">
        Add to <code><b>Path</b></code> Environment Variable with <code><b>%GRADLE_HOME/bin</b></code> and restart Terminal.
    </div>

    <div className="mtop5p"><h5><b>5. Verify Gradle</b></h5></div>
    <div className="mtop5p padLeft15p"><code><b>gradle --version</b></code></div>

 </div>);
};

export default GradleSetup;