import React from "react";
import { Accordian } from "e-ui-react";
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import FollowersFollowings from "./components/0followers-0followings/index.js";

export const SocialMediaInstagram = () =>{
 return (<div>
    <DocumentHeader title="Instagram" componentAttributesTable={{}} />
    <div className="mtop15p">
        <Accordian id="socialMedia-instagram-marketing" 
            defaultOpen="insta-0followers-0followings"
            data={[{ 
                id:"insta-0followers-0followings", 
                title: (<h5 className="bs-header"><b>Starting with 0 followers and 0 following</b></h5>), 
                component: <FollowersFollowings /> 
            }]} 
  />
    </div>
 </div>);

};