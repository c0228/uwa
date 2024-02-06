import React from "react";
import { Menu, ContainerFluid, Row, Col, Card } from "e-ui-react";
import Template1 from "./template-01/index.js";

const UIDesign =()=>{

 const ViewTemplate01 = ()=>{
  return (<ContainerFluid>
  <Row>
    <Col xl={3} xxl={4}>
      {/*  */}
      <Card padding={15}>
        <div align="center"><b>TEMPLATE #1 (Simple)</b></div>
        <ol>
          <li><a target="_blank" href="Authentication/Template1/Auth">Login / Register / Forgot Password</a> Page</li>
          <li><a href="#">Change Password</a> Page <br/>(When Forgot Password is submitted, an Email is sent to Reset Password. 
          When clicked on Reset Password Button, it will redirect to Change Password Page)</li>
          <li><a target="_blank" href="Authentication/Template1/UserProfile">User Profile</a> Page</li>
        </ol>
      </Card>
      {/*  */}
    </Col>
  </Row>
  </ContainerFluid>);
 };

 return (<div style={{ padding:'15px' }}>
     {/*<Menu type="pill" 
   list={[{ id:"template1", label:"Template 1", 
   component:(<Template1 />) },
 { id:"template2", label:"Template 2", component:(<div style={{ paddingTop:'8px' }}>Menu #1 Content</div>) },
{ id:"template3", label:"Template 3", component:(<div style={{ paddingTop:'8px' }}>Menu #2 Content</div>) }]} /> */}
 <ViewTemplate01 />
 </div>);
};

export default UIDesign;