import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const HoverNotes = ()=>{

 const Note1 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>Hover on simple button:</b></div>
  <Card padding={15} backgroundColor={Colors.grey}>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0','1']}  />
  <Highlight content={SampleCodeJS.toString()} lang="html" lines={['5T16']}  />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote1 />
  </Card>
  </>);
 };

 const Note2 = () =>{
    return (<>
    <div className="mtop10p mbot10p"><b>Hover on simple text:</b></div>
    <Card padding={15} backgroundColor={Colors.grey}>
    <div className="mbot10p"><b>Sample Code:</b></div>
    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0','1']}  />
    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['22T26']}  />
    <Highlight content={SampleCodeJS.toString()} lang="html" lines={['29T40']}  />
    <div className="mtop10p mbot10p"><b>Output:</b></div>
    <SampleNote2 />
    </Card>
    </>);
   };

 return (<Order data={[<Note1 />, <Note2 />]} />);
};

export const HoverPage = () =>{
  
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
 <DocumentHeader title="Hover" componentAttributesTable={ComponentAttributesTable} />
 <ContainerFluid>
  <Row>
    <Col><HoverNotes /></Col>
  </Row>
 </ContainerFluid> 
 </>);
};