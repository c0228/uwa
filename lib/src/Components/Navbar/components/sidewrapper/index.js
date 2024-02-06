import React, { useState, useEffect, createContext, useContext } from 'react';
import { Icon, Button, DeviceRecognizer } from "e-ui-react";
import './index.css';

const SideWrapperContext = createContext();

export const SideWrapperNavbar = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <SideWrapperContext.Provider value={{ toggle, setToggle }}>
      <div id="wrapper" className={toggle ? '' : 'toggled'}>
        {children}
      </div>
    </SideWrapperContext.Provider>
  );
};
export const SideWrapperMenu = ({ children }) => {
  const { toggle, setToggle } = useContext(SideWrapperContext);
  return (
    <>
      <div id="sidebar-wrapper">
        <div style={{ display: toggle?'block':'none'}}>{children}</div>
      </div>
    </>
  );
};
export const SideWrapperPage = ({ children }) => {
  return (
    <>
      <div id="page-content-wrapper">{children}</div>
    </>
  );
};
export const SideWrapperHeader = ({ barTheme, title, children }) => {
  const { toggle, setToggle } = useContext(SideWrapperContext);
  const [ buttonToggle, setButtonToggle ] = useState(); 
  const [ buttonClass, setButtonClass ] = useState(); // fa-bars : true  fa-close : false

  useEffect(() =>{
    let deviceType = DeviceRecognizer();
    console.log(deviceType);
    if(deviceType==='xs' || deviceType==='sm') { setToggle(false);  } 
    else { setToggle(true); } 
    setButtonToggle(true);
  },[]);

  useEffect(()=>{
    setButtonClass((buttonToggle)?"fa-bars":"fa-close");
  },[buttonToggle]);
  let theme = (barTheme===undefined)?'outline-dark':barTheme;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid" style={{ display:'block',paddingBottom:'5px' }}>
     <div className="row">
         <div className="col-xs-12 col-md-3">
         <a className="navbar-brand" to="#" 
             style={{ marginLeft:'15px'}} 
             onClick={()=>{ setToggle(!toggle);setButtonToggle(!buttonToggle); }}>
               <Button type={theme} style={{ marginRight:'5px' }} 
                   label={<Icon type="FontAwesome" name={(buttonToggle)?"fa-bars":"fa-close"} size="18" />} />
                 <span>{title}</span>
           </a>
         </div>
           <div className="col-xs-12 col-md-9">
             <div className="row">
                {children}
               {/*props.headerContent.map((data,index)=>{
                 return (<div key={index} className={"col-xs-"+data.xs+" col-md-"+data.md}>{data.component}</div>);
               })*/}
             </div>
           </div>
     </div> 
     </div>
      </nav>
    </>
  );
};
export const SideWrapperBody = ({ children }) => {
  return <>{children}</>;
};

