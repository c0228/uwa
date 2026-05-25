import React from "react";
import { ContainerFluid, Row, Col, Card, Badge, Highlight } from "e-ui-react";
import { DocumentHeader } from "@DocUtils/DocHeaders.js";

export const Admob = () =>{
 return (<div>
    <DocumentHeader title="Admob" componentAttributesTable={{}} />
    <div className="mtop5p">
        <ContainerFluid>
        <Row>
            <Col md={6}>
                <div>
                    <Card padding={15}>
                        <b>Note:</b> Only <i>Ad Mining</i> in the App is violation and is not allowed.
                    </Card>
                </div>
                <div className="mtop15p"><h4><b>Types of Ads:</b></h4></div>
                <ul>
                    <li className="mtop5p">
                        <div><h5><b>Rewarded Ads</b> <Badge type="success-o" label={<b>Unlimited (User Choice)</b>} size="12" style={{ marginRight:'5px' }} /></h5></div>
                    </li>
                    <li className="mtop5p">
                        <div><h5><b>Interstitial Ads</b> <Badge type="danger-o" label={<b>10 - 20 Ads per Day </b>} size="12" style={{ marginRight:'5px' }} /></h5></div>
                    </li>
                    <li className="mtop5p">
                        <div><h5><b>Banner Ads</b> <Badge type="primary-o" label={<b>Unlimited (Always Visible) </b>} size="12" style={{ marginRight:'5px' }} /></h5></div>
                    </li>
                </ul>
            </Col>
            <Col md={6}>
                <div>
                    <Card padding={15} backgroundColor="#f5f3f3">
                    <div><h4><b>Earning Calender (60 Days to Receive)</b></h4><hr/></div>
                    <div className="mtop10p"><b>EARNING PERIOD:</b> May 01 to May 31</div>
                    <div className="mtop5p"><b>FINALIZATION:</b> June 01 to Jun 03</div>
                    <div className="mtop5p"><b>WAITING TIME:</b> June 04 to June 30</div>
                    <div className="mtop5p"><b>PAY RELEASE:</b> July 21 to July 26</div>
                </Card>
                </div>
            </Col>
        </Row>
        </ContainerFluid>
    </div>
 </div>);
};