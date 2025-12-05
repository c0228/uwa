import React from "react";
import { RichTextEditor, Form } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
 <Form name="testForm">
  <RichTextEditor name="summernote" 
  backgroundColor="#fff9c4"
  placeholder="Write your Story" height={120} 
  validation={{
    required:{
        value: true,
        errorMessage:"This is a Mandatory Field"
    }
  }} />
 </Form>
 </>);
};

const SampleCode = () =>{
 return (<div></div>);
};

export default SampleCode;