import React from "react";
import { Breadcrumb, Colors } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
 <Breadcrumb backgroundColor={Colors.light} 
 data={[{ label:'Page1', url:'#', onClick:()=>alert('Page 01') },
    { label:'Hello', url:'#', onClick:()=>alert('Hello') }
 ]} />
 </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;