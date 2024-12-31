import React, { useState, useEffect } from 'react';
import HtmlToReactParser from 'html-to-react';
import {
 FilterArray,
 FormInputValidate,
 KeyPressValidate,
 getForm,
 FORM_SUBMITTED,
 FORM_RESET,
} from 'e-ui-react';
import './index.css';

// const data = ["Action","Another Action","Something else here"];

export const Autocomplete = ({
 name,
 label,
 placeholder,
 value,
 autoCompleteData,
 validation,
}) => {
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const [filteredData, setFilteredData] = useState([]);
 const [show, setShow] = useState(false);
 const initialValue = value === undefined ? '' : value;
 const [autoCompleteValue, setAutoCompleteValue] = useState(initialValue);
 // const [validationStatus, setValidationStatus] = useState({});

 const FormMode = form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

 useEffect(() => {
  if (FormMode === FORM_RESET) {
   setAutoCompleteValue(initialValue);
  }
 }, [FormMode]);

 const DataFilter = (val, status) => {
  setAutoCompleteValue(val);
  setFilteredData(FilterArray(autoCompleteData, val));
  setShow(status);
 };

 const autoCompleteValidate = async () => {
  let result = { value: autoCompleteValue };
  if (validation !== undefined) {
   result = await FormInputValidate(validation, autoCompleteValue);
  }

  if (formName !== undefined && form?.[formName] !== undefined) {
   formContext?.setForm(formName, { [name]: result });
  }
 };

 useEffect(() => {
  autoCompleteValidate();
 }, [autoCompleteValue]);

 const validateOnSubmit =
  FormMode === FORM_SUBMITTED || autoCompleteValue?.length > 0;
 const isErrorMessageExist = FormErrorMessage?.length > 0;

 return (
  <>
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
     <b>{label} :</b>
    </label>
   )}
   <div
    className="dropdown"
    tabIndex={1}
    onBlur={(e) => {
     if (!e.currentTarget.contains(e.relatedTarget)) {
      setShow(false);
     }
    }}
   >
    <input
     type="type"
     name={name}
     className={
      validateOnSubmit
       ? isErrorMessageExist
         ? 'form-control dropdown-toggle form-control-validation-invalid'
         : 'form-control dropdown-toggle form-control-validation-valid'
       : 'form-control dropdown-toggle'
     }
     placeholder={placeholder}
     data-bs-toggle="dropdown"
     aria-expanded="false"
     value={autoCompleteValue}
     onChange={(e) => {
      DataFilter(e.target.value, true);
     }}
     onKeyPress={(e) => KeyPressValidate(e, validation?.pattern?.value)}
    />
    {show && filteredData.length > 0 && (
     <ul
      className="dropdown-menu autocomplete-dropdown show"
      aria-labelledby={name}
     >
      {filteredData?.map((d, i) => {
       const htmlToReactParser = new HtmlToReactParser.Parser();
       return (
        <li
         key={i}
         onClick={() => {
          DataFilter(d, false);
         }}
        >
         <a className="dropdown-item">
          {htmlToReactParser.parse(
           d.replace(new RegExp(autoCompleteValue, 'gi'), (str) => {
            return '<b>' + str + '</b>';
           })
          )}
         </a>
        </li>
       );
      })}
     </ul>
    )}

    {validateOnSubmit && isErrorMessageExist && (
     <div align="right" className="form-feedback-validation-invalid">
      {FormErrorMessage}
     </div>
    )}
   </div>
  </>
 );
};
