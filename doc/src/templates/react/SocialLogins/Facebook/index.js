import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import { DocumentHeader } from "@DocUtils/DocHeaders.js";

export const LoginFacebookPage = () =>{
 return (<div>
    <DocumentHeader title="Login with Facebook" componentAttributesTable={{}} />
    <div className="mtop15p">
        <ContainerFluid>
            <Row>
                <Col md={12}>
                    <div><h5><b>Step 1: Create a Facebook App</b></h5></div>
                    <div className="mtop5p">Go to: <a target="_blank" href="https://developers.facebook.com/">Meta for Developers</a></div>
                    <ul>
                        <li className="mtop5p"></li>
                        <li className="mtop5p"></li>
                    </ul>
                </Col>
            </Row>
        </ContainerFluid>
    </div>
 </div>);
};