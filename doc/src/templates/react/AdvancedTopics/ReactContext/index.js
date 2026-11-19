import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { HelloWorld } from './components/SampleCode.js';
import { default as Context  } from '!!raw-loader!./components/Context.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const ReactContextNotes = ()=>{
console.log(SampleCodeJS.toString());
 const Note1 = () =>{
  return (<>
  <Card padding={15} backgroundColor={Colors.grey}>
  <div className="mbot10p"><b>Keep your code in <code>./context.js</code>:</b></div>
    <Highlight content={Context.toString()} lang="javascript" lines={['0T48']}  />
  </Card>
  <div className="mtop10p mbot10p"><b>Implementing React Context on Root Component:</b></div>
  <Card padding={15} backgroundColor={Colors.grey}>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['0T47']}  />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <HelloWorld />
  <div className="mtop10p mbot10p"><b>Append, Replace and Remove:</b></div>
  <ul>
    <li className="mtop5p"><b>append:</b> Appending data to an existing data for an attribute</li>
    <li className="mtop5p"><b>replace:</b> Replacing data to an existing data for an attribute</li>
    <li className="mtop5p"><b>remove:</b> Removing the existing attribute itself</li>
  </ul>
  </Card>
  </>);
 };

 return (<Order data={[<Note1 />]} />);
};

export const ReactContextPage = () =>{
  
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
 <DocumentHeader title="React Context" componentAttributesTable={ComponentAttributesTable} />
 <ContainerFluid>
  <Row>
    <Col><ReactContextNotes /></Col>
  </Row>
 </ContainerFluid> 
 </>);
};