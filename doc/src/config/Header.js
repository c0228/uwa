import React from "react";
import { Select, Nav, UrlParams } from 'e-ui-react';

const url = UrlParams().baseUrl;

const ChooseTheme = () =>{
 return (<Select 
    name="theme"
    placeholder="Select Theme"
    value="Light" 
    options={[{ id:'light', label:'Light Theme', value:'Light' },
            { id:'dark', label:'Dark Theme', value:'Dark' }]}
    className="navbar-layout float-md-end float-xs-start" 
    width="130" 
    fontSize="12" 
    onChange={(event)=>{
     let option = event.target.value;
     let bgColor = (option==='Dark')?'#282a36':'#fff';
     let color = (option==='Dark')?'#fff':'#282a36';
     document.body.style.backgroundColor = bgColor;
     document.body.style.color = color;
    }}  
 />);
};
  
export const NavMenuHeader = ( activeId ) =>{
 return (<>
        <div>
        <Nav menulinks={[{ id:'react', url: url+'Component/AccordianList', label:'React' },
                        { id:'reactNative', url:url+'rn-components/notification', label:'React Native' },
                        { id:'backend', url:url+'Basics/GetStarted', label:'Integrations' },
                        { id:'marketing', url:url+'social-media/instagram', label:'Marketing' }]} 
           activeId={activeId} />
        </div>
        <div className="d-flex ms-auto">
                <div style={{ margin:'6px 15px'}}><a href="Playground" target="_blank">Open Playground</a></div>
                <ChooseTheme />
        </div>
</>);
};