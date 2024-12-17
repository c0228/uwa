import React from 'react';
import { getResponsiveStyle } from "e-ui-react";
import './index.css';

export const Card = (props) =>{
 let bgColor = props?.backgroundColor || 'none';
 let padding = getResponsiveStyle(props?.padding || 0);
 let borderRadius = getResponsiveStyle(props?.borderRadius || 8);
 let border = (props?.borderWidth || 1)+'px solid '+(props?.border?.color || '#ccc');
 const styles =  Object.assign({  backgroundColor: bgColor, padding: padding, borderRadius: borderRadius, border: '0px' }, 
   props.style);
 return (<div className="card" style={{ borderRadius: borderRadius, border: border }}>
 <div className={(props?.className===undefined)?"card-body":"card-body "+props?.className} style={styles}>
    <div>{props?.children}</div>
 </div>
</div>);
}
