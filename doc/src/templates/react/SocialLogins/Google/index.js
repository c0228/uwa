import React from "react";
import { ContainerFluid, Row, Col, Card, Highlight } from "e-ui-react";
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import { LoginGoogleExample } from "./components/SampleCode.js";

const REACT_DEP_PCKGS = `npm install @react-oauth/google
npm install jwt-decode`;

const AUTH_CRED_ORIGIN = `http://localhost:3000
https://yourdomain.com`;

export const LoginGooglePage = () =>{
 return (<div>
    <DocumentHeader title="Login with Google" componentAttributesTable={{}} />
    <div className="mtop15p">
        <ContainerFluid>
            <Row>
                <Col md={12}>
                    <div><h5><b>Step 1: Create a Google OAuth Client</b></h5></div>
                    <ul>
                        <li className="mtop5p">
                            Go to: <a target="_blank" href="https://console.cloud.google.com/">Google Cloud Console</a>
                        </li>
                        <li className="mtop5p">
                            <div>Create a project</div>
                        </li>
                        <li className="mtop5p">
                            <div>Navigate to: <code><b>APIs & Services</b></code> and then <code><b></b></code></div>
                        </li>
                        <li className="mtop5p">
                            <div>Click: <code><b>Create Credentials</b></code> and then <code><b>OAuth Client ID</b></code></div>
                            <Card padding={15}>
                                A client ID is used to identify a single app to Google's OAuth servers. If your app runs on multiple platforms, each will need its own client ID.
                                To create an OAuth client ID, you must first configure your consent screen. The project name declared at consent screen 
                                will be the App Name that displays to User while asking for Email selection at Screen.
                            </Card>
                        </li>
                        <li className="mtop5p">
                            <div>Choose: <code><b>Web Application</b></code></div>
                        </li>
                        <li className="mtop5p">
                            <div>Add authorized origins:</div>
                            <Highlight content={AUTH_CRED_ORIGIN} lang="html" />
                        </li>
                        <li className="mtop5p">
                            <div>Copy the generated <b>Client ID</b>.</div>
                        </li>
                    </ul>

                    <div className="mtop15p"><h5><b>Step 2: Wrap Our App Code</b></h5></div>
                    <ul>
                        <li className="mtop5p">
                            <div>Install Following Packages:</div>
                            <div className="mtop5p">
                                <Highlight content={REACT_DEP_PCKGS} lang="javascript" />
                            </div>
                        </li>
                        <li className="mtop5p">
                            <div>Our Code:</div>
                            <div className="mtop5p">
                                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0T60']}  />
                            </div>
                        </li>
                         <li className="mtop5p">
                            <div>Output:</div>
                            <div className="mtop5p"><LoginGoogleExample /></div>
                        </li>
                    </ul>
                </Col>
            </Row>
        </ContainerFluid>
    </div>
 </div>);
};