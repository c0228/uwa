import React from "react";
import './index.css';
import ContextProvider from 'e-ui-react';
import  { AppRouting } from '@DocConfig/GlobalRouting.js';

import("react-dom/client").then((ReactDOM)=>{
 ReactDOM.createRoot(document.getElementById("root"))
  .render(<ContextProvider variables={{ "test":"Hello" }}>
      <AppRouting />
    </ContextProvider>);
});
