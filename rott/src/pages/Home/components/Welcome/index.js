import React from "react";
import { ContainerFluid, Row, Col, Button, TextBox, Select, Icon } from "e-ui-react";
import { GetTenantBirthYears } from "@Utils/Common.js";

const Welcome = () =>{
 const TextBoxSubTitle = ({ label }) =>{
    return (<div align="right" style={{ paddingTop:'5px', paddingRight:'5px' }}><i>"{label}"</i></div>);
 };
 return (<div>
    <div className="p-5" style={{ backgroundColor:'#fbf7f7', borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc'  }}>
    <div align="center">
        <div><h2 style={{ color:'#000' }}><b>Know Your Tenant Before They Move In | Instant Verification | Simple & Secure</b></h2></div>
        <div className="mtop15p"><h3 style={{ color:'#343434' }}><i>"Protect your property and peace of mind with easy tenant verification"</i></h3></div>
    </div>
    <div className="p-4">
        <ContainerFluid>
        <Row className="mtop15p">
            <Col md={2}></Col>
            <Col md={4}>
                <TextBox name="surname" label="Tenant's Aadhar Number" placeholder="XXXX - XXXX - XXXX - XXXX" />
                <TextBoxSubTitle label="Please enter a valid 16-digit Aadhar Card number." />
            </Col>
            <Col md={4}>
                <Select label="Tenant's Date of Birth Year" placeholder="Select Year" fontSize="12"
                options={GetTenantBirthYears()} />
                <TextBoxSubTitle label="Tenant must be at least 13 years old." />
            </Col>
            <Col md={2}></Col>
        </Row>
        <Row className="mtop15p">
            <Col md={2}></Col>
            <Col md={8}>
            <div style={{ padding:'15px', marginTop:'15px', border:'1px dashed #ccc', backgroundColor:'#fff4d4' }}>
                <b>Privacy & Security Notice:</b><br/> 
                Your data is safe. Your Aadhaar number is never stored. Information entered is immediately 
                converted into a non-reversible secure, encrypted hash to generate the tenant score.</div>
            </Col>
            <Col md={2}></Col>
        </Row>
        <Row className="mtop15p">
            <Col md={4}></Col>
            <Col md={4}>
                <Button type="danger" className="form-control" size={16} style={{ marginTop:'16px' }}>
                    <Icon type="FontAwesome" name="fa-address-card" size={14} style={{ marginRight:'8px' }} />
                    <b>View Tenant Score</b>
                </Button>
            </Col>
            <Col md={4}></Col>
        </Row>
        </ContainerFluid>
    </div>
  </div>
 </div>);
};

export default Welcome;