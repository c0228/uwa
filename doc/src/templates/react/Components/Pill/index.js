import React, { useEffect } from "react";
import { ContainerFluid, Row, Col,  Order, Card, Highlight, Colors } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";
import { SampleNote1, SampleNote2, SampleNote3, SampleNote4, SampleNote5, SampleNote6 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

const PillPageNotes = ()=>{

  const Note1 = ()=>{
    return (<>
      <div className="mtop10p mbot10p"><b>Pill at Horizontal Right:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['4']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['48T59']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <SampleNote1 />
      </Card>
    </>);
  };

  const Note2 = ()=>{
    return (<>
      <div className="mtop10p mbot10p"><b>Pill at Horizontal Center:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['4']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['65T76']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <SampleNote2 />
      </Card>
    </>);
  };

  const Note3 = ()=>{
    return (<>
      <div className="mtop10p mbot10p"><b>Pill at Horizontal Left:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['4']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['82T92']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <SampleNote3 />
      </Card>
    </>);
  };

  const Note4 = ()=>{
    return (<>
      <div className="mtop10p mbot10p"><b>Pill at Horizontal Left (With Content):</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1','2']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['4']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['6T34']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['98T108']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <SampleNote4 />
      </Card>
    </>);
  };

  const Note5 = ()=>{
    return (<>
      <div className="mtop10p mbot10p"><b>Vertical Right (With Content):</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1','2']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['4']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['6T34']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['114T130']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <SampleNote5 />
      </Card>
    </>);
  };

  const Note6 = ()=>{
    return (<>
      <div className="mtop10p mbot10p"><b>Vertical Left (With Content):</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1','2']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['4']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['6T34']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['136T150']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <SampleNote6 />
      </Card>
    </>);
  };

  return (<Order data={[<Note1 />, <Note2 />, <Note3 />, <Note4 />, <Note5 />, <Note6 />]} />);
};

export const PillPage = ()=>{
 useEffect(() => {
    window.scrollTo(0, 0);
 }, []);

 return (<>
  <DocumentHeader title="Pill" componentAttributesTable={ComponentAttributesTable} />
 <ContainerFluid>
  <Row>
    <Col xl={12} xxl={12}>
      <PillPageNotes />
    </Col>
  </Row>
 </ContainerFluid>
 </>);
};