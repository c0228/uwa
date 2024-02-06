import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, FloatingButton, Order, Card, Highlight, Colors } from "e-ui-react";
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import { SampleNote1, SampleNote2 } from './components/SampleCode.js';

const FloatingButtonNotes = ()=>{

    const Note1 = ()=>{
        return (<>
            <div className="mtop10p mbot10p"><b>Simple FloatingButton:</b></div>
            <Card padding={15} backgroundColor={Colors.grey}>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0','1']}  />
            <Highlight content={SampleCodeJS.toString()} lang="html" lines={['5T7']}  />
            <SampleNote1 />
            </Card>
            </>);
    };

    const Note2 = ()=>{
        return (<>
            <div className="mtop10p mbot10p"><b>Circular FloatingButton:</b></div>
            <Card padding={15} backgroundColor={Colors.grey}>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0','1']}  />
            <Highlight content={SampleCodeJS.toString()} lang="html" lines={['13T15']}  />
            <SampleNote2 />
            </Card>
            </>);
    };

    return (<Order data={[<Note1 />, <Note2 />]} />);
};

export const FloatingButtonPage = ()=>{
    
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
 <DocumentHeader title="FloatingButton" componentAttributesTable={ComponentAttributesTable} />
 <ContainerFluid>
  <Row>
    <Col>
    <FloatingButtonNotes />
    </Col>
  </Row>
 </ContainerFluid> 
 </>);
};