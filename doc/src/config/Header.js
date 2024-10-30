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
 return (<div className="row">
        <div className="col-xs-12 col-xl-8 col-xxl-8 col-md-8">
        <Nav menulinks={[{ id:'react', url: url+'Component/AccordianList', label:'React' },
                        { id:'reactNative', url:'#', label:'React Native' },
                        { id:'backend', url:url+'Basics/GetStarted', label:'Integrations' }
						/*{ id:'dsalgo', url:'#', label:'Data Structure & Algorithms' },
                                                        +   { id:'databases', url:'#', label:'Databases' }*/
                ]} activeId={activeId} />
        </div>
        <div className="col-xs-12 col-xl-4 col-xxl-4  col-md-4">
                <ChooseTheme />
        </div>
</div>);
};