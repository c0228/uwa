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
    <Range name="age" label="Age" start={0} end={100}
      validation={{
        required: {
          value: true,
          errorMessage: "Age is required"
        },
        range: {
          minValue: 18,
          maxValue: 60,
          errorMessage: "Age must be between 18 and 60"
        }
      }} />
  </Form>
 </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;