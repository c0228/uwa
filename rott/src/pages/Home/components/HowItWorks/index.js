import React from "react";
import { ContainerFluid, Row, Col, Icon } from "e-ui-react";

const HowItWorks = () =>{
 return (<div className="p-5">
    <div align="center" ><h2 style={{ color:'#000' }}><b>How <span style={{ color:'#dc3545', borderBottom:'1px dashed #dc3545' }}>{process.env.APP_NAME} Platform</span> works?</b></h2></div>
    <div>
        <ContainerFluid>
        <Row>
            <Col md={4}>
                <div align="center">
                    <Icon type="FontAwesome" name="fa-address-card" size={136} color="#dc3545" />
                    <div><h4 style={{ lineHeight:'31px' }}><b>Enter Tenant's<br/> Aadhaar Number & Birth Year</b></h4></div>
                </div>
            </Col>
            <Col md={4}>
                <div align="center">
                    <Icon type="FontAwesome" name="fa-lock" size={136} color="#dc3545" />
                    <div><h4 style={{ lineHeight:'31px' }}><b>Data is instantly hashed<br/> (no storage)</b></h4></div>
                </div>
            </Col>
            <Col md={4}>
                <div align="center">
                    <Icon type="FontAwesome" name="fa-area-chart" size={136} color="#dc3545" />
                    <div><h4 style={{ lineHeight:'31px' }}><b>Get Tenant Trust Score<br/> & Risk Indicators</b></h4></div>
                </div>
            </Col>
        </Row>
        </ContainerFluid>
    </div>
 </div>);
};

export default HowItWorks;