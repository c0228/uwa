import React, { useState, useEffect } from "react";
import { GoogleFonts, FW_LIGHT, FW_NORMAL, FW_SEMIBOLD, FW_BOLD } from 'e-ui-react';
import './SampleCode.css';

export const SampleNote1 = () =>{  
 const fonts =  [{
                    "font-family": "Poppins",
                    "weight": [FW_NORMAL, FW_SEMIBOLD],
                },
                {
                    "font-family": "Open+Sans",
                    "weight": [FW_NORMAL],
                }];

 return (<>
 <GoogleFonts values={fonts}>
     <h1 style={{ fontFamily: 'Poppins' }}>Hello StackBlitz!</h1>
     <p style={{ fontFamily: 'Open Sans', fontSize:'16px' }}>
        Start editing to see some magic happen :)
     </p>
 </GoogleFonts>
 </>); 
};

export const Template1 = () =>{
 const fonts = [{
                  "font-family": "Playfair+Display",
                  "weight": [FW_NORMAL, FW_BOLD],
                },
                {
                  "font-family": "Merriweather",
                  "weight": [FW_LIGHT, FW_NORMAL],
                },
                {
                  "font-family": "Open+Sans",
                  "weight": [FW_LIGHT, FW_NORMAL],
                }];
 return (<>
  <GoogleFonts values={fonts}>
     <h1 className="fonts-template1-header"><b>Playful Display Header</b></h1>
     <h4 className="fonts-template1-subTitle">Merriweather SubTitle</h4>
     <p className="fonts-template1-desc">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
     veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
     commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
     non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </p>
  </GoogleFonts>
 </>);
};

const SampleCode = () =>{
  return (<></>);
};
     
export default SampleCode;