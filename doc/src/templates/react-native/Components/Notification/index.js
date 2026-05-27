import React from "react";
import { Highlight, Tab, Card } from "e-ui-react";
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import NativeMode from "./components/native-mode/index.js";
import LibraryMode from "./components/library-mode/index.js";

const ANDROID_CMD_CLEAN = `cd android
gradlew clean
cd ..`;

export const RNNotification = () =>{
  const TbContent= ({ children })=>{
    return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>{children}</div>);
  };
  return (<div>
         <DocumentHeader title="React Native Notification" componentAttributesTable={{}} />
         <div className="pad15p">
            <div className="mtop5p"><h4><b>1. Installation Setup:</b></h4></div>
            <div className="mtop5p padLeft5p">From Project Root:</div>
            <div className="mtop5p">
                <Highlight content={`npm install @notifee/react-native`} lang="html" />
            </div>
            <div className="mtop5p padLeft5p">Then:</div>
            <div className="mtop5p">
                <Highlight content={ANDROID_CMD_CLEAN} lang="html" />
            </div>

            <div className="mtop15p"><h4><b>2. Android Setup (Required):</b></h4></div>
            <div className="mtop5p padLeft5p">Go to <code><b>android/app/src/main/AndroidManifest.xml</b></code>, 
                inside &lt;application&gt; tag, add <b>if not present:</b></div>
            <div className="mtop5p">
                <Highlight content={`<uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>`} lang="html" />
            </div>
            <div align="center">For <i>Android 13+</i> (It is mandatory)</div>

            <div id="tab-zone">
              <Tab menulinks={[{ id:"native-mode", label:"Native Mode", url:"#native-mode", component:(<TbContent><NativeMode /></TbContent>) },
                  { id:"library-mode", label:"Library Mode", url:"#library-mode", component:(<TbContent><LibraryMode /></TbContent>) }]} />
            </div>
            
         </div>
    </div>);
};