import React from "react";
import { Colors } from 'e-ui-react';
import './index.css';

export const SimpleHeader = ({ title, backgroundColor, color, rightContent })=>{
 let bgColor = (backgroundColor || 'none');
 let fontColor = (color || Colors.dark);
 return (<div className="div-simple-header" style={{ backgroundColor: bgColor, color: fontColor }}>
    <div className="title"><b>{title}</b></div>
    <div align="right" className="rightContent"><b>{rightContent}</b></div>
 </div>);
};

export const FilledHeader = ({ title, backgroundColor, color })=>{
 return (<div className="div-filled-header" style={{ backgroundColor: backgroundColor, color: color }}>
    {title}
 </div>);
};