import React, { useState, useEffect } from "react";
import { getForm, FormInputValidate, FORM_SUBMITTED, FORM_RESET } from "e-ui-react";

import $ from  'jquery';
import './vendor/summernote-lite.min.js';
import './vendor/summernote-lite.min.css';
import './index.css';

export const RichTextEditor = ({ label, name, placeholder, height, value, validation })=>{

 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const initialValue = ( (value === undefined) ?'' : value );
 const [textEditorValue, setTextEditorValue] = useState(initialValue);
 const FormMode =  form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

 useEffect(()=>{
  if( FormMode === FORM_RESET ){
    setTextEditorValue(initialValue);
  }
}, [FormMode]);


useEffect(() => {
  TextEditorValidate(textEditorValue);
}, [textEditorValue]);

const removeTags = (str) => {
  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str?.toString()?.replace( /(<([^>]+)>)/ig, '');
};

 const TextEditorValidate = async(val)=>{
    // validation
    let result = { value: val };
    console.log("removeTags", removeTags(val));
    if (validation !== undefined) {
      result = await FormInputValidate( validation, removeTags(val) );
      console.log("FormInputValidate: ",result);
    }
    // form Data
    if(formName!==undefined && form?.[formName]!==undefined){
      formContext?.setForm(formName, { [name]: result });
    }
 };

 useEffect(()=>{
  $('#'+name).summernote({
    callbacks: {
     onChange: function(value) {
      TextEditorValidate(value);
     }
    },
   // placeholder: placeholder,
    tabsize: 2,
    height: height,
    toolbar: [
     ['style', ['bold', 'italic', 'underline', 'clear']],
     ['font', ['strikethrough', 'superscript', 'subscript']],
     ['color', ['color']],
     ['fontsize', ['fontsize']],
     ['para', ['ul', 'ol', 'paragraph']],
     ['table', ['table']],
     ['insert', ['link', 'picture', 'video']],
     ['view', ['fullscreen', 'codeview', 'help']]
    ]
   });
 },[]);
   
 const validateOnSubmit = ( (FormMode === FORM_SUBMITTED) || textEditorValue?.length > 0);
 const isErrorMessageExist = (FormErrorMessage?.length > 0);

 return (<>
 {label && (<label className={(validateOnSubmit ?
      ((isErrorMessageExist > 0) ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>{label}:</b></label>)}
  <textarea id={name} onBlur={(event)=>{ console.log('triggered') }} value={textEditorValue} readOnly />
  {((validateOnSubmit) && isErrorMessageExist) &&
        <div align="right" className="form-feedback-validation-invalid">
          {FormErrorMessage}</div>
      }
 </>);

};
