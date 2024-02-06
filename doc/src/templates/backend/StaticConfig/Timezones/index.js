import React from "react";
import { SimpleHeader, Menu, CardScroll } from 'e-ui-react';
import ApiDesign from "./components/apiDesign/index.js";
import UIDesign from "./components/uiDesign/index.js";

const TimezonePage = () =>{
 const menuData = [
            { id:"apiDesign", 
            label:"API Design", 
            component:(<CardScroll borderRadius={0} padding={15} offset={170}>
            <ApiDesign />
            </CardScroll>) },
            { id:"uiDesign", 
            label:"User Interface Design", 
            component:(<CardScroll borderRadius={0} padding={15} offset={170}>
            <UIDesign />
            </CardScroll>) 
            }];

 return (<>
   <SimpleHeader title="Static Config - Timezones" />
   <div style={{ padding:'15px' }}>
      <Menu type="tab" list={menuData} />
   </div>
 </>);
};

export default TimezonePage;
