import React, { useState, useEffect } from 'react';
import HtmlToReactParser from 'html-to-react';
import {
 Icon,
 Colors,
 FormInputValidate,
 getForm,
 FORM_SUBMITTED,
 FORM_RESET,
} from 'e-ui-react';
import './index.css';

export const Dropdown = ({
 width,
 label,
 name,
 type,
 placeholder,
 menu,
 layout,
 value,
 validation,
 onChange,
 valueholder,
 container,
}) => {
 /**
  * container:{ height: '' }
  */
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;

 const FormMode = form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

 const [applyCheckedCss, setApplyCheckedCss] = useState(false);
 const [menuOptions, setMenuOptions] = useState(menu);
 const [status, setStatus] = useState(false);
 const initialValue = () => {
  if (type === 'multiple') {
   return value === undefined
    ? []
    : Array.isArray(value)
      ? value
      : value?.split(',');
  } else {
   return value === undefined ? '' : value;
  }
 };
 const [dropDownValue, setDropdownValue] = useState(initialValue());
 const [searchValue, setSearchValue] = useState('');

 const SearchData = (filterData) => {
  console.log('filterData: ', filterData);
  const filteredMenu = menu?.reduce((result, item) => {
   const { header, options } = item;
   // Check if the header matches the search
   if (header?.toLowerCase()?.includes(filterData?.toLowerCase())) {
    const filteredOptions = options?.filter((option) =>
     option?.label?.toLowerCase().includes(filterData?.toLowerCase())
    );
    // Include the header and filtered options in the result
    if (filteredOptions?.length > 0) {
     result?.push({ header, options: filteredOptions });
    }
   } else {
    const filteredOptions = options?.filter((option) =>
     option?.label?.toLowerCase()?.includes(filterData?.toLowerCase())
    );
    // Include the header and filtered options in the result
    if (filteredOptions?.length > 0) {
     result.push({ header, options: filteredOptions });
    }
   }

   return result;
  }, []);
  return filteredMenu;
 };

 const DropdownValidate = async () => {
  // validation
  let result = { value: dropDownValue };
  if (validation !== undefined) {
   result = await FormInputValidate(validation, dropDownValue.toString());
   console.log(result);
  }
  // form Data
  if (formName !== undefined && form?.[formName] !== undefined) {
   formContext?.setForm(formName, { [name]: result });
  }
  if (onChange !== undefined) {
   onChange(result);
  }
 };

 useEffect(() => {
  console.log('dropDownValue [onChange]', dropDownValue);
  DropdownValidate();
 }, [dropDownValue]);

 useEffect(() => {
  if (FormMode === FORM_RESET) {
   setDropdownValue(initialValue());
  }
 }, [form]);

 const buildMenuOptions = (menu) => {
  const htmlToReactParser = new HtmlToReactParser.Parser();
  return menu?.map((m, index) => {
   const key = `${index}`;
   return (
    <div key={key}>
     {m?.header && (
      <li>
       <h5 className="dropdown-header">
        {htmlToReactParser.parse(
         m.header.replace(
          new RegExp(searchValue, 'gi'),
          (str) => `<b>${str}</b>`
         )
        )}
       </h5>
      </li>
     )}
     {m?.label && (
      <li
       className={`dropdown-item curpoint ${
        type === 'multiple' &&
        Array.isArray(dropDownValue) &&
        dropDownValue.includes(m.label)
         ? 'dropdown-test'
         : ''
       }`}
       onClick={() => {
        if (type === 'multiple') {
         console.log(
          'type',
          type,
          'dropDownValue',
          dropDownValue,
          'label',
          m?.label
         );
         if (Array.isArray(dropDownValue) && dropDownValue.includes(m.label)) {
          setDropdownValue((prevValue) =>
           prevValue.filter((l) => l !== m?.label)
          );
         } else {
          setDropdownValue((prevValue) => [...prevValue, m?.label]);
         }
        } else {
         setDropdownValue(m?.label);
         setStatus(false);
        }
       }}
      >
       {type === 'multiple' &&
       Array.isArray(dropDownValue) &&
       dropDownValue.includes(m.label) ? (
        <>
         {htmlToReactParser.parse(
          m.label.replace(
           new RegExp(searchValue, 'gi'),
           (str) => `<b>${str}</b>`
          )
         )}
         <Icon
          type="FontAwesome"
          name="fa-check pull-right"
          size="15"
          color={Colors.success}
         />
        </>
       ) : (
        <>
         {htmlToReactParser.parse(
          m.label.replace(
           new RegExp(searchValue, 'gi'),
           (str) => `<b>${str}</b>`
          )
         )}
        </>
       )}
      </li>
     )}
     {m?.options && buildMenuOptions(m.options)}
    </div>
   );
  });
 };

 useEffect(() => {
  const data = SearchData(searchValue);
  console.log('Filtered Search Data', data);
  setMenuOptions(data);
 }, [searchValue]);

 const handleSelectAll = () => {
  const allValues = menu.reduce((acc, m) => {
   if (m.label) acc.push(m.label);
   if (m.options) {
    const optionsValues = m.options.map((o) => o.label);
    acc.push(...optionsValues);
   }
   return acc;
  }, []);
  setDropdownValue(allValues);
 };

 const handleDeselectAll = () => {
  setDropdownValue([]);
 };

 const validateOnSubmit =
  FormMode === FORM_SUBMITTED || dropDownValue?.length > 0;
 const isErrorMessageExist = FormErrorMessage?.length > 0;

 const displayValueSize = valueholder === undefined ? 2 : valueholder;
 return (
  <>
   {label && (
    <label
     className={`form-label ${
      validateOnSubmit
       ? isErrorMessageExist
         ? 'form-label-validation-invalid'
         : 'form-label-validation-valid'
       : ''
     }`}
    >
     <b>{label}:</b>
    </label>
   )}
   <div
    tabIndex={1}
    onBlur={(e) => {
     if (!e.currentTarget.contains(e.relatedTarget)) {
      setStatus(false);
     }
    }}
   >
    <div className="dropdown" style={{ width: width }}>
     <button
      type="button"
      className={`btn btn-outline-secondary form-control dropdown-toggle ${
       validateOnSubmit
        ? isErrorMessageExist
          ? 'form-control-validation-invalid'
          : 'form-control-validation-valid'
        : ''
      }`}
      data-bs-toggle="dropdown"
      style={{
       width: '100%',
       textAlign: 'left',
       border: '1px solid #ccc',
       margin: '0px',
      }}
      onClick={() => setStatus(!status)}
     >
      <span style={{ paddingRight: '8px' }}>
       {dropDownValue?.length > 0 ? (
        <>
         {Array.isArray(dropDownValue)
          ? dropDownValue?.length > 2
            ? dropDownValue?.slice(0, displayValueSize)?.join(', ') +
              ', +' +
              (dropDownValue?.length - displayValueSize)
            : dropDownValue?.join(', ')
          : dropDownValue}
        </>
       ) : (
        placeholder
       )}
      </span>
      <Icon
       type="FontAwesome"
       name="fa-angle-down pull-right"
       size="15"
       color={Colors.dark}
      />
     </button>
     <ul
      className={`dropdown-menu ${status ? 'show' : ''}${layout === 'top' ? ' dropup-menu' : ''}`}
      data-popper-placement="top-start"
     >
      <div className="input-group mb-0">
       <input
        className="form-control"
        placeholder={container?.searchLabel}
        onChange={(event) => {
         setSearchValue(event.target.value);
        }}
       />
       <button type="button" className="btn btn-secondary">
        <Icon
         type="FontAwesome"
         name="fa-search"
         size="12"
         color={Colors.light}
        />
       </button>
      </div>
      {type === 'multiple' && (
       <div className="container-fluid">
        <div className="row">
         <div className="col-xl-6" style={{ paddingRight: '0px' }}>
          <button
           type="button"
           className="btn btn-outline-primary"
           style={{
            width: '100%',
            borderRight: '0px',
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '0px',
           }}
           onClick={handleSelectAll}
          >
           Select All
          </button>
         </div>
         <div className="col-xl-6" style={{ paddingLeft: '0px' }}>
          <button
           type="button"
           className="btn btn-outline-primary"
           style={{
            width: '100%',
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
           }}
           onClick={handleDeselectAll}
          >
           Deselect All
          </button>
         </div>
        </div>
       </div>
      )}
      <div
       className="dropdown-scroll scroll"
       style={{
        maxHeight:
         container?.height !== undefined ? container?.height : '100px',
       }}
      >
       {buildMenuOptions(menuOptions)}
      </div>
     </ul>
    </div>
   </div>
   {validateOnSubmit && isErrorMessageExist && (
    <div align="right" className="form-feedback-validation-invalid">
     {FormErrorMessage}
    </div>
   )}
  </>
 );
};
