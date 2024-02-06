import React from "react";
import './index.css';

export const FloatingButton = ({ type, className, children, bottom, right, left, top })=>{
 const classes=((type==='circular')?"bs-floating-button-circular":"bs-floating-button-rectangle")+" "+className;
 const styles = {};
 if(bottom!==undefined){ styles.bottom = bottom; }
 if(right!==undefined){ styles.right = right; }
 if(left!==undefined){ styles.left = left; }
 if(top!==undefined){ styles.top = top; }

 return (<>
    <button className={classes} style={styles}>{children}</button>
 </>);
};