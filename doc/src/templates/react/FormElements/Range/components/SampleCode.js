import React from "react";
import { Range } from 'e-ui-react';
import { Form } from 'e-ui-react';

export const SampleNote1 = () =>{
  return (<>
    <Range name="formRanger" label="Select a Range" />
  </>);
};

export const SampleNote2 = () =>{  
 return (<>
  <Form name="testForm">
    <Range name="formRanger" label="Select a Range" value={50} minValue={10} maxValue={1000} 
        validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            }
        }}/>
  </Form>
 </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;