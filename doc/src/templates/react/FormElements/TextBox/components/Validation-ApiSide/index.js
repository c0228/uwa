import React from "react";
import { Row, Col, Highlight } from "e-ui-react";
import { Title, TblDisplay } from "@DocReactFormElements/TextBox/utils/CommonComponents.js";

const APIVAL_EXAMPLE_JS = `validation={{
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
            }
            ]
    }
}}`;

const UNDERSTANDVAL_EXAMPLE_JS = `requestBody: {
    username: "{{value}}"
}`;

const UNDERSTANDRES_EXAMPLE_JS = `{
    "username": "john"
}`;

const ValidationApiSide = () =>{
 return (<>
    <div><Title label="4.3 API-Based Validation" /></div>
    <div className="mtop5p">API validation is useful when the server needs to verify the input.</div>
    <div><b>Examples:</b></div>
    <div>
        <ul>
        {["Username availability.","Email already registered.","Mobile number already registered.",
        "Coupon code validity.", "Referral code validity.", "Product code verification."]?.map((d,i)=><li key={i}>{d}</li>)}
        </ul>
    </div>
    <div>API validation is configured inside: <code><b>validation.apiValidation</b></code></div>

    <div className="mtop15p"><h5><b>4.3.1 API Configuration Structure</b></h5></div>
    <div><Highlight content={APIVAL_EXAMPLE_JS} lang="javascript" /></div>
    <div className="mtop15p"><h5><b>4.3.2 Understanding API Configuration</b></h5></div>
    <div className="mtop5p">
        <TblDisplay 
            header={["Property", "Description"]} 
            body={[{ "key": (<code><b>url</b></code>), "value": "API endpoint" },
                { "key": (<code><b>method</b></code>), "value": "HTTP method" },
                { "key": (<code><b>requestBody</b></code>), "value": "Data sent to the API" },
                { "key": (<code><b>returnMessages</b></code>), "value": "Maps API response IDs to messages" },
                { "key": (<code><b>returnMessages.id</b></code>), "value": "Response identifier" },
                { "key": (<code><b>returnMessages.type</b></code>), "value": "success or error" },
                { "key": (<code><b>returnMessages.message</b></code>), "value": "Message to display" },
            ]} />
    </div>
    <div className="mtop15p"><h5><b>4.3.3 Understanding {`{{value}}`}</b></h5></div>
    <div className="mtop5p">The special placeholder <code><b>{`{{value}}`}</b></code> is replaced with the 
    current input value before the API request is made.</div>
    <div className="mtop5p"><b>Configuration:</b></div>
    <div className="mtop5p"><Highlight content={UNDERSTANDVAL_EXAMPLE_JS} lang="javascript" /></div>
    <div className="mtop5p">If the user enters <code><b>john</b></code>, the resulting request body becomes:</div>
    <div className="mtop5p"><Highlight content={UNDERSTANDRES_EXAMPLE_JS} lang="javascript" /></div>
    <div className="mtop5p">The request body replacement helper also supports nested objects and arrays.</div>
 </>);
};

export default ValidationApiSide;