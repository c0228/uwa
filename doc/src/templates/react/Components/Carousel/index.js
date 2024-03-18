import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { default as SampleCodeCSS } from '!!raw-loader!./components/SampleCode.css';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const CarouselNotes = () => {
  const Note1 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Card Carousel:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['7T32']}  />
        <div align="center"><b>SampleCode.js</b></div>
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <SampleNote1 />
      </Card>
    </>);
  };
  return (<Order data={[<Note1 />]} />);
};

export const CarouselPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
    <DocumentHeader title="Carousel" componentAttributesTable={ComponentAttributesTable} />
    <ContainerFluid>
      <Row>
        <Col><CarouselNotes /></Col>
      </Row>
    </ContainerFluid>
  </>);
};