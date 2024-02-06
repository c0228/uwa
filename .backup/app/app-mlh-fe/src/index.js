import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import RootProvider, { AppRouting } from 'e-ui-react';
import  { Routes } from '@Config/Routing.js';
import './index.css';

import("react-dom/client").then((ReactDOM)=>{
  ReactDOM.createRoot(document.getElementById("root"))
   .render(<RootProvider 
     component={<>
     <Router>
        <AppRouting data={Routes} loading={<></>} />
     </Router>
     </>} 
     variables={{}}
   />);
 });
 