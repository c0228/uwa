import React, { useState, useEffect, useRef } from "react";
import { getForm, FormInputValidate, FORM_SUBMITTED, FORM_RESET } from 'e-ui-react';
import $ from "jquery";
import "summernote/dist/summernote-lite.css";
import "summernote/dist/summernote-lite.js";
import { Background } from "react-flow-renderer";


export const RichTextEditor = ({ 
    label,
    name,
    placeholder,
    height,
    value,
    backgroundColor,
    validation }) =>{
   const formContext = getForm();
   const formName = formContext?.name;
   const form = formContext?.form;
   const initialValue = value === undefined ? '' : value;
   const [textEditorValue, setTextEditorValue] = useState(initialValue);
   const FormMode = form?.[formName]?.mode;
   const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;
  
   useEffect(() => {
    if (FormMode === FORM_RESET) {
     setTextEditorValue(initialValue);
    }
   }, [FormMode]);
  
   useEffect(() => {
    TextEditorValidate(textEditorValue);
   }, [textEditorValue]);
  const editorRef = useRef(null);

  useEffect(() => {
    // Initialize Summernote
    $(editorRef.current).summernote({
      placeholder: placeholder,
      height: height,
      tabsize: 2,
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['color', ['color']],
        ['fontsize', ['fontsize']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['fullscreen', 'codeview', 'help']],
      ],
      callbacks: {
        onInit: function() {
            $(".note-editable").css("background-color", backgroundColor);
        },
        onChange: function(value) {
            TextEditorValidate(value);
         // if (onChange) onChange(contents);
        }
      }
    });

    // Set initial value
    if (value) {
      $(editorRef.current).summernote("code", value);
    }

    // Cleanup
    return () => {
      $(editorRef.current).summernote("destroy");
    };
  }, []);

  // Update when parent changes value
  useEffect(() => {
    if (value !== undefined) {
      $(editorRef.current).summernote("code", value);
    }
  }, [value]);

   const removeTags = (str) => {
    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str?.toString()?.replace(/(<([^>]+)>)/gi, '');
   };
  
   const TextEditorValidate = async (val) => {
    // validation
    let result = { value: val };
    console.log('removeTags', removeTags(val));
    if (validation !== undefined) {
     result = await FormInputValidate(validation, removeTags(val));
     console.log('FormInputValidate: ', result);
    }
    // form Data
    if (formName !== undefined && form?.[formName] !== undefined) {
     formContext?.setForm(formName, { [name]: result });
    }
   };

   const validateOnSubmit =
     FormMode === FORM_SUBMITTED || textEditorValue?.length > 0;
    const isErrorMessageExist = FormErrorMessage?.length > 0;

  return (<div>
    {label && (
    <label
     className={
      validateOnSubmit
       ? isErrorMessageExist > 0
         ? 'form-label form-label-validation-invalid'
         : 'form-label form-label-validation-valid'
       : 'form-label'
     }
    >
     <b>{label}:</b>
    </label>
   )}
  <div ref={editorRef}></div>
  </div>);
};

