import React from 'react';
import { pxTovh } from "e-ui-react";
import './index.css';

export const Card = (props) =>{
 const mediaQuery = window.matchMedia('(max-width: 1200px)');
 let bgColor = (props?.backgroundColor===undefined)?'none':props?.backgroundColor;
 let padding = (mediaQuery?.matches)?((props?.padding===undefined)?'0px':props?.padding+'px')
                :((props?.padding===undefined)?pxTovh(0):pxTovh(props?.padding));
 let borderRadius = (mediaQuery?.matches)?((props?.borderRadius===undefined)?'8px':props?.borderRadius+'px')
                :((props?.borderRadius===undefined)?pxTovh(8):pxTovh(props?.borderRadius));
 let border = (mediaQuery?.matches)?((props?.borderWidth===undefined)?'1px solid #ccc':props?.borderWidth+'px solid '+props?.borderColor)
                  :((props?.borderWidth===undefined)?pxTovh(1)+' solid #ccc':pxTovh(props?.borderWidth)+'px solid '+props?.borderColor);
 const styles =  Object.assign({  backgroundColor: bgColor, padding: padding, borderRadius: borderRadius, border: '0px' }, 
   props.style);
 return (<div className="card" style={{ borderRadius: borderRadius, border: border }}>
 <div className={(props?.className===undefined)?"card-body":"card-body "+props?.className} style={styles}>
    <div>{props?.children}</div>
 </div>
</div>);
}
