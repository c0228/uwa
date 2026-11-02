import React from "react";
import { Row, Col, Highlight } from "e-ui-react";
import { Title, TblDisplay } from "@DocReactFormElements/TextBox/utils/CommonComponents.js";

const UPPERTXTRNSFRM_EXAMPLE_JS = `<TextBox
    name="country"
    label="Country"
    validation={{
        onSubmit: {
            textTransform: "UPPER_CASE"
        }
    }}
/>`;

const LOWERTXTRNSFRM_EXAMPLE_JS = `<TextBox
    name="email"
    label="Email"
    validation={{
        onSubmit: {
            textTransform: "LOWER_CASE"
        }
    }}
/>`;

const SENTXTRNSFRM_EXAMPLE_JS = `<TextBox
    name="fullname"
    label="Full Name"
    validation={{
        onSubmit: {
            textTransform: "SENTENCE_CASE"
        }
    }}
/>`;

const ValidationTxtTransform = () =>{
 return (<>
  <div className="mtop5p"><h4><b>4.2 Text Transformation</b></h4></div>
        <div className="mtop5p">The validation configuration supports text transformation through <code><b>onSubmit.textTransform</b></code>.</div>
        <div className="mtop5p">Available transformation values:</div>
        <TblDisplay 
            header={["Value", "Description"]} 
            body={[{ "key": (<code><b>UPPER_CASE</b></code>), "value": "Converts text to uppercase" },
                { "key": (<code><b>LOWER_CASE</b></code>), "value": "Converts text to lowercase" },
                { "key": (<code><b>SENTENCE_CASE</b></code>), "value": "Capitalizes the first character" },
            ]} />
        
        <div className="mtop5p"><h5><b>4.2.1 Uppercase</b></h5></div>
        <div className="mtop5p"><Highlight content={UPPERTXTRNSFRM_EXAMPLE_JS} lang="javascript" /></div>
        <div className="mtop5p">
            <div><b>Example:</b></div>
            <div><b>Input:</b> India</div>
            <div><b>Output:</b> INDIA</div>
        </div>

        <div className="mtop5p"><h5><b>4.2.2 Lowercase</b></h5></div>
        <div className="mtop5p"><Highlight content={LOWERTXTRNSFRM_EXAMPLE_JS} lang="javascript" /></div>
        <div className="mtop5p">
            <div><b>Example:</b></div>
            <div><b>Input:</b>  JOHN@GMAIL.COM</div>
            <div><b>Output:</b> john@gmail.com</div>
        </div>

        <div className="mtop5p"><h5><b>4.2.3 Sentence Case</b></h5></div>
        <div className="mtop5p"><Highlight content={SENTXTRNSFRM_EXAMPLE_JS} lang="javascript" /></div>
        <div className="mtop5p">
            <div><b>Example:</b></div>
            <div><b>Input:</b>  john smith</div>
            <div><b>Output:</b> John Smith</div>
        </div>
        <div className="mtop5p">
            <b>Implementation note:</b> In the current implementation, <code><b>ElementValidation</b></code> is 
            invoked during the validation flow, not exclusively when the form is submitted. Therefore, 
            the <code><b>onSubmit</b></code> configuration name should not be interpreted as proof that transformation 
            happens only on submission.
        </div>
        

        <div className="mtop5p"><h5><b></b></h5></div>
        <div className="mtop5p"></div>
        <div className="mtop5p"><Highlight content={``} lang="javascript" /></div>

        <div className="mtop5p"><h5><b></b></h5></div>
        <div className="mtop5p"></div>
        <div className="mtop5p"><Highlight content={``} lang="javascript" /></div>
 </>);
};

export default ValidationTxtTransform;