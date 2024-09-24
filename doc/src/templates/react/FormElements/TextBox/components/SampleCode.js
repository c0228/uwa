import React, { useState, useEffect } from "react";
import { TextBox } from 'e-ui-react';
import { Form } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
  <TextBox name="surname" label="Surname" placeholder="Enter your Surname" />
 </>); 
};

export const SampleNote2 = () =>{
 return (<>
  <Form name="testForm">
   <TextBox name="surname" label="Surname" placeholder="Enter your Surname" 
        validation={{
            onSubmit:{
                textTransform: 'SENTENCE_CASE' // SENTENCE_CASE / UPPER_CASE / LOWER_CASE
            },
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 5,
                errorMessage:"Message should be greator than 5"
            }
        }} />
  </Form>
  </>);
};
   

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;