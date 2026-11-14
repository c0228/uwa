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
            <b>Current Id:</b> {appContext.contextData.id} 
            <a href="#AppHandBookContextData" className="btn-context" onClick={() => appContext.setContextData("id", "103" )}><b>Replace Id</b></a>
          </div>
          <div>
            <b>Name:</b> {appContext.contextData.basicDetails.name} 
            <a href="#AppHandBookContextData" className="btn-context" onClick={() => appContext.setContextData("basicDetails.name", "N. Anup Chakravarthi" )}>
              <b>Replace Name</b>
            </a>
          </div>
          <div>
            <b>Cities:</b> {JSON.stringify(appContext.contextData.basicDetails.cities)} 
            <a href="#AppHandBookContextData" className="btn-context" onClick={() => appContext.setContextData("basicDetails.cities", ["London", "Wales" ])}>
              <b>Replace Cities</b>
            </a>
          </div>
          <div>
            <b>Countries:</b> {JSON.stringify(appContext.contextData.basicDetails.countries)} 
            <a href="#AppHandBookContextData" className="btn-context" onClick={() => appContext.setContextData("basicDetails.countries", ["UK", "Australia" ], "append")}>
              <b>Append Countries</b>
            </a>
          </div>
          <div>
            <b>Countries:</b> {JSON.stringify(appContext.contextData.basicDetails.pincode)} 
            <a href="#AppHandBookContextData" className="btn-context" onClick={() => appContext.setContextData("basicDetails.pincode", 0, "remove")}>
              <b>Remove Countries Attribute</b>
            </a>
          </div>
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