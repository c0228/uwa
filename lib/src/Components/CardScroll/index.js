import React from "react";
import './index.css';

export const CardScroll = (props)=>{
  const hgtPage = window.innerHeight-props?.offset;
  let bgColor = (props?.backgroundColor===undefined)?'none':props?.backgroundColor;
  let padding = (props?.padding===undefined)?'0px':props?.padding+'px';
  let borderRadius = (props?.borderRadius===undefined)?'8px':props?.borderRadius+'px';
  let classes = (props?.className===undefined)?'':' '+props?.className;
  const styles =  Object.assign({  backgroundColor: bgColor, padding: padding, 
      borderRadius: borderRadius, minHeight: hgtPage, height: hgtPage }, props.style);
  return (<div className={"bs-card-scroll"+classes} style={styles}>
        {props?.children}
    </div>);
};