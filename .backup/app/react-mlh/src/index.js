import React from "react";
import RootProvider, { AppRouting } from 'e-ui-react';
import  { Routes } from './config/Routing.js';
import './index.css';

import("react-dom/client").then((ReactDOM)=>{
  ReactDOM.createRoot(document.getElementById("root"))
   .render(<RootProvider 
     component={<AppRouting data={Routes} loading={<></>} />} 
     variables={{}}
   />);
 });