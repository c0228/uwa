import React from "react";
import { Row, Col, Highlight } from "e-ui-react";
import { Title, TblDisplay } from "@DocReactFormElements/TextBox/utils/CommonComponents.js";

const REQVALIDATE_EXAMPLE_JS = `<TextBox
    name="username"
    label="Username"
    placeholder="Enter Username"
    validation={{
        required: {
            value: true,
            errorMessage: "Username is required."
        }
    }}
/>`;

const MINLENGTH_EXAMPLE_JS = `<TextBox
    name="username"
    label="Username"
    validation={{
        minLength: {
            value: 3,
            errorMessage: "Username must have at least 3 characters."
        }
    }}
/>`;

const MAXLENGTH_EXAMPLE_JS = `<TextBox
    name="username"
    label="Username"
    validation={{
        maxLength: {
            value: 20,
            errorMessage: "Username cannot exceed 20 characters."
        }
    }}
/>`;

const PATTERNVAL_EXAMPLE_JS = `<TextBox
    name="username"
    label="Username"
    validation={{
        pattern: {
            value: "^[a-zA-Z0-9_]+$",
            errorMessage: "Only letters, numbers and underscores are allowed."
        }
    }}
/>`;

const SUCCESSVAL_EXAMPLE_JS = `<TextBox
    name="username"
    label="Username"
    validation={{
        required: {
            value: true,
            errorMessage: "Username is required."
        },
        minLength: {
            value: 3,
            errorMessage: "Minimum 3 characters are required."
        },
        successMessage: "Username format is valid."
    }}
/>`;

const COMBMUL_EXAMPLE_JS = `<TextBox
    name="username"
    label="Username"
    placeholder="Enter Username"
    validation={{
        required: {
            value: true,
            errorMessage: "Username is required."
        },
        minLength: {
            value: 3,
            errorMessage: "Minimum 3 characters are required."
        },
        maxLength: {
            value: 20,
            errorMessage: "Maximum 20 characters are allowed."
        },
        pattern: {
            value: "^[a-zA-Z0-9_]+$",
            errorMessage: "Invalid username format."
        },
        successMessage: "Username format is valid."
    }}
/>`;

const ValidationClientSide = () =>{
 return (<>
    <div><h4><b>4.1 Client-Side Validation</b></h4></div>
    <div className="mtop5p">Client-side validation is configured through the <code><b>validation</b></code> property.</div>
            
    <div className="mtop15p"><h5><b>4.1.1 Required Validation</b></h5></div>
    <div className="mtop5p">Checks whether the user has entered a value.</div>
    <div className="mtop5p"><Highlight content={REQVALIDATE_EXAMPLE_JS} lang="javascript" /></div>
            
    <div className="mtop5p"><h5><b>4.1.2 Minimum Length</b></h5></div>
    <div className="mtop5p">Checks whether the input meets the minimum character count.</div>
    <div className="mtop5p"><Highlight content={MINLENGTH_EXAMPLE_JS} lang="javascript" /></div>
    
    <div className="mtop5p"><h5><b>4.1.3 Maximum Length</b></h5></div>
    <div className="mtop5p">Checks whether the input exceeds the maximum character count.</div>
    <div className="mtop5p"><Highlight content={MAXLENGTH_EXAMPLE_JS} lang="javascript" /></div>
    
    <div className="mtop5p"><h5><b>4.1.4 Pattern Validation</b></h5></div>
    <div className="mtop5p">Checks whether the input matches a regular expression.</div>
    <div className="mtop5p"><Highlight content={PATTERNVAL_EXAMPLE_JS} lang="javascript" /></div>
    
    <div className="mtop5p"><h5><b>4.1.5 Success Message</b></h5></div>
    <div className="mtop5p">Displays a success message when client-side validation passes.</div>
    <div className="mtop5p"><Highlight content={SUCCESSVAL_EXAMPLE_JS} lang="javascript" /></div>
    
    <div className="mtop5p"><h5><b>4.1.6 Combining Multiple Rules</b></h5></div>
    <div className="mtop5p">Multiple validation rules can be configured together.</div>
    <div className="mtop5p"><Highlight content={COMBMUL_EXAMPLE_JS} lang="javascript" /></div>
    <div className="mtop5p">The component checks the configured rules and produces a validation result 
         containing the successful rules and the applicable error message.</div>
 </>);
};

export default ValidationClientSide;