import React from "react";
import { Breadcrumb, Colors, ContainerFluid, Row, Col, Icon, Menu, Card } from 'e-ui-react';
import { DisclaimerNote } from '@Templates/Utils/index.js';
import { Table } from '@Templates/Table/index.js';

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

export default StatewiseStampDuty;