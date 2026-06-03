import React from "react";
import { ContainerFluid, Row, Col, Card, Icon } from "e-ui-react";
import { DocumentHeader } from "@DocUtils/DocHeaders.js";

export const LoginFacebookPage = () =>{
 return (<div>
    <DocumentHeader title="Login with Facebook" componentAttributesTable={{}} />
    <div className="mtop15p">
        <ContainerFluid>
            <Row>
                <Col md={12}>
                    <div><h5><b>Step 1: Create a Facebook App</b></h5></div>
                    <div className="mtop5p">Go to: <a target="_blank" href="https://developers.facebook.com/apps/">Meta for Developers</a></div>
                    <ul>
                        <li className="mtop5p">
                            <div>Click on <code><b>Create App</b></code></div>
                            <Card padding={15}>
                                <div><h5><b>1. App Details</b></h5></div>
                                <div className="mtop5p padLeft15p">Provide <code><b>App Name</b></code> and <code><b>App Contact email</b></code></div>
                                <div className="mtop15p"><h5><b>2. Use Cases</b></h5></div>
                                <div className="mtop5p padLeft15p">Choose <code><b>Authenticate and request data from users using Facebook Login</b></code></div>
                                <div className="mtop15p"><h5><b>3. Business</b></h5></div>
                                <div className="padLeft15p">
                                    <div className="mtop5p"><b>What is a Business Portfolio?</b></div>
                                    <div className="mtop5p">
                                        <div>A <b>Business Portfolio</b> (previously called <b><i>Meta Business Manager</i></b>) is an organization account 
                                        that owns and manages:</div>
                                        <ul>
                                            <li className="mtop5p">Facebook Pages</li>
                                            <li className="mtop5p">Instagram Accounts</li>
                                            <li className="mtop5p">WhatsApp Business Accounts</li>
                                            <li className="mtop5p">Apps</li>
                                            <li className="mtop5p">Ad Accounts</li>
                                            <li className="mtop5p">Team Members</li>
                                            <li className="mtop5p">Permissions</li>
                                        </ul>
                                    </div>
                                    <div className="mtop5p">
                                        <div>By connecting a Business Portfolio, you can:</div>
                                        <ul>
                                            {["Use Facebook Login in production", "Access user profile data", "Access Instagram Graph API",
                                            "Access Facebook Pages API", "Access WhatsApp Business APIs", "Submit apps for review",
                                            "Publish the app publicly"]?.map((d,i)=>{
                                                return (<li className="mtop5p">
                                                    <Icon type="FontAwesome" name="fa-check-circle" color="green" style={{ marginRight:'5px'}} /> {d}
                                                </li>);
                                            })}
                                        </ul>
                                        <div className="mtop5p">Without verification, some permissions remain restricted.</div>
                                    </div>
                                </div>
                            </Card>
                        </li>
                        <li className="mtop5p"></li>
                    </ul>
                </Col>
            </Row>
        </ContainerFluid>
    </div>
 </div>);
};