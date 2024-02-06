import React from "react";
import { FloatingButton } from 'e-ui-react';

export const SampleNote1 = () =>{
  return (<>
<FloatingButton className="bg-primary text-white" bottom="5.2%" right="8%" >
  Click Me
</FloatingButton>
   </>);
};

export const SampleNote2 = () =>{
  return (<>
<FloatingButton type="circular" className="bg-warning text-dark" bottom="5%" right="2%" >
 Click
</FloatingButton>
   </>);
 };

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;