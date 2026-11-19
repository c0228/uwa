import React from "react";
import { getContext, ContextProvider } from './Context.js';
import './index.css';

export const HelloWorld = () =>{

    const initVariables = {
      "id": "101",
      "basicDetails": {
          "name": "Nellutla L N Rao",
          "cities": ["Hyderabad", "Chennai"],
          "countries": ["India", "USA"],
          "pincode": [501510, 500036, 500228]
      },
    };

    const SubComponent = () => {
        const appContext = getContext();
        return (<>
        <div id="AppHandBookContextData">
          <b>Current Data:</b> {JSON.stringify(appContext.contextData, null, 2)}
        </div>
        <a href="#AppHandBookContextData" className="btn-context" onClick={() => appContext.setContextData([{ path:"id", value:"103", mode: "replace" }])}>
          <b>Replace Id with 103</b>
        </a>
        <a href="#AppHandBookContextData" className="btn-context" onClick={() => appContext.setContextData([{ path:"id", value:"103", mode: "append" }])}>
          <b>Append Id with 103</b>
        </a>
        <a href="#AppHandBookContextData" className="btn-context" onClick={() => appContext.setContextData("basicDetails.name", "N. Anup Chakravarthi", "replace" )}>
          <b>Replace "N. Anup Chakravarthi" to existing Name</b></a>
        <div></div>
        <a href="#AppHandBookContextData" className="btn-context" onClick={() => appContext.setContextData("basicDetails.name", "N. Anup Chakravarthi", "append" )}>
          <b>Append "N. Anup Chakravarthi" to existing Name</b></a>
        <a href="#AppHandBookContextData" className="btn-context" 
          onClick={() =>{
            appContext.setContextData([{ path:"basicDetails.cities", value:["Mumbai", "Delhi"], mode: "replace" },
              { path:"basicDetails.countries", value:["UK", "Australia"], mode: "append" },
             { path:"basicDetails.pincode", value:0, mode: "remove" }])
          }}>
              <b>Append and Replace Multiple Items</b>
        </a>
        </>);
    };
      
    return (<ContextProvider variables={initVariables}>
      <SubComponent />
    </ContextProvider>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;