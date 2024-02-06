import React from "react";
import { Row, Col, Container, ContainerFluid } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
 <ContainerFluid style={{ backgroundColor:'yellow'}}>
  <Row>
    <Col align="center"><b><u>The Best Cities in India</u></b></Col>
  </Row>
  <Row>
    <Col md={3} xl={3}>Hyderabad</Col>
    <Col md={3} xl={3}>Bangalore</Col>
    <Col md={3} xl={3}>Delhi</Col>
    <Col md={3} xl={3}>Chennai</Col>
  </Row>
 </ContainerFluid>
  </>);
};

export const SampleNote2 = () =>{
    return (<>
    <Container style={{ backgroundColor:'yellow'}}>
     <Row>
       <Col align="center"><b><u>The Best Cities in India</u></b></Col>
     </Row>
     <Row>
       <Col md={3} xl={3}>Hyderabad</Col>
       <Col md={3} xl={3}>Bangalore</Col>
       <Col md={3} xl={3}>Delhi</Col>
       <Col md={3} xl={3}>Chennai</Col>
     </Row>
    </Container>
     </>);
   };

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;