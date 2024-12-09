import React from 'react';
import { pxTovh } from 'e-ui-react';
import './index.css';

export const Button = (props) => {

  const excludeProps = (props, excludedKeys)=> {
   return Object.fromEntries( Object.entries(props).filter(([key]) => !excludedKeys.includes(key)) );
  };

  const remainingProps = excludeProps(props, ['className', 'style']);   
 
  const mediaQuery = window.matchMedia('(max-width: 1200px)');
  let classes = "btn btn-"+props?.type+" ";
  if(props?.className!==undefined){ classes+=props?.className; }

  // max-width:1200
  let size = (props.size===undefined)?
          ((mediaQuery?.matches)?12+'px':pxTovh(12)):
          (mediaQuery?.matches)?props.size+'px':(pxTovh(props.size));
  let margin = 0.5;
  let lSpacing = 0.6;

  let styles = { margin:margin+'px', fontSize:size, letterSpacing: lSpacing+'px' };
  if(props?.style!==undefined){ styles = {...styles, ...props?.style } }
  return (<button type="button" className={classes} style={styles} {...remainingProps}>{props?.children}</button>);
};