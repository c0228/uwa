import React from "react";
import { Row, Col, Highlight } from "e-ui-react";
import { Title, TblDisplay } from "@DocReactFormElements/TextBox/utils/CommonComponents.js";
import ValidationExecutionOrderImg from '@DocReactFormElements/TextBox/assets/img/validation-execution-order.png';

const USRAVAIL_EXAMPLE_JS = `<TextBox
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
            value: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
            errorMessage: "Enter a valid email address."
        },
        onSubmit: {
            textTransform: "LOWER_CASE"
        },
        apiValidation: {
            url: "/api/username/validate",
            method: "POST",
            requestBody: {
                username: "{{value}}"
            },
            returnMessages: [
                {
                    id: "USERNAME_AVAILABLE",
                    type: "success",
                    message: "Username is available!"
                },
                {
                    id: "USERNAME_EXISTS",
                    type: "error",
                    message: "Username already exists."
                },
                {
                   id: "USERNAME_BLOCKED",
                   type: "error",
                   message: "This username cannot be used."
                }
            ]
         }
    }}
    onChange={(result) => {
        console.log("Final Validation:", result);
    }}
/>`;

const ValidationStages = () =>{
 return (<>
 <Row>
    <Col md={12}><Title label="4. Understanding Validation" /></Col>
 </Row>
 <Row>
    <Col md={6}> 
        <div>The TextBox component supports three validation stages.</div>
        <TblDisplay 
            header={["Stage","Purpose"]}
            body={[{ "key":"Client-side validation", "value":"Checks input using configured rules" },
                { "key":"Custom validation", "value":"Executes developer-defined validation logic" },
                { "key":"API validation", "value":"Calls a server API to validate the input" }]} />
         <div className="mtop5p"><b>TextBox Component Template -</b></div>
         <div className="mtop5p"><Highlight content={USRAVAIL_EXAMPLE_JS} lang="javascript" /></div>
    </Col>
    <Col md={6}><img src={ValidationExecutionOrderImg} /></Col>
 </Row>
 </>);
};

export default ValidationStages;