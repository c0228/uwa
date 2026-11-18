import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const PlaygroundNotes = ()=>{

    const Note1 = () =>{
      return (<>
       <div className="mtop10p mbot10p"><b>Embed Playground into HTML Page:</b></div>
       <Card padding={15} backgroundColor={Colors.grey}>
           <div className="mbot10p"><b>Sample Code:</b></div>
           <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['1']}  />
           <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['3T18']}  />
           <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['27']}  />
           <div className="mtop10p mbot10p"><b>Output:</b></div>
           <SampleNote1 />
       </Card>
      </>);
    };

    const Note2 = () =>{
      return (<>
       <div className="mtop10p mbot10p"><b>Embed Playground into HTML Page:</b></div>
       <Card padding={15} backgroundColor={Colors.grey}>
           <div className="mbot10p"><b>Sample Code:</b></div>
           <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['1']}  />
           <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['3T18']}  />
           <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['33']}  />
           <div className="mtop10p mbot10p"><b>Output:</b></div>
           <SampleNote2 />
       </Card>
      </>);
    };

    const Note3 = () =>{
      return (<>
       <div className="mtop10p mbot10p"><b>Embed Playground into HTML Page:</b></div>
       <Card padding={15} backgroundColor={Colors.grey}>
           <div className="mbot10p"><b>Sample Code:</b></div>
           <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['1']}  />
           <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['20T23']}  />
           <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['39T64']}  />
           <div className="mtop10p mbot10p"><b>Output:</b></div>
           <SampleNote3 />
       </Card>
      </>);
    };

    return (<Order data={[<Note1 />, <Note2 />, <Note3 />]} />);
};

export const PlaygroundPage = ()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
       }, []);
      
       return (<>
        <DocumentHeader title="Playground" componentAttributesTable={ComponentAttributesTable} />
        <ContainerFluid>
          <Row>
              <Col><PlaygroundNotes /></Col>
          </Row>
        </ContainerFluid>
       </>);
};