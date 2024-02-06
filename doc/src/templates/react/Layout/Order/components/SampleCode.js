import React from "react";
import { Order } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
  <Order type="bullet"  data={["Apple", "Mango", "Cherry"]}/>
  </>);
};

export const SampleNote2 = () =>{
  return (<>
   <Order type="number"  data={["Apple", "Mango", "Cherry"]}/>
   </>);
};

export const SampleNote3 = () =>{
    return (<>
      <Order type="number" start="6"  data={["Apple", "Mango", "Cherry"]}/>
     </>);
  };

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;