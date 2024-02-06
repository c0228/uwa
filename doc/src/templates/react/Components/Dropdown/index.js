import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const DropdownNotes = ()=>{
console.log(SampleCodeJS.toString());
 const Note1 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>Dropdown with Headers:</b></div>
  <Card padding={15} backgroundColor={Colors.grey}>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0','1']}  />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['4T158']}  />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['161T165']}  />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote1 />
  </Card>
  </>);
 };

 const Note2 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>Simple Dropdown ( with layout = <code><b>top</b></code> and type = <code><b>multiple</b></code>):</b></div>
  <Card padding={15} backgroundColor={Colors.grey}>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0','1']}  />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['171T325']}  />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['328T332']}  />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote2 />
  </Card>
  </>);
 };

 return (<Order data={[<Note1 />, <Note2 />]} />);
};

export const DropdownPage = () =>{
  
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
 <DocumentHeader title="Dropdown" componentAttributesTable={ComponentAttributesTable} />
 <ContainerFluid>
  <Row>
    <Col><DropdownNotes /></Col>
  </Row>
 </ContainerFluid> 
 </>);
};