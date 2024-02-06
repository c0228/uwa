import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Order, Card, Highlight, Colors, Tab  } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";


const FileDropperNotes = () => {

  const Note1 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Simple File Upload:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0','1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['6T10']}  />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card padding={15} backgroundColor={Colors.light}><SampleNote1 /></Card>
      </Card>
    </>);
  };

  const Note2 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Simple File Upload (With Form):</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0', '1','2']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['16T22']}  />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card padding={15} backgroundColor={Colors.light}><SampleNote2 /></Card>
      </Card>
    </>);
  };

  return (<Order data={[<Note1 />, <Note2 /> ]} />);
};

const ImageDropperNotes = () => {

  const Note1 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Image File Dropper (With Form):</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0', '1','2']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['29T34']}  />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card padding={15} backgroundColor={Colors.light}><SampleNote3 /></Card>
      </Card>
    </>);
  };

  return (<Order data={[<Note1 /> ]} />);
};

export const FileUploadPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <DocumentHeader title="File Upload" componentAttributesTable={ComponentAttributesTable} />
    <ContainerFluid className="mtop15p">
      <Row>
        <Col>
          <Tab justify={true} minValues={4} menulinks={[
            { id:"home", label:"Upload Files", component:(<FileDropperNotes />) },
            { id:"menu1", label:"Image Gallery", component:(<ImageDropperNotes />) }
          ]} />
        </Col>
        <Col></Col>
      </Row>
    </ContainerFluid>
  </>);
};

