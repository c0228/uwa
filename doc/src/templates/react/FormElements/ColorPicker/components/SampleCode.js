import React from "react";
import { ColorPicker } from 'e-ui-react';
import { Form } from 'e-ui-react';

export const SampleNote1 = () =>{
  return (<>
    <ColorPicker name="color" label="Choose a Color" />
  </>);
};

export const SampleNote2 = () =>{  
 return (<>
  <Form name="testForm">
    <ColorPicker name="color" label="Choose a Color" value="#e66465" validation={{
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