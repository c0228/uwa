import React from "react";
import ContextProvider, { Button, getAppContext } from 'e-ui-react';

export const SampleNote1 = () =>{
 
 const HelloWorld = ()=>{

    const SubComponent1 = ()=>{
        const appContext = getAppContext();
        return (<div>
          Hello {appContext.contextData.city}
        </div>);
    };

    const SubComponent2 = () => {
        const appContext = getAppContext();
        return (
          <div>
            <Button type="primary" label="Update City" size={11} 
            onClick={() => appContext.setContextData({ city: 'Bangalore' })} />
          </div>
        );
    };
      
    return (<div>
        <SubComponent1 />
        <SubComponent2 />
    </div>);
 };

 return (<>
  <ContextProvider component={<HelloWorld />} variables={{ city:'Hyderabad' }}/>
  </>);
  
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;