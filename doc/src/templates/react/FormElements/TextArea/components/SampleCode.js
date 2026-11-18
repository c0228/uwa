import React, { useState, useEffect } from "react";
import { TextArea } from 'e-ui-react';
import { Form } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
 <TextArea name="description" label="Description" placeholder="Enter description" lines={4}
    validation={{
        required: {
            value: true,
            errorMessage: "Description is required"
        }
    }} />
 </>); 
};

export const SampleNote2 = () =>{
 return (<>
 <TextArea name="about" label="About" placeholder="Write about yourself" lines={5}
    validation={{
        required: {
            value: true,
            errorMessage: "About is required"
        },
        minLength: {
            value: 20,
            errorMessage: "Minimum 20 characters required"
        },
        maxLength: {
            value: 500,
            errorMessage: "Maximum 500 characters allowed"
        }
    }} />
  </>);
};
   
export const SampleNote3 = () =>{
 return (<>
 <TextArea name="comments" label="Comments" lines={4}
    validation={{
        required: {
            value: true,
            errorMessage: "Comments are required"
        },
        validate: (value) => {
            return value.includes("test")?"The word test is not allowed":"";
        }
    }} />
 </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;