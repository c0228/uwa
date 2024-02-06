import React from "react";
import { Card, Colors } from 'e-ui-react';

export const SampleNote1 = () =>{
 
const Component = () =>{
 return (<div><b>Hello World</b></div>);
};

 return (<>
<Card className="intro" 
  padding={15} borderRadius={8} backgroundColor={Colors.light} border="1px solid red"
  style={{ color:'red' }}>
 <Component />
</Card>
 </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;