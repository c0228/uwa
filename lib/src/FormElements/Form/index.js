import React, {
 useState,
 useEffect,
 useCallback,
 useMemo,
 createContext as createFormContext,
 useContext as useForm,
} from 'react';
import { Row, Col, Button } from 'e-ui-react';

const FormContext = createFormContext();

// Static Variables
export const FORM_SUBMITTED = 'SUBMITTED';
export const FORM_RESET = 'RESET';

export const getForm = () => useForm(FormContext);

export const Form = React.memo(
 ({ name, btnSubmit, btnReset, children, onSubmit, beforeReset, onReset }) => {
  const [form, updateForm] = useState({ [name]: {} });

  useEffect(() => {
   setFormMode('INITIAL');
  }, []);

  const setForm = async (name, data) => {
   let d = { [name]: Object.assign(form[name], data) };
   // updateForm({ ...form, ...d });
   updateForm(d);
  };

  let afterSubmitted;
  const afterSubmit = useCallback((submit) => {
   afterSubmitted = submit;
  }, []);

  const setFormMode = (status) => {
   setForm(name, { mode: status }); // status = SUBMITTED / RESET
  };

  const triggerReset = () => {
   setFormMode(FORM_RESET);
   console.log('Triggered Reset');
   setTimeout(() => setFormMode('INITIAL'), 1000);
  };

  const onSubmission = useCallback(async () => {
   setFormMode(FORM_SUBMITTED);
   if (onSubmit !== undefined) {
    const isValid = isErrorMessageEmpty(form[name]);
    onSubmit(form, isValid, triggerReset);
   }
   if (afterSubmitted !== undefined) {
    afterSubmitted();
   }
  }, [onSubmit, form, name, afterSubmitted]);

  const isErrorMessageEmpty = useMemo(
   () => (form) => {
    let keys = Object.keys(form);
    let status = true;
    for (let i = 0; i < keys.length; i++) {
     let errorMessage = form[keys[i]]?.errorMessage;
     if (errorMessage?.length > 0) {
      status = false;
      break;
     }
    }
    return status;
   },
   []
  );

  useEffect(() => {
   console.log('Form Values [Received]: ', form[name]);
  }, [form]);

  return (
   <FormContext.Provider value={{ name, form, setForm, afterSubmit }}>
    <form id={name} onSubmit={(event) => event.preventDefault()}>
     {children}
     <div align={btnSubmit?.align} style={{ paddingTop: '15px' }}>
      <Button
       type={btnSubmit?.btnType}
       size={btnSubmit?.size}
       style={btnSubmit?.style}
       onClick={() => {
        onSubmission();
       }}
      >
       {btnSubmit?.label}
      </Button>
      {btnReset !== undefined && (
       <Button
        type={btnReset?.btnType}
        size={btnReset?.size}
        style={Object.assign({ marginLeft: '5px' }, btnReset?.style)}
        onClick={() => {
         if (onReset !== undefined) {
          onReset(triggerReset);
         }
        }}
       >
        {btnReset?.label}
       </Button>
      )}
     </div>
    </form>
   </FormContext.Provider>
  );
 }
);
