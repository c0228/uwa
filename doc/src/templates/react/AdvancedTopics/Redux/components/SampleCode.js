import React from "react";
import RootProvider, { ReduxDispatcher, toReduxStore, fromReduxStore, Button } from 'e-ui-react';

export const SampleNote1 = () =>{

  const SubComponent1 = ()=>{
    const dispatch = ReduxDispatcher();
 
    const updateData = ()=>{
      dispatch(toReduxStore('City', 'Bangalore'));
    };
      
    return (<>
      <div>Welcome to {fromReduxStore('City')}</div>
      <Button type="outline-primary" size={11} onClick={()=>updateData()}><b>Change City</b></Button>
    </>);
  };

 return (<>
 <RootProvider component={<SubComponent1 />} variables={ { City: 'Hyderabad' }} />
 </>);

};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;