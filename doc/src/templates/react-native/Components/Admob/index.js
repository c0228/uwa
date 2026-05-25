import React from "react";
import { ContainerFluid, Row, Col, Card, Badge, Highlight, Icon } from "e-ui-react";
import { DocumentHeader } from "@DocUtils/DocHeaders.js";

export const Admob = () =>{
 const IconDisplay = ({ status }) => <Icon type="FontAwesome" name={status?'fa-check':'fa-times'} color={status?'green':'red'} 
    style={{ marginRight:'5px' }} />
 return (<div>
    <DocumentHeader title="Google Admob" componentAttributesTable={{}} />
    <div className="mtop5p">
        <ContainerFluid>
        <Row>
            <Col md={6}>
                <div>
                    <Card padding={15} backgroundColor="#fff0c1">
                        <b>Note:</b> Only <i>Ad Mining</i> in the App is violation and is not allowed.
                    </Card>
                </div>
                <div className="mtop15p"><h4><b>Types of Ads:</b></h4></div>
                <ul>
                    <li className="mtop5p">
                        <div><h5><b>Rewarded Ads</b> <Badge type="success-o" label={<b>Unlimited (User Choice)</b>} size="12" style={{ marginRight:'5px' }} /></h5></div>
                    </li>
                    <li className="mtop5p">
                        <div><h5><b>Interstitial Ads</b> <Badge type="danger-o" label={<b>10 - 20 Ads per Day</b>} size="12" style={{ marginRight:'5px' }} /></h5></div>
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
        <Row>
            <Col md={12}>
                <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr className="bg-dark text-white">
                            <td><b>Ad Type</b></td>
                            <td><b>Max Triggers / Day</b></td>
                            <td><b>Ideal Frequency</b></td>
                            <td><b>When to Show</b></td>
                            <td><b>Risk Level</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Rewarded Ads</b></td>
                            <td>Unlimited (user-initiated)</td>
                            <td>User choice</td>
                            <td>To unlock reward</td>
                            <td>Very Low</td>
                        </tr>
                        <tr>
                            <td><b>Interstitial Ads</b></td>
                            <td><b>10 – 20</b></td>
                            <td>1 per 3–5 min</td>
                            <td>After task / level / screen change</td>
                            <td>Medium</td>
                        </tr>
                        <tr>
                            <td><b>Banner Ads</b></td>
                            <td>Unlimited (persistent)</td>
                            <td>Always visible</td>
                            <td>Home, bottom/top of screen</td>
                            <td>Very Low</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <div><h5><b>Rules:</b></h5></div>
                <ul>
                    <li><IconDisplay /> No interstitial on app launch</li>
                    <li><IconDisplay /> No interstitial on exit / back press</li>
                    <li><IconDisplay /> No forced rewarded ads</li>
                    <li><IconDisplay status={true} /> Rewarded ads must <b>clearly show reward</b></li>
                    <li><IconDisplay status={true} /> Interstitials only on <b>natural breaks</b></li>
                </ul>
                <div className="mtop5p">If we want <b>maximum revenue + safety:</b></div>
                <ul>
                    <li className="mtop5p"><b>Banner</b> - Always <i>ON</i></li>
                    <li className="mtop5p"><b>Interstitial</b> - Max 10–15/day</li>
                    <li className="mtop5p"><b>Rewarded</b> - Primary monetization method</li>
                </ul>
            </Col>
        </Row>
        </ContainerFluid>
    </div>
 </div>);
};