import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const CalendarNotes = () => {
  const Note1 = () => {
    const NoteOutput = () => {
      return (<>
        <SampleNote1 />
      </>);
    };

    const NoteCode = () => {
      return (<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5']}  />
      </>);
    };

    return (<>
      <div className="mtop10p mbot10p"><b>Simple Calendar:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <ContainerFluid>
          <Row>
            <Col xl={5}><NoteOutput /></Col>
            <Col xl={7}><NoteCode /></Col>
          </Row>
        </ContainerFluid>
      </Card>

    </>);
  };
  return (<Order data={[<Note1 />]} />);
};

export const CalendarPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <DocumentHeader title="Calendar" componentAttributesTable={ComponentAttributesTable} />
    <ContainerFluid>
      <Row>
        <Col><CalendarNotes /></Col>
      </Row>
    </ContainerFluid>
  </>);
};