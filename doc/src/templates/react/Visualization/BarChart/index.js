import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3, SampleNote4, SampleNote5, SampleNote6 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const BarChartNotes = () => {
  const Note1 = () => {
    const NoteChart = () => {
      return (<>
        <SampleNote1 />
      </>);
    };

    const NoteCode = () => {
      return (<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0', '1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5T11']}  />
        <Highlight content={SampleCodeJS.toString()} lang="html" lines={['14']}  />
      </>);
    };

    return (<>
      <div className="mtop10p mbot10p"><b>Simple Bar Chart:</b></div>
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
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0', '1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['21T27']}  />
        <Highlight content={SampleCodeJS.toString()} lang="html" lines={['30']}  />
      </>);
    };

    return (<>
      <div className="mtop10p mbot10p"><b>Stacked Bar Chart:</b></div>
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
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0', '1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['37T43']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['45T47']}  />
        <Highlight content={SampleCodeJS.toString()} lang="html" lines={['50']}  />
      </>);
    };

    return (<>
      <div className="mtop10p mbot10p"><b>Mixed Bar Chart (Combination of Simple and Stacked):</b></div>
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

  const Note4 = () => {
    const NoteChart = () => {
      return (<>
        <SampleNote4 />
      </>);
    };

    const NoteCode = () => {
      return (<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0', '1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['57T63']}  />
        <Highlight content={SampleCodeJS.toString()} lang="html" lines={['66']}  />
      </>);
    };

    return (<>
      <div className="mtop10p mbot10p"><b>Positive and Negative Bar Chart:</b></div>
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

  const Note5 = () => {
    const NoteChart = () => {
      return (<>
        <SampleNote5 />
      </>);
    };

    const NoteCode = () => {
      return (<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0', '1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['72T110']}  />
        <Highlight content={SampleCodeJS.toString()} lang="html" lines={['113']}  />
      </>);
    };

    return (<>
      <div className="mtop10p mbot10p"><b>Brush Bar Chart:</b></div>
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

    const Note6 = () => {
    const NoteChart = () => {
      return (<>
        <SampleNote6 />
      </>);
    };

    const NoteCode = () => {
      return (<>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0', '1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['120T126']}  />
        <Highlight content={SampleCodeJS.toString()} lang="html" lines={['129']}  />
      </>);
    };

    return (<>
      <div className="mtop10p mbot10p"><b>Vertical Bar Chart:</b></div>
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

  return (<Order data={[<Note1 />, <Note2 />, <Note3 />, <Note4 />, <Note5 />, <Note6 />]} />);
};

export const BarChartPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <DocumentHeader title="BarChart" componentAttributesTable={ComponentAttributesTable} />
    <ContainerFluid>
      <Row>
        <Col><BarChartNotes /></Col>
      </Row>
    </ContainerFluid>
  </>);
  
};