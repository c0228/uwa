import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const RichTextEditorNotes = ()=>{

    const Note1 = () =>{
      return (<>
       <div className="mtop10p mbot10p"><b>Rich Text Editor (Using SummerNote Editor):</b></div>
       <Card padding={15} backgroundColor={Colors.grey}>
           <div className="mbot10p"><b>Sample Code:</b></div>
           <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['1']}  />
           <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['5T13']}  />
           <div className="mtop10p mbot10p"><b>Output:</b></div>
           <SampleNote1 />
       </Card>
      </>);
    };

    return (<Order data={[<Note1 />]} />);
};

export const RichTextEditorPage = ()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
       }, []);
      
       return (<>
        <DocumentHeader title="RichTextEditor" componentAttributesTable={ComponentAttributesTable} />
        <ContainerFluid>
          <Row>
              <Col><RichTextEditorNotes /></Col>
          </Row>
        </ContainerFluid>
       </>);
};