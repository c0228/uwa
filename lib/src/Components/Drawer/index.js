import React, { useState, useEffect } from "react";
import { Button } from 'e-ui-react';
import './index.css';

export const Drawer = ({ colorConfig, triggerElement, children, width }) =>{
 const [ drawerStatus, setDrawerStatus ] = useState( false );

 return (<>
 <span onClick={()=>setDrawerStatus(true)}>
  {triggerElement}
 </span>
 <div id="mySidenav" className="drawer" style={{ width: drawerStatus?width:'0%', backgroundColor: colorConfig?.backgroundColor }}>
 <span className="closebtn" onClick={()=>setDrawerStatus(false)} style={{ cursor:'pointer', color: colorConfig?.color }}>&times;</span>
 {children}
</div>
</>);
};