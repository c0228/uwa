import React from "react";
import { Breadcrumb, Colors, ContainerFluid, Row, Col, Icon, Menu, Card } from 'e-ui-react';
import { DisclaimerNote } from '@Templates/Utils/index.js';
import { Table } from '@Templates/Table/index.js';
import { AboutORA, ORALegalValidity, AboutStampDuty, RegistrationProcess, OnlineSignatures, CommercialResidentialRentalAgreements } from "./components/Basics/index.js";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Footer from '@Templates/Footer/index.js';


const BasicRules = () =>{
    return (<div>
        <div><h3><b>Basic Rules You Must Know (India)</b></h3></div>
        <div className="lh28p fs16p mbot75p">
            <div className="mtop15p">Before understanding state-wise stamp duty and registration rules, it is important to 
                    know the <b>basic legal rules</b> that apply to <b>all online rental agreements in India.</b>
                    These rules apply to <b>both Commercial and Residential rental agreements,</b> unless mentioned otherwise.</div>
            <div className="mtop15p">
                    <DisclaimerNote>
                        <div>This page is for <b>general informational purposes only</b>.<br/>
                        Stamp duty and registration rules may change based on state government notifications.</div>
                    </DisclaimerNote>
            </div>
            <AboutORA />
            <ORALegalValidity />
            <AboutStampDuty />
            <RegistrationProcess />
            <OnlineSignatures />
            <CommercialResidentialRentalAgreements />
        </div>
    </div>);
};



const StatewiseStampDuty = () =>{
 return (<div className="lh28p fs16p mbot75p">
    <div>Stamp duty and registration requirements for online rental agreements vary from state to state. The table below 
        provides a <b>general overview</b> of commonly followed rules for <b>commercial rental agreements</b> across major 
        Indian states.</div>
    <div style={{ marginTop:'5px'}}>
        <Card padding={15}>
            <Icon type="FontAwesome" name="fa-lightbulb-o" size={16} style={{ marginRight:'5px' }} />
            <i>Most online rental agreements are created for <b>11 months</b> to avoid mandatory registration, wherever legally permitted.</i>
        </Card>
    </div>
    <div className="mtop15p">
        <DisclaimerNote>
            <div>The information provided above is for <b>general guidance only.</b><br/>
            Stamp duty and registration rules are governed by respective state laws and are subject to change.</div>
        </DisclaimerNote>
    </div>
    <div style={{ marginTop:'15px' }}>
        <Table
  header={[
    "#",
    "Name of the Indian State",
    "Stamp Duty Calculated",
    "Registration Required",
    "Agreement Online Valid",
    "eStamp & eSign",
    "Penalty for Non-Registration",
    "Commercial Agreements"
  ]}
  data={[
    ["1","Telangana",(<>Approx. <b>0.5% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>May apply</>),
      "Stamp duty higher than residential"],

    ["2","Andhra Pradesh",(<>Approx. <b>0.5% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>12 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>May apply</>),
      "Explicitly permitted"],

    ["3","Karnataka",(<>Approx. <b>1% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>Applicable</>),
      "Higher stamp duty applies"],

    ["4","Maharashtra",(<>Approx. <b>0.25% – 0.5%</b> of total rent</>),
      (<><b>Yes,</b> registration generally mandatory</>),
      (<>Yes</>),(<>Allowed</>),(<>Strictly enforced</>),
      "Registration compulsory"],

    ["5","Tamil Nadu",(<>Approx. <b>1% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>May apply</>),
      "Varies based on tenure"],

    ["6","Delhi (NCT)",(<>Approx. <b>2% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>Applicable</>),
      "Higher stamp duty"],

    ["7","Uttar Pradesh",(<>Approx. <b>2% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>Applicable</>),
      "Higher than residential"],

    ["8","Gujarat",(<>Approx. <b>1% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>May apply</>),
      "Commercial supported"],

    ["9","West Bengal",(<>Approx. <b>1% – 2%</b> of annual rent</>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>Applicable</>),
      "Stamp duty varies"],

    ["10","Rajasthan",(<>Approx. <b>1% – 2%</b> of annual rent</>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>May apply</>),
      "Commercial permitted"],

    ["11","Madhya Pradesh",(<>Approx. <b>2% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>Applicable</>),
      "Higher stamp duty"],

    ["12","Bihar",(<>Approx. <b>2% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>Applicable</>),
      "Commercial allowed"],

    ["13","Odisha",(<>Approx. <b>1% – 2%</b> of annual rent</>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>May apply</>),
      "Usage-based"],

    ["14","Kerala",(<>Approx. <b>1% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>Applicable</>),
      "Commercial permitted"],

    ["15","Punjab",(<>Approx. <b>2% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>Applicable</>),
      "Higher duty"],

    ["16","Haryana",(<>Approx. <b>2% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>Applicable</>),
      "Commercial higher"],

    ["17","Assam",(<>Approx. <b>1% – 2%</b> of annual rent</>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>May apply</>),
      "Permitted"],

    ["18","Chhattisgarh",(<>Approx. <b>2% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>Applicable</>),
      "Higher stamp duty"],

    ["19","Jharkhand",(<>Approx. <b>2% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>Applicable</>),
      "Commercial allowed"],

    ["20","Himachal Pradesh",(<>Approx. <b>1% – 2%</b> of annual rent</>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>May apply</>),
      "Usage-based"],

    ["21","Uttarakhand",(<>Approx. <b>2% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>Applicable</>),
      "Commercial supported"],

    ["22","Goa",(<>Approx. <b>1% of annual rent</b></>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>May apply</>),
      "Permitted"],

    ["23","Jammu & Kashmir",(<>Approx. <b>1% – 2%</b> of annual rent</>),
      (<><b>Yes,</b> if lease period exceeds <b>11 months</b></>),
      (<>Yes</>),(<>Allowed</>),(<>May apply</>),
      "Commercial allowed"],

    ["24","All Union Territories",(<>Stamp duty as per <b>local rules</b></>),
      (<>Depends on <b>local regulations</b></>),
      (<>Yes</>),(<>Allowed</>),(<>As applicable</>),
      "Subject to UT laws"]
  ]}
/>

    </div>

    <div>
        <div><h4><b>Key Takeaways (State-wise Summary)</b></h4></div>
        <ul>
            <li className="mtop5p">Stamp duty is mandatory in all states</li>
            <li className="mtop5p">Registration is usually required if lease period is 12 months or more</li>
            <li className="mtop5p">11-month agreements are widely used for online execution</li>
            <li className="mtop5p">Commercial agreements attract higher stamp duty</li>
            <li className="mtop5p">Aadhaar-based eSign is legally valid across states</li>
        </ul>
        <div><h4><b>Important Note on Variations</b></h4></div>
        <div className="mtop5p">Stamp duty rates and registration requirements:</div>
        <ul>
            <li className="mtop5p">May vary based on <b>property location</b></li>
            <li className="mtop5p">May change due to <b>state government notifications</b></li>
            <li className="mtop5p">May differ for <b>commercial vs residential</b> usage</li>
        </ul>
    </div>
 </div>);
};

const OnlineRentalAgreements = () =>{
 return (<div>
    <Header menulinks={HeaderMenu} />
    <div>
        <Breadcrumb backgroundColor={Colors.light} 
                data={[{ label: 'Our Platform', url:'#' },
                    { label:'Regulatory & Trust Center', url:'#' },
                    { label:'Online Rental Agreement Stamp Duty & Registration Rules (State-wise)', url:'#' }
                ]} />
    </div>
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div><h2><b>Online Rental Agreement Stamp Duty & Registration Rules (State-wise)</b></h2><hr/></div>
            </Col>
        </Row>
        <div className="mtop15p">
            <Menu type="pill" layout="vertical" 
                        layoutStyle={{ 
                                    menu:{ sm:'3', md:'3', lg:'3', xl:'3', xxl:'3' },
                                    content:{ sm:'9', md:'9', lg:'9', xl:'9', xxl:'9' } 
                                    }}
                        list={[{ id:"basic", label:"Basic Rules", component:(<BasicRules />) },
                                { id:"menu1", label:"State-wise Stamp Duty & Registration Rules (India)", component:(<StatewiseStampDuty />) },
                                { id:"menu2", label:"Menu 2", component:(<div>Menu #2 Content</div>) }]}
                        />
        </div>
    </ContainerFluid>
    <Footer />
 </div>);
};

export default OnlineRentalAgreements;