import React, { useEffect } from 'react';
import { ContainerFluid, Row, Col, Order, Card, Highlight, Colors  } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const RatingNotes = () => {

    const Note1 = () => {
      return (<>
        <div className="mtop10p mbot10p"><b>Simple Rating:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
          <Highlight content={SampleCodeJS.toString()} lang="html" lines={['6T13']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <Row>
            <Col xl={3}>
                <Card padding={15} backgroundColor={Colors.light}><SampleNote1 /></Card>
            </Col>
          </Row>
        </Card>
      </>);
    };
  
    const Note2 = () => {
      return (<>
        <div className="mtop10p mbot10p"><b>Simple Rating with Form:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1','2']}  />
          <Highlight content={SampleCodeJS.toString()} lang="html" lines={['19T31']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <Row>
            <Col xl={3}>
                <Card padding={15} backgroundColor={Colors.light}><SampleNote2 /></Card>
            </Col>
          </Row>
        </Card>
      </>);
    };

    const Note3 = () => {
      return (<>
        <div className="mtop10p mbot10p"><b>Simple Rating (Position==='static'):</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1','2']}  />
          <Highlight content={SampleCodeJS.toString()} lang="html" lines={['37T44']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <Row>
            <Col xl={3}>
                <Card padding={15} backgroundColor={Colors.light}><SampleNote3 /></Card>
            </Col>
          </Row>
        </Card>
      </>);
    };

    return (<Order data={[<Note1 />, <Note2 />, <Note3 />]} />);
  };

export const RatingPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
     <DocumentHeader title="Rating" componentAttributesTable={ComponentAttributesTable} />
     <ContainerFluid>
      <Row>
        <Col><RatingNotes /></Col>
      </Row>
    </ContainerFluid>
    </>);
};