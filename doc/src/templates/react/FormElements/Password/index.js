import React, { useEffect } from "react";
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const PasswordNotes = () => {

    const Note1 = () => {
      return (<>
        <div className="mtop10p mbot10p"><b>Password:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
          <Highlight content={SampleCodeJS.toString()} lang="html" lines={['6T20']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <Card padding={15} backgroundColor={Colors.light}><SampleNote1 /></Card>
        </Card>
      </>);
    };
  
    const Note2 = () => {
      return (<>
        <div className="mtop10p mbot10p"><b>Password and Confirm Password with Form:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1','2']}  />
          <Highlight content={SampleCodeJS.toString()} lang="html" lines={['26T57']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <Card padding={15} backgroundColor={Colors.light}><SampleNote2 /></Card>
        </Card>
      </>);
    };
  
    return (<Order data={[<Note1 />, <Note2 />]} />);
  };

export const PasswordPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
    <DocumentHeader title="Password" componentAttributesTable={ComponentAttributesTable} />
    <ContainerFluid>
      <Row>
        <Col><PasswordNotes /></Col>
      </Row>
    </ContainerFluid>
    </>);
};