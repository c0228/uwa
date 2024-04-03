import React from "react";

export const Badge = ({ type, model, label, size, style, className })=>{
 const styles =  Object.assign({ fontSize: size+'px', paddingTop:'6px', paddingBottom:'6px', marginBottom:'5px', marginRight:'5px', fontWeight:'normal' }, style);
 let m = (model===undefined)?'':' '+model;
 let t = (type==='warning' || type==='info' || type==='light')?type+' text-dark':type;
 let c = (className===undefined)?("badge"+m+" bg-"+t):("badge"+m+" bg-"+t+" "+className);
 return (<span className={c} style={styles}>{label}</span>);
};