import React from "react";
import { Accordian } from "e-ui-react";
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import InstagramBasics from "./components/instagram-basics/index.js";
import FollowersFollowings from "./components/0followers-0followings/index.js";

export const SocialMediaInstagram = () =>{
 return (<div>
    <DocumentHeader title="Instagram" componentAttributesTable={{}} />
    <div className="mtop15p">
        <Accordian id="socialMedia-instagram-marketing" 
            defaultOpen="basics-of-instagram"
            data={[{ 
                id:"basics-of-instagram", 
                title: (<h5 className="bs-header"><b>1. Basics of Instagram</b></h5>), 
                component: <InstagramBasics /> 
            },{ 
                id:"insta-0followers-0followings", 
                title: (<h5 className="bs-header"><b>2. Starting with 0 followers and 0 following</b></h5>), 
                component: <FollowersFollowings /> 
            }]} 
  />
    </div>
 </div>);

};