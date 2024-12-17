import React from 'react';
import { getResponsiveStyle } from 'e-ui-react';
import './index.css';

export const Button = (props) => {

  const excludeProps = (props, excludedKeys)=> {
   return Object.fromEntries( Object.entries(props).filter(([key]) => !excludedKeys.includes(key)) );
  };

  const remainingProps = excludeProps(props, ['className', 'style']);   
 
  let classes = "btn btn-"+props?.type+" ";
  if(props?.className!==undefined){ classes+=props?.className; }

  // max-width:1200
  let size = getResponsiveStyle(props.size || 12);
  let margin = 0.5;
  let lSpacing = 0.6;

  let styles = { margin:margin+'px', fontSize:size, letterSpacing: lSpacing+'px' };
  if(props?.style!==undefined){ styles = {...styles, ...props?.style } }
  return (<button type="button" className={classes} style={styles} {...remainingProps}>{props?.children}</button>);
};