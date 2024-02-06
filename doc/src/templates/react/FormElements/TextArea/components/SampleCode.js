import React, { useState, useEffect } from "react";
import { TextArea } from 'e-ui-react';
import { Form } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
 <TextArea name="surname" label="Surname" placeholder="Enter your Surname" lines={5} />
 </>); 
};

export const SampleNote2 = () =>{
 return (<>
  <Form name="testForm">
   <TextArea name="surname" label="Surname" 
        placeholder="Enter your Surname"
        validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 2,
                errorMessage:"Message should be greator than 2"
            }
        }}
    />
  </Form>
  </>);
};
   

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;