import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Form, Autocomplete, Select, Choice, Switch, ColorPicker, DateTimePicker,
    Email, Password, ConfirmPassword, Range, TextBox, TextSearch, TextArea, FileUpload, RichTextEditor,
    Dropdown } from "e-ui-react";

const FormTest = () =>{

 const AutoCompleteElement1 = ()=>{
    const [ data, setData ] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(json => setData(json.map((d)=>d.name)));
       },[]);
    return (<>
        <Autocomplete name="AutoCompleteElement1" 
         label="AutoCompleteElement (With Validation)" 
         placeholder="Enter your Value" 
         autoCompleteData={data} 
         validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 2,
                errorMessage:"Message should be greator than 2"
            }
        }}
        />
    </>);
 };

 const AutoCompleteElement2 = ()=>{
    const [ data, setData ] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(json => setData(json.map((d)=>d.name)));
       },[]);
    return (<>
        <Autocomplete name="AutoCompleteElement2" 
         label="AutoCompleteElement (No Validation)" 
         placeholder="Enter your Value" 
         autoCompleteData={data}
        />
    </>);
 };

 const SelectElement1V = ()=>{
    return (<Select
        name="SelectElement1V"
        label="Select (With Validation)"
        placeholder="Select Theme"
        options={[{ id: 'light', label: 'Light Theme', value: 'Light' },
        { id: 'dark', label: 'Dark Theme', value: 'Dark' }]}
        className="navbar-layout"
        width="100%"
        fontSize="12" 
        validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            }
        }}
     />);
 };

 const SelectElement2NV = ()=>{
    return (<Select
        name="SelectElement2NV"
        label="Select (No Validation)"
        placeholder="Select Theme"
        options={[{ id: 'light', label: 'Light Theme', value: 'Light' },
        { id: 'dark', label: 'Dark Theme', value: 'Dark' }]}
        className="navbar-layout"
        width="100%"
        fontSize="12"
     />);
 };
    
 const ChoiceElement1V = ()=>{
    return (<Choice type="checkbox" id="numbers" name="numbers1V" label="Choice (Checkbox) Elements (With Validation)" 
    value={[{ id:1, label:"Choice (Checkbox) #1", value:"Choice (Checkbox) #1" },
            { id:2, label:"Choice (Checkbox) #2", value:"Choice (Checkbox) #2" },
            { id:3, label:"Choice (Checkbox) #3", value:"Choice (Checkbox) #3" }]} 
    validation={{
                required:{
                    value: true,
                    errorMessage : "Please Select Choice#1"
                },
                minSelect:{
                    value: 2,
                    errorMessage: "Please Select atleast 2"
                },
                maxSelect:{
                    value: 5,
                    errorMessage: "Please Select atleast 1"
                }
            }} />);
 };

 const ChoiceElement2V = ()=>{
    return (<Choice type="radio" id="numbers" name="numbers2V" label="Choice (Radio) Elements  (With Validation)" 
    value={[{ id:1, label:"Choice (Radio) #1", value:"Choice (Radio) #1" },
    { id:2, label:"Choice (Radio) #2", value:"Choice (Radio) #2" },
    { id:3, label:"Choice (Radio) #3", value:"Choice (Radio) #3" }]} 
    validation={{
        required:{
            value: true,
            errorMessage : "Please Select Choice#2"
        },
        minSelect:{
            value: 2,
            errorMessage: "Please Select atleast 2"
        },
        maxSelect:{
            value: 5,
            errorMessage: "Please Select atleast 1"
        }
            }} />);
 };

 const SwitchElement1V = ()=>{
    return (<Switch type="checkbox" id="numbers3" name="numbers3V" label="Switch (Checkbox) Elements  (With Validation)" 
    value={[{ id:1, label:"Switch (Checkbox) #1", value:"Switch (Checkbox) #1" },
    { id:2, label:"Switch (Checkbox) #2", value:"Switch (Checkbox) #2" },
    { id:3, label:"Switch (Checkbox) #3", value:"Switch (Checkbox) #3" }]} 
    validation={{
        required:{
            value: true,
            errorMessage : "Please Select Switch#1"
        },
        minSelect:{
            value: 2,
            errorMessage: "Please Select atleast 2"
        },
        maxSelect:{
            value: 5,
            errorMessage: "Please Select atleast 1"
        }
    }} />);
 };

 const SwitchElement2V = ()=>{
    return (<Switch type="radio" id="numbers4" name="numbers4V" label="Switch (Radio) Elements  (With Validation)" 
    value={[{ id:1, label:"Switch (Radio) #1", value:"Switch (Radio) #1" },
    { id:2, label:"Switch (Radio) #2", value:"Switch (Radio) #2" },
    { id:3, label:"Switch (Radio) #3", value:"Switch (Radio) #3" }]} 
    validation={{
        required:{
            value: true,
            errorMessage : "Please Select Switch#2"
        },
        minSelect:{
            value: 2,
            errorMessage: "Please Select atleast 2"
        },
        maxSelect:{
            value: 5,
            errorMessage: "Please Select atleast 1"
        }
            }} />);
 };

 const ChoiceElement1NV = ()=>{
    return (<Choice type="checkbox" id="numbers" name="numbers1NV" label="Choice (Checkbox) Elements (No Validation)" 
    value={[{ id:1, label:"Choice (Checkbox) #1", value:"Choice (Checkbox) #1" },
            { id:2, label:"Choice (Checkbox) #2", value:"Choice (Checkbox) #2" },
            { id:3, label:"Choice (Checkbox) #3", value:"Choice (Checkbox) #3" }]} />);
 };

 const ChoiceElement2NV = ()=>{
    return (<Choice type="radio" id="numbers" name="numbers2NV" label="Choice (Radio) Elements  (No Validation)" 
    value={[{ id:1, label:"Choice (Radio) #1", value:"Choice (Radio) #1" },
    { id:2, label:"Choice (Radio) #2", value:"Choice (Radio) #2" },
    { id:3, label:"Choice (Radio) #3", value:"Choice (Radio) #3" }]} />);
 };

 const SwitchElement1NV = ()=>{
    return (<Switch type="checkbox" id="numbers3" name="numbers3NV" label="numbers3NV: Switch (Checkbox) Elements  (No Validation)" 
    value={[{ id:1, label:"Switch (Checkbox) #1", value:"Switch (Checkbox) #1" },
    { id:2, label:"Switch (Checkbox) #2", value:"Switch (Checkbox) #2" },
    { id:3, label:"Switch (Checkbox) #3", value:"Switch (Checkbox) #3" }]} />);
 };

 const SwitchElement2NV = ()=>{
    return (<Switch type="radio" id="numbers4" name="numbers4NV" label="numbers4NV: Switch (Radio) Elements  (No Validation)" 
    value={[{ id:1, label:"Switch (Radio) #1", value:"Switch (Radio) #1" },
    { id:2, label:"Switch (Radio) #2", value:"Switch (Radio) #2" },
    { id:3, label:"Switch (Radio) #3", value:"Switch (Radio) #3" }]} />);
 };

 const ColorPickerElement1V = ()=>{
   return (<>
     <ColorPicker name="ColorPickerElement1V" label="Color (With Validation)" validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            }
        }}/>
   </>);
 };

 const ColorPickerElement1NV = ()=>{
    return (<>
     <ColorPicker name="ColorPickerElement1NV" label="Color (No Validation)" />
    </>);
 };

 const DatePickerElement1V = () =>{
  return (<DateTimePicker label="DatePicker (With Validation)" type="datePicker" name="DatePickerElement1V" 
  validation={{
    required:{
        value: true,
        errorMessage:"This is a Mandatory Field"
    }
}}/>);
 };

 const DatePickerElement1NV = () =>{
  return (<DateTimePicker label="DatePicker (No Validation)" type="datePicker" name="DatePickerElement1NV" />);
 };

 const TimePickerElement1V = () =>{
  return (<DateTimePicker label="TimePicker (With Validation)" type="timePicker" name="TimePickerElement1V" 
    validation={{
      required:{
          value: true,
          errorMessage:"This is a Mandatory Field"
      }
  }}/>);
 };
  
 const TimePickerElement1NV = () =>{
  return (<DateTimePicker label="TimePicker (No Validation)" type="timePicker" name="TimePickerElement1NV" />);
 };

 const DateTimePickerElement1V = () =>{
    return (<DateTimePicker label="DatePicker (With Validation)" type="dateTimePicker" name="DateTimePickerElement1V" 
    validation={{
      required:{
          value: true,
          errorMessage:"This is a Mandatory Field"
      }
  }}/>);
   };
  
   const DateTimePickerElement1NV = () =>{
    return (<DateTimePicker label="DatePicker (No Validation)" type="dateTimePicker" name="DateTimePickerElement1NV" />);
   };

 const DropdownElement1V = () =>{
    const menuOptions = [{ header :"Andhra Pradesh", 
        options:[{ label:"Amaravathi", value:"Amaravathi" },
            { label:"Vishakapatnam", value:"Vishakapatnam" }] 
    },
    { header :"Arunachal Pradesh", 
        options:[{ label:"Itanagar", value:"Itanagar" }] 
    },
    { header :"Assam", 
      options:[{ label:"Dispur", value:"Dispur" },
            { label:"Guwahati", value:"Guwahati" },
            { label:"Silchar", value:"Silchar" },
            { label:"Dibrugarh", value:"Dibrugarh" },
            { label:"Nagaon", value:"Nagaon" }]
    }];
    return (<Dropdown name="DropdownElement1V" type="multiple" label="Dropdown (With Validation)" placeholder="Select your Dropdown" 
        menu={menuOptions} 
        validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            }
        }}
        container={{
            searchLabel:"Search a Location" 
        }}
        />);
 };

 const DropdownElement1NV = () =>{
    const menuOptions = [{ header :"Andhra Pradesh", 
        options:[{ label:"Amaravathi", value:"Amaravathi" },
            { label:"Vishakapatnam", value:"Vishakapatnam" }] 
    },
    { header :"Arunachal Pradesh", 
        options:[{ label:"Itanagar", value:"Itanagar" }] 
    },
    { header :"Assam", 
      options:[{ label:"Dispur", value:"Dispur" },
            { label:"Guwahati", value:"Guwahati" },
            { label:"Silchar", value:"Silchar" },
            { label:"Dibrugarh", value:"Dibrugarh" },
            { label:"Nagaon", value:"Nagaon" }]
    }];
    return (<Dropdown name="DropdownElement1NV" label="Dropdown (No Validation)" placeholder="Select your Dropdown" 
        menu={menuOptions} 
        container={{ 
            searchLabel: "Search a Location"
        }} />);
 };

 const EmailElement1V = ()=>{
  return (<Email name="EmailElement1V" validation={{
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
}} />);
 };

 const EmailElement1NV = ()=>{
    return (<Email name="EmailElement1NV" />);
 };

 const PasswordElement1V = ()=>{
  return ( <Password type="password" label="PasswordElement1V (With Validation)" name="PasswordElement1V"  placeholder="Enter your Password" 
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
}} />);
 };

 const PasswordElement1NV = ()=>{
  return (<Password type="password" label="PasswordElement1NV (No Validation)" name="PasswordElement1NV" placeholder="Enter your Password" />);
 };

 const ConfirmPassword1V = ()=>{
  return ( <ConfirmPassword label="ConfirmPassword1V (With Validation)" name="ConfirmPassword1V" validation={{
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
}} />);
 };

 const RangeElement1V = ()=>{
    return (<Range name="RangeElement1V" label="RangeElement1V"  
        start={20} end={30} 
        validation={{
            required:{ // >0
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            range:{
                minValue: 20,
                maxValue: 25,
                errorMessage:"Choose between 20 and 25"
            }
        }} />);
 };

 const RangeElement1NV = ()=>{
    return (<Range name="RangeElement1NV" label="RangeElement1NV" />);
 };

 const TextSearch1V = ()=>{
    return (<>
        <TextSearch name="TextSearch1V" label="TextSearch1V" 
        placeholder="Enter your TextSearch1V"
        validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 2,
                errorMessage:"Message should be greator than 2"
            }
        }}
    />
    </>);
 };

 const TextBox1V = ()=>{
    return (<>
        <TextBox name="TextBox1V" label="TextBox1V" 
        placeholder="Enter your TextBox1V"
        validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 2,
                errorMessage:"Message should be greator than 2"
            }
        }}
    />
    </>);
 };

 const TextBox1NV = ()=>{
    return (<>
        <TextBox name="TextBox1NV" label="TextBox1NV" 
        placeholder="Enter your TextBox1NV" />
    </>);
 };
 
 const TextArea1V = ()=>{
    return (<>
        <TextArea name="TextArea1V" label="TextArea1V" 
        placeholder="Enter your TextArea1V"
        validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            },
            minLength:{
                value: 2,
                errorMessage:"Message should be greator than 2"
            }
        }}
    />
    </>);
 };

 const TextArea1NV = ()=>{
    return (<>
    <TextArea name="TextArea1NV" label="TextArea1NV" 
        placeholder="Enter your TextArea1NV" />
    </>);
 };

const FileDropper1V = ()=>{
    return (<>
        <FileUpload name="FileDropper1V" type="fileDropper" label="Upload a File (With Form)" height="300" 
        autoSubmit={true} 
        backend={{
         "apiUrl":"http://localhost/fileUpload/index.php",
         "targetDirectory": "uploads/"
        }} 
        validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            }}
        }
      />
    </>);
};

const RichTextEditor1V = ()=>{
 return (<>
    <RichTextEditor name="summernote" label="StoryBoard" placeholder="Write your Story" height={120} 
  validation={{
    required:{
        value: true,
        errorMessage:"This is a Mandatory Field"
    }
  }} />
 </>);
};

 return (<>
 <Form name="registerForm" btnSubmit={{
            align:'center',
            btnType:'primary',
            label:'Submit',
            size: 11
        }}
        btnReset={{
            btnType:'danger',
            label:'Reset',
            size: 11
        }}
        onSubmit={async(form, isValidForm, triggerReset)=>{
            // 

           // triggerReset();
        }}
        onReset={async()=>{
           
        }}
        >
    <ContainerFluid style={{ padding:'15px' }}>
        <Row>
            <Col xl={3} xxl={2} className="mtop15p">
                <AutoCompleteElement1 />
            </Col>
            <Col xl={3} xxl={2} className="mtop15p">
                <AutoCompleteElement2 />
            </Col>
            <Col xl={3} xxl={2} className="mtop15p">
                <SelectElement1V />
            </Col>
            <Col xl={3} xxl={2} className="mtop15p">
                <SelectElement2NV />
            </Col>
        </Row>
        <Row>
            <Col xl={3} xxl={2} className="mtop15p"><ChoiceElement1V /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><ChoiceElement2V /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><SwitchElement1V /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><SwitchElement2V /></Col>
        </Row>
        <Row>
            <Col xl={3} xxl={2} className="mtop15p"><ChoiceElement1NV /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><ChoiceElement2NV /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><SwitchElement1NV /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><SwitchElement2NV /></Col>
        </Row>
        <Row>
            <Col xl={2} xxl={2} className="mtop15p"><ColorPickerElement1V /></Col>
            <Col xl={2} xxl={2} className="mtop15p"><ColorPickerElement1NV /></Col>
            <Col xl={2} xxl={2} className="mtop15p"><DatePickerElement1V /></Col>
            <Col xl={2} xxl={2} className="mtop15p"><DatePickerElement1NV /></Col>
        </Row>
        <Row>
            <Col xl={2} xxl={2} className="mtop15p"><TimePickerElement1V /></Col>
            <Col xl={2} xxl={2} className="mtop15p"><TimePickerElement1NV /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><DateTimePickerElement1V /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><DateTimePickerElement1NV /></Col>
        </Row>
        <Row>
            <Col xl={3} xxl={2} className="mtop15p"><DropdownElement1V /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><DropdownElement1NV /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><EmailElement1V /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><EmailElement1NV /></Col>
        </Row>
        <Row>
            <Col xl={3} xxl={2} className="mtop15p"><PasswordElement1V /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><PasswordElement1NV /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><ConfirmPassword1V /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><RangeElement1V /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><RangeElement1NV /></Col>
        </Row>
        <Row>
            <Col xl={3} xxl={2} className="mtop15p"><TextBox1V /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><TextBox1NV /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><TextArea1V /></Col>
            <Col xl={3} xxl={2} className="mtop15p"><TextArea1NV /></Col>
        </Row>
        <Row>
            <Col xl={3} xxl={2} className="mtop15p"><TextSearch1V /></Col>
            <Col xl={3} xxl={2} className="mtop15p"></Col>
            <Col xl={3} xxl={2} className="mtop15p"></Col>
            <Col xl={3} xxl={2} className="mtop15p"></Col>
        </Row>
        
        <Row>
            <Col xl={3} xxl={2} className="mtop15p"><FileDropper1V /></Col>
            <Col xl={4} xxl={3} className="mtop15p">
                <RichTextEditor1V />
            </Col>
        </Row>
    </ContainerFluid>  
  </Form>
 </>);
};

export default FormTest;