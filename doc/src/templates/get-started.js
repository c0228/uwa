import React from "react";
import { Header } from "e-ui-react";
import { NavMenuHeader }  from '@DocConfig/Header.js';

export const GetStarted = ()=>{
 return (<Header  
    barTheme="outline-primary" 
 title="Documentation"
 headerContent={NavMenuHeader('get-started')}  />);
};

