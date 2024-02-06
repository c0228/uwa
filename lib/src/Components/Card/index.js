import React from 'react';
import './index.css';

export const Card = (props) =>{
 let bgColor = (props?.backgroundColor===undefined)?'none':props?.backgroundColor;
 let padding = (props?.padding===undefined)?'0px':props?.padding+'px';
 let borderRadius = (props?.borderRadius===undefined)?'8px':props?.borderRadius+'px';
 let border = (props?.border===undefined)?'1px solid #ccc':props?.border;
 const styles =  Object.assign({  backgroundColor: bgColor, padding: padding, borderRadius: borderRadius, border: '0px' }, 
   props.style);
 return (<div className="card" style={{ borderRadius: borderRadius, border: border }}>
 <div className={(props?.className===undefined)?"card-body":"card-body "+props?.className} style={styles}>
    <div>{props?.children}</div>
 </div>
</div>);
}
