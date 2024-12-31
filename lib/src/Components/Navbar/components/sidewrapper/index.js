import React, { useState, useEffect, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button, DeviceRecognizer } from 'e-ui-react';
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
    {/*<div style={{ display: toggle?'block':'none'}}>{children}</div>*/}
    <div>{children}</div>
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

/* 
 isOpen={
  xs: true,
  sm: true,
  xxl: true,
  xl: true
 }
*/
export const SideWrapperHeader = ({
 isOpen,
 barTheme,
 colorConfig,
 title,
 children,
}) => {
 const { toggle, setToggle } = useContext(SideWrapperContext);
 const [buttonToggle, setButtonToggle] = useState();
 const [buttonClass, setButtonClass] = useState(); // fa-bars : true  fa-close : false

 useEffect(() => {
  let deviceType = DeviceRecognizer();
  console.log(deviceType);
  // logic
  if (
   (deviceType === 'xs' && !isOpen?.xs) ||
   (deviceType === 'sm' && !isOpen?.sm) ||
   (deviceType === 'md' && !isOpen?.md) ||
   (deviceType === 'lg' && !isOpen?.lg) ||
   (deviceType === 'xl' && !isOpen?.xl) ||
   (deviceType === 'xxl' && !isOpen?.xxl)
  ) {
   setToggle(false);
   setButtonToggle(true);
  } else {
   setToggle(true);
   setButtonToggle(false);
  }
 }, []);

 useEffect(() => {
  setButtonClass(buttonToggle ? 'fa-bars' : 'fa-close');
 }, [buttonToggle]);
 let theme = barTheme === undefined ? 'outline-dark' : barTheme;
 return (
  <>
   <nav
    className="navbar navbar-expand-lg"
    style={{
     backgroundColor: colorConfig?.backgroundColor || '#fbfbfb',
     color: colorConfig?.color || '#000',
    }}
   >
    <div className="container-fluid" style={{ display: 'block' }}>
     <div className="row">
      <div className="col-xs-12 col-md-3">
       <a
        className="navbar-brand"
        href="#"
        onClick={() => {
         setToggle(!toggle);
         setButtonToggle(!buttonToggle);
        }}
       >
        <Button
         type={theme}
         style={{
          color: colorConfig?.color || '#000',
          border: '1px solid ' + colorConfig?.color || '#000',
          background: 'none',
         }}
        >
         <Icon
          type="FontAwesome"
          name={buttonToggle ? 'fa-bars' : 'fa-close'}
          size="18"
         />
        </Button>
       </a>
       <span style={{ color: colorConfig?.color || '#000' }}>{title}</span>
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
