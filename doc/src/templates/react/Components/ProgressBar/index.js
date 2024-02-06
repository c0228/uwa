import React, { useEffect } from 'react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";
import { ContainerFluid, Row, Col, Order, Highlight, Card, Colors  } from "e-ui-react";
import { SampleNote1 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';

export const ProgressBarPage = () => {
    
    const ProgressBarNotes = ()=>{

         const Note1 = () =>{
          return (<>
          <div className="mtop10p mbot10p"><b>ProgressBar:</b></div>
          <Card padding={15} backgroundColor={Colors.grey}>
          <div className="mbot10p"><b>Sample Code:</b></div>
          <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
          <Highlight content={SampleCodeJS.toString()} lang="html" lines={['6','9','12','15','18']}  />
          <div className="mtop10p mbot10p"><b>Output:</b></div>
          <Card padding={15}><SampleNote1 /></Card>
          </Card>
          </>);
         };

         return (<Order data={[<Note1 />]} />);

    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
    <DocumentHeader title="ProgressBar" componentAttributesTable={ComponentAttributesTable} />
    <ContainerFluid>
    <Row>
        <Col><ProgressBarNotes /></Col>
    </Row>
    </ContainerFluid>
    </>);
};