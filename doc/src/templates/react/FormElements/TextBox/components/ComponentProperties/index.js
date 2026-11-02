import React from "react";
import { Row, Col, Highlight } from "e-ui-react";
import { Title, TblDisplay } from "@DocReactFormElements/TextBox/utils/CommonComponents.js";

const ComponentProperties = () =>{
 const TEXTBOX_EXAMPLE_JS = `<TextBox
    id="username"
    name="username"
    label="Username"
    width="100%"
    placeholder="Enter Username"
    value=""
    disabled={false}
    validation={{}}
    onValidate={(result) => {
        // Custom validation
    }}
    onChange={(result) => {
        // Receive final validation result
    }}
/>`;
 return (<>
    <Title label="3. Available Component Properties" />
    <TblDisplay 
        header={["Property", "Description"]} 
        body={[{ "key": "id", "value": (<>HTML input identifier</>) },
            { "key": "name", "value": (<>Input name; also used for form registration</>) },
            { "key": "label", "value": (<>Input label</>) },
            { "key": "width", "value": (<>Input width</>) },
            { "key": "placeholder", "value": (<>Placeholder text</>) },
            { "key": "value", "value": (<>Initial or externally controlled value</>) },
            { "key": "validation", "value": (<>Validation configuration</>) },
            { "key": "disabled", "value": (<>Enables or disables the input</>) },
            { "key": "onValidate", "value": (<>Custom validation callback</>) },
            { "key": "onChange", "value": (<>Receives the final validation result</>) }]} />
    <div><b>Example:</b></div>
    <div className="mtop5p"><Highlight content={TEXTBOX_EXAMPLE_JS} lang="javascript" /></div>
 </>);
};

export default ComponentProperties;