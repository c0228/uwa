import React, { useEffect } from 'react';
import { SimpleHeader, Order, Card, Highlight, Colors, ContainerFluid, Row, Col } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const TimelineNotes = ()=>{
console.log(SampleCodeJS.toString());
 const Note1 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>Sime Timeline:</b></div>
  <Card padding={15} backgroundColor={Colors.grey}>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3T59']} />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['63']} />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote1 />
  </Card>
  </>);
 };

 const Note2 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>Timeline (withCard = true):</b></div>
  <Card padding={15} backgroundColor={Colors.grey}>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3T59']} />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['70']} />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote2 />
  </Card>
  </>);
 };

 const Note3 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>Timeline (Template#2) :</b></div>
  <Card padding={15} backgroundColor={Colors.grey}>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3T59']} />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['70']} />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote3 />
  </Card>
  </>);
 };


 return (<Order data={[<Note1 />,<Note2 />, <Note3 />]} />);
};

export const TimelinePage = () =>{
  
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
 <DocumentHeader title="Timeline" componentAttributesTable={ComponentAttributesTable} />
 <ContainerFluid>
  <Row>
    <Col><TimelineNotes /></Col>
  </Row>
 </ContainerFluid>
 </>);
};