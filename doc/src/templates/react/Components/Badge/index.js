import React, { useState, useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const BadgeNotes = ()=>{

  const Note1 = () =>{
    return (<>
    <div className="mtop10p mbot10p"><b>Simple Badges:</b></div>
    <Card padding={15} backgroundColor={Colors.grey}>
    <div className="mbot10p"><b>Sample Code:</b></div>
    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1','2','5T12']}  />
    <div className="mtop10p mbot10p"><b>Output:</b></div>
    <SampleNote1 />
    </Card>
    </>);
  };

  const Note2 = () =>{
    return (<>
    <div className="mtop10p mbot10p"><b>Rounded-Pill Badges:</b></div>
    <Card padding={15} backgroundColor={Colors.grey}>
    <div className="mbot10p"><b>Sample Code:</b></div>
    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1','2','18T25']}  />
    <div className="mtop10p mbot10p"><b>Output:</b></div>
    <SampleNote2 />
    </Card>
    </>);
  };

  return (<Order data={[<Note1 />, <Note2 />]} />);
};

export const BadgePage = () =>{

  useEffect(() => {
    window.scrollTo(0, 0);
   }, []);
   
  return (<>
   <DocumentHeader title="Badge" componentAttributesTable={ComponentAttributesTable} />
   <ContainerFluid>
    <Row>
      <Col><BadgeNotes /></Col>
    </Row>
   </ContainerFluid>
  </>);
};