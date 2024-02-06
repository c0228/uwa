import React, { useEffect } from "react";
import { ContainerFluid, Row, Col,  Order, Card, Highlight, Colors } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";
import { SampleNote1, SampleNote2 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

const TabPageNotes = ()=>{

  const Note1 = ()=>{
    return (<>
      <div className="mtop10p mbot10p"><b>Nav at Horizontal Right:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['13T20']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <SampleNote1 />
      </Card>
    </>);
  };

  const Note2 = ()=>{
    return (<>
      <div className="mtop10p mbot10p"><b>Nav at Horizontal Center:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['26T33']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <SampleNote2 />
      </Card>
    </>);
  };

  return (<Order data={[<Note1 />, <Note2 />]} />);
};

export const TabPage = ()=>{
 useEffect(() => {
    window.scrollTo(0, 0);
 }, []);

 return (<>
  <DocumentHeader title="Tab" componentAttributesTable={ComponentAttributesTable} />
 <ContainerFluid className="mbot15p">
  <Row>
    <Col xl={12} xxl={12}>
      <TabPageNotes />
    </Col>
  </Row>
 </ContainerFluid>
 </>);
};