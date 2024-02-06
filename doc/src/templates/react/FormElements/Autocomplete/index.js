import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Order, Card, Highlight, Colors  } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";


const AutocompleteNotes = () => {

  const Note1 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Autocomplete (With Static Data):</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['6']}  />
        <Highlight content={SampleCodeJS.toString()} lang="html" lines={['9']}  />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card padding={15} backgroundColor={Colors.light}><SampleNote1 /></Card>
      </Card>
    </>);
  };

  const Note2 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Autocomplete (From API):</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0', '1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['14']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['16T26']}  />
        <Highlight content={SampleCodeJS.toString()} lang="html" lines={['30']}  />
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
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1', '2']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['36']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['38T52']}  />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <Card padding={15} backgroundColor={Colors.light}><SampleNote3 /></Card>
      </Card>
    </>);
  };

  return (<Order data={[<Note1 />, <Note2 />, <Note3 />]} />);
};

export const AutocompletePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <DocumentHeader title="Autocomplete" componentAttributesTable={ComponentAttributesTable} />
    <ContainerFluid>
      <Row>
        <Col><AutocompleteNotes /></Col>
      </Row>
    </ContainerFluid>
  </>);
};

