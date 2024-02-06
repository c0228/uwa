import React, { useEffect } from "react";
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const EmailNotes = () => {

    const Note1 = () => {
      return (<>
        <div className="mtop10p mbot10p"><b>Email (Retreiving the Registered Email):</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
          <Highlight content={SampleCodeJS.toString()} lang="html" lines={['6T18']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <Card padding={15} backgroundColor={Colors.light}><SampleNote1 /></Card>
        </Card>
      </>);
    };
  
    const Note2 = () => {
      return (<>
        <div className="mtop10p mbot10p"><b>Email (Validating for Registering New Email):</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
          <Highlight content={SampleCodeJS.toString()} lang="html" lines={['24T36']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <Card padding={15} backgroundColor={Colors.light}><SampleNote2 /></Card>
        </Card>
      </>);
    };
  
    const Note3 = () => {
      return (<>
        <div className="mtop10p mbot10p"><b>Autocomplete with Form:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3']}  />
          <Highlight content={SampleCodeJS.toString()} lang="html" lines={['43T57']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <Card padding={15} backgroundColor={Colors.light}><SampleNote3 /></Card>
        </Card>
      </>);
    };
  
    return (<Order data={[<Note1 />, <Note2 />, <Note3 />]} />);
  };

export const EmailPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
    <DocumentHeader title="Email" componentAttributesTable={ComponentAttributesTable} />
    <ContainerFluid>
      <Row>
        <Col><EmailNotes /></Col>
      </Row>
    </ContainerFluid>
    </>);
};