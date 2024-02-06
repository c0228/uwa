import React, { useEffect } from 'react';
import { SimpleHeader, Order, Card, Highlight, Colors, ContainerFluid, Row, Col } from 'e-ui-react';
import { SampleNote1, SampleNote2 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const CardSliderNotes = ()=>{
console.log(SampleCodeJS.toString());
 const Note1 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>CardSlider (Template#1 - Images Background):</b></div>
  <Card padding={15} backgroundColor={Colors.grey}>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
   <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['4T30']}  />
   <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['33']}  />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote1 />
  </Card>
  </>);
 };

 const Note2 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>CardSlider (Template#1 - BackgroundColor):</b></div>
  <Card padding={15} backgroundColor={Colors.grey}>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['38T64']}  />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['66']}  />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote2 />
  </Card>
  </>);
 };

 return (<Order data={[<Note1 />, <Note2 />]} />);
};

export const CardSliderPage = () =>{
  
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
 <DocumentHeader title="CardSlider" componentAttributesTable={ComponentAttributesTable} />
 <ContainerFluid>
  <Row>
    <Col><CardSliderNotes /></Col>
  </Row>
 </ContainerFluid>
 </>);
};