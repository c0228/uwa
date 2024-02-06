import React from "react";
import { Colors } from 'e-ui-react';

export const SimpleHeader = ({ title, backgroundColor, color, rightContent })=>{
 let bgColor = (backgroundColor===undefined)?'none':backgroundColor;
 let fontColor = (color===undefined)?Colors.dark:color ;
 return (<div style={{ marginTop:'8px', paddingLeft:'15px', paddingRight:'15px' }}>
   <h5 className="pageTitle" style={{ backgroundColor: bgColor, color: color }}>
      <span className="title"><b>{title}</b></span>
      <span className="rightContent">{rightContent}</span>
   </h5>
   <hr/>
 </div>);
};

export const FilledHeader = ({ title, backgroundColor, color })=>{
 return (<div style={{ fontSize: '12px', backgroundColor: backgroundColor, padding:'10px', 
   color: color, letterSpacing:1, fontWeight:400 }}>
    {title}
 </div>);
};