import React, { useState, useEffect } from "react";
import { Password } from 'e-ui-react';
import { Form } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
    <Password type="password" label="Account Password" name="pwd" value="" validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 8,
                errorMessage:"Password should be greator than 8"
            },
            maxLength:{
                value: 16,
                errorMessage:"Message should be lessthan 16"
            },
            passwordContains:["Lowercase","Uppercase","Number", "Symbol"]
    }} />
 </>); 
};

export const SampleNote2 = () =>{
 return (<>
     <Form name="testForm">
    <Password type="password" label="Account Password" name="pwd" value="" validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 8,
                errorMessage:"Password should be greator than 8"
            },
            maxLength:{
                value: 16,
                errorMessage:"Message should be lessthan 16"
            },
            passwordContains:["Lowercase","Uppercase","Number", "Symbol"]
    }} />
    <Password type="confirmPassword" reference="pwd" label="Confirm Account Password" name="confirmPwd" value="" validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 8,
                errorMessage:"Password should be greator than 8"
            },
            maxLength:{
                value: 16,
                errorMessage:"Message should be lessthan 16"
            },
            passwordContains:["Lowercase","Uppercase","Number", "Symbol"]
    }} />
    </Form>
  </>);
};
   

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;