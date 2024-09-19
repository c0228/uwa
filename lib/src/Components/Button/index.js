import React from 'react';

export const Button = (props) => {

 const excludeProps = (props, excludedKeys)=> {
  return Object.fromEntries( Object.entries(props).filter(([key]) => !excludedKeys.includes(key)) );
 };


 const remainingProps = excludeProps(props, ['className', 'style']);     
 let classes = "btn btn-"+props?.type+" ";
 let styles = { margin:'0.5px', fontSize:size+'px', letterSpacing: '0.6px' };
 if(props?.className!==undefined){ classes+=props?.className; }
 if(props?.style!==undefined){ styles = {...styles, ...props?.style } }
 let size = (props.size===undefined)?12:props.size;
 return (<button type="button" className={classes} 
  style={styles} {...remainingProps}>{props?.children}</button>);
};