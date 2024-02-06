import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const DateTimePickerNotes= ()=>{
 const Note1 = ()=>{
  return (<>
    <div className="mtop10p mbot10p"><b>Simple Date Picker:</b></div>
     <Card padding={15} backgroundColor={Colors.grey}>
       <div className="mbot10p"><b>Sample Code:</b></div>
       <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
       <Highlight content={SampleCodeJS.toString()} lang="html" lines={['5','6']}  />
       <div className="mtop10p mbot10p"><b>Output:</b></div>
       <SampleNote1 />
      </Card>
  </>);
 };

 const Note2 = ()=>{
  return (<>
    <div className="mtop10p mbot10p"><b>Simple Time Picker:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
          <Highlight content={SampleCodeJS.toString()} lang="html" lines={['12','13']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <SampleNote2 />
        </Card>
      </>);
 }

 const Note3 = ()=>{
    return (<>
      <div className="mtop10p mbot10p"><b>Simple Date Time Picker:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
            <Highlight content={SampleCodeJS.toString()} lang="html" lines={['19','20']}  />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote3 />
        </Card>
        </>);
 }

 return (<Order data={[<Note1 />,<Note2 />,<Note3 />]} />);
};

export const DateTimePickerPage = () =>{
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 return (<>
 <DocumentHeader title="DateTimePicker" componentAttributesTable={ComponentAttributesTable} />
 <ContainerFluid>
  <Row>
    <Col><DateTimePickerNotes /></Col>
  </Row>
 </ContainerFluid>
 </>);
};

