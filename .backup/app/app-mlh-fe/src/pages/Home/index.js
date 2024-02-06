import React from "react";
import { SideWrapperNavbar, AccordianListItems, Colors, UrlParams, Nav } from 'e-ui-react';
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const Home = ()=>{

 const NavMenuHeader = ( activeId ) =>{
    return (<div className="row">
           <div className="col-xs-12 col-xl-8 col-xxl-8 col-md-8">
           <Nav menulinks={[{ id:'react', url: '#', label:'React' },
                           { id:'reactNative', url:'#', label:'React Native' },
                           { id:'backend', url:'#', label:'Integrations' }
                           /*{ id:'dsalgo', url:'#', label:'Data Structure & Algorithms' },
                                                           +   { id:'databases', url:'#', label:'Databases' }*/
                   ]} activeId={activeId} /> 
   
           </div>
   </div>);
   };

 return (<>
 {/*<Header menulinks={HeaderMenu} activeId="Home" />*/}
 <SideWrapperNavbar 
            barTheme="outline-primary" 
            // title="Documentation" 
            sideWrapperContent={<>
           
            </>}
            headerContent={<>
            <NavMenuHeader activeId="react" />
            </>} 
            bodyContent={""} 
            />
 </>);
};

export default Home;