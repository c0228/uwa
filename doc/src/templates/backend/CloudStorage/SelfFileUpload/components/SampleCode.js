import React from "react";
import { FileUpload, Form } from 'e-ui-react';

export const SampleNote1 = () =>{
    return (<>
     <FileUpload id="helloWorld" type="fileDropper" label="Upload a File" height="300" autoSubmit={true} 
         backend={{
            "apiUrl":"http://localhost/fileUpload/index.php",
            "targetDirectory": "uploads/"
         }} />
    </>);
};
   
export const SampleNote2 = () =>{
    return (<>
    <Form name="testForm">
       <FileUpload id="helloWorld" type="fileDropper" label="Upload a File (With Form)" height="300" 
         backend={{
            "apiUrl":"http://localhost/fileUpload/index.php",
            "targetDirectory": "uploads/"
         }} />
    </Form>
    </>);
};

const SampleCode = () =>{
 return (<></>);
};
     
export default SampleCode;