import React from "react";
import { FileUpload } from 'e-ui-react';
import { Form } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
  <FileUpload name="helloWorld" type="fileDropper" label="Upload a File" height="300" autoSubmit={true} 
      backend={{
         "apiUrl":"http://localhost/fileUpload/index.php",
         "targetDirectory": "uploads/"
      }} />
 </>);
};

export const SampleNote2 = () =>{
 return (<>
 <Form name="testForm">
    <FileUpload name="helloWorld" type="fileDropper" label="Upload a File (With Form)" height="300" 
      backend={{
         "apiUrl":"http://localhost/fileUpload/index.php",
         "targetDirectory": "uploads/"
      }} />
 </Form>
 </>);
};
   

export const SampleNote3 = () =>{
   return (<>
    <FileUpload name="helloWorld" type="imageDropper" label="Upload a File" height="400" autoSubmit={true} 
      backend={{
         "apiUrl":"http://localhost/projects/rw/e-ui-doc/nexus/upload/file",
         "resultUrl":"http://localhost/projects/rw/e-ui-doc/uploads/images/",
         "targetDirectory": "images/"
      }} />
   </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;