import React, { useEffect } from "react";
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const ChoiceNotes = () => {

    const Note1 = () => {
      return (<>
        <div className="mtop10p mbot10p"><b>Choice :</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}   />
          <Highlight content={SampleCodeJS.toString()} lang="html" lines={['6T25']}   />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <Card padding={15} backgroundColor={Colors.light}><SampleNote1 /></Card>
        </Card>
      </>);
    };

    const Note2 = () => {
      return (<>
        <div className="mtop10p mbot10p"><b>Choice :</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
          <Highlight content={SampleCodeJS.toString()} lang="html" lines={['31T66']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <Card padding={15} backgroundColor={Colors.light}><SampleNote2 /></Card>
        </Card>
      </>);
    };

    return (<Order data={[<Note1 />,<Note2 />]} />);
  };

export const ChoicePage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
    <DocumentHeader title="Choice" componentAttributesTable={ComponentAttributesTable} />
    <ContainerFluid>
      <Row>
        <Col><ChoiceNotes /></Col>
      </Row>
    </ContainerFluid>
    </>);
};