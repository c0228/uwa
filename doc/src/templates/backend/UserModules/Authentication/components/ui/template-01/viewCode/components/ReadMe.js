import React from "react";
import { Badge } from "e-ui-react";

export const ReadMe = ()=>{
 return (<>
 We are dealing with three URLs in index.js of root project structure:
 <ol className="mtop5p">
    <li>
      <div className="mbot5p"><b>Authentication URL (http://localhost:8080/UserModules/Authentication/Template1/Auth): </b> 
         <Badge type="danger" label="show===Auth" size={11} />
      </div>
    </li>
    <li>
      <div className="mbot5p"><b>ChangePwd URL (http://localhost:8080/UserModules/Authentication/Template1/ChangePwd/<code><b>&lt;Token&gt;</b></code>): </b> 
         <Badge type="danger" label="show===ChangePwd" size={11} />
      </div>
    </li>
    <li>
      <div><b>UserProfile URL (http://localhost:8080/UserModules/Authentication/Template1/UserProfile): </b> 
         <Badge type="danger" label="show===UserProfile" size={11} />
      </div>
    </li>
 </ol>
 </>);
};