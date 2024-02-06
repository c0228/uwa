import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const GeoMapNotes = () => {
  const Note1 = () => {
    const NoteChart = () => {
      return (<>
        <SampleNote1 />
      </>);
    };

    const NoteCode = () => {
      return (<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['4T10']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['12T15']}  />
      </>);
    };

    return (<>
      <div className="mtop10p mbot10p"><b>GeoMap:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
      <ContainerFluid>
        <Row>
          <Col sm={5}><NoteChart /></Col>
          <Col sm={7}><NoteCode /></Col>
        </Row>
      </ContainerFluid>
      </Card>

    </>);
  };

  const Note2 = () => {
    const NoteChart = () => {
      return (<>
        <SampleNote2 />
      </>);
    };

    const NoteCode = () => {
      return (<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['20T26']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['28T31']}  />
      </>);
    };

    return (<>
      <div className="mtop10p mbot10p"><b>Percentage Area Chart:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <ContainerFluid>
        <Row>
          <Col sm={5}><NoteChart /></Col>
          <Col sm={7}><NoteCode /></Col>
        </Row>
      </ContainerFluid>
      </Card>
    </>);
  };

  const Note3 = () => {
    const NoteChart = () => {
      return (<>
        <SampleNote3 />
      </>);
    };

    const NoteCode = () => {
      return (<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['36T42']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['44T45']}  />
      </>);
    };

    return (<>
      <div className="mtop10p mbot10p"><b>FillByValue Area Chart:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <ContainerFluid>
          <Row>
            <Col sm={5}><NoteChart /></Col>
            <Col sm={7}><NoteCode /></Col>
          </Row>
        </ContainerFluid>
      </Card>

    </>);
  };

  return (<Order data={[<Note1 />, <Note2 />, <Note3 />]} />);
};

export const GeoMapPage = () => {
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
  <DocumentHeader title="GeoMap" componentAttributesTable={ComponentAttributesTable} />
  <ContainerFluid>
    <Row>
     <Col><GeoMapNotes /></Col>
    </Row>
  </ContainerFluid>
 </>);
};