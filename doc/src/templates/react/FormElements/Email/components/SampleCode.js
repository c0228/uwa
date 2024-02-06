import React, { useState, useEffect } from "react";
import { Email } from 'e-ui-react';
import { Form } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
 <Email validation={{
        email:{
            formatCheck: true,
            isEmailExist:{ 
                // If Email Already Exists, Returns 'EXIST'
                // If Email not exists, Returns 'NOT_EXIST'
                url:"http://localhost:80821/",
                method:"",
                value:"EXIST", // When Value not matches - throws Error Message
                errorMessage:""
            }
        }
    }} />
 </>); 
};

export const SampleNote2 = () =>{
 return (<>
 <Email validation={{
        email:{
            formatCheck: true,
            isEmailExist:{ 
                // If Email Already Exists, Returns 'EXIST'
                // If Email not exists, Returns 'NOT_EXIST'
                url:"",
                method:"",
                value:"NOT_EXIST", // When Value not matches - throws Error Message
                errorMessage:""
            }
        }
    }} />
 </>);

};

export const SampleNote3 = () =>{
 return (<>
  <Form name="testForm">
    <Email name="emailAddress" validation={{
        email:{
            formatCheck: true,
            isEmailExist:{ 
                // If Email Already Exists, Returns 'EXIST'
                // If Email not exists, Returns 'NOT_EXIST'
                url:"http://localhost/test.php",
                method:"GET",
                value:"EXIST", // When Value not matches - throws Error Message
                errorMessage:"This Email is already registered"
            }
        }
    }} />
    </Form>
  </>);
};
   

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;