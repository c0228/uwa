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
export const SideWrapperMenu = ({ children, config }) => {
 const { toggle, setToggle } = useContext(SideWrapperContext);
 return (
  <>
   <div id="sidebar-wrapper" style={{ backgroundColor: config?.backgroundColor || '#fdfdfd' }}>
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
 barTheme,
 colorConfig,
 children,
}) => {
 const { toggle, setToggle } = useContext(SideWrapperContext);
 const [buttonToggle, setButtonToggle] = useState();
 const [buttonClass, setButtonClass] = useState(); // fa-bars : true  fa-close : false

 useEffect(() => {
  setToggle(true);
 // let deviceType = DeviceRecognizer();
 // if(deviceType === 'xs') {
     
 // } else {
  //    setToggle(true);
 // }
  // logic
  /*
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
   */
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
     padding:'0px',
     backgroundColor: colorConfig?.backgroundColor || '#fff',
     color: colorConfig?.color || '#000',
    }}
   >
    <div className="container-fluid d-flex" style={{ paddingLeft:'10px', paddingRight:'8px' }}>
       <a
        style={{ paddingRight:'8px' }}
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
          name="fa-bars"
          size="18"
         />
        </Button>
       </a>
       <div className="d-flex flex-grow-1" style={{ marginTop:'10px' }}>{children}</div>
       
       </div>
   </nav>
  </>
 );
};
export const SideWrapperBody = ({ children }) => {
 return <div>{children}</div>;
};
