import React, { useState, useEffect } from "react";
import { Password } from 'e-ui-react';
import { Form } from 'e-ui-react';
import { Row, Col } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
 <Password name="password" label="Password" placeholder="Enter Password"
  validation={{
    required: {
      value: true,
      errorMessage: "Password is required"
    }
  }} />
 </>);
};

export const SampleNote2 = () =>{
 return (<>
 <Password name="password" label="Password" placeholder="Enter Password"
  validation={{
    required: {
      value: true,
      errorMessage: "Password is required"
    },
    minLength: {
      value: 8
    },
    maxLength: {
      value: 12
    },
    passwordContains: [
      'Lowercase',
      'Uppercase',
      'Number',
      'Symbol'
    ]
  }} />
 </>);
};

export const SampleNote3 = () =>{
 return (<>
 <Form name="testForm">
    <Row>
        <Col md={12}>
            <Password type="password" label="Account Password" name="pwd" placeholder="Enter Password" value="" 
                validation={{
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
        </Col>
        <Col md={12} className="mtop15p">
            <Password type="confirmPassword" reference="pwd" label="Confirm Account Password" name="confirmPwd" value="" 
                validation={{
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
        </Col>
    </Row>
 </Form>
 </>);
}
/*
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
     
};
*/

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;