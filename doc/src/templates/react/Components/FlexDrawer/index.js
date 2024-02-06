import React from "react";
import { FlexDrawer, Icon } from "e-ui-react";

export const FlexDrawerPage = () =>{
 return (<>
    <FlexDrawer 
     width={400}
     top="10%"
     bottom="10%"
     type="outline-primary"
     colors={['black','white']} 
   >
    <div align="center">
         <a href="#">About</a>
         <a href="#">Services</a>
         <a href="#">Clients</a>
         <a href="#">Contact</a>
     </div>
     </FlexDrawer>
 </>);
};