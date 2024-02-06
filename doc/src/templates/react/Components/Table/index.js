import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3, SampleNote4, SampleNote5 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const TableNotes = ()=>{

 const Note1 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>A Simple Table where DataSettings is not defined:</b></div>
  <Card padding={15} backgroundColor={Colors.grey}>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3T10']}  />
  <Highlight content={SampleCodeJS.toString()} lang="html" lines={['14']} />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote1 />
  </Card>
  </>);
 };

 const Note2 = () =>{
  return (<>
  <div className="mtop10p mbot10p"><b>A Simple Table where DataSettings defined and Empty:</b></div>
  <Card padding={15} backgroundColor={Colors.grey}>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
  <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3T10']}  />
  <Highlight content={SampleCodeJS.toString()} lang="html" lines={['20']} />
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote2 />
  </Card>
  </>);
 };

 const Note3 = () =>{
   return (<>
   <div className="mtop10p mbot10p"><b>A Simple Table where DataSettings defined and it is true:</b></div>
   <Card padding={15} backgroundColor={Colors.grey}>
   <div className="mbot10p"><b>Sample Code:</b></div>
   <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
   <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3T10']}  />
   <Highlight content={SampleCodeJS.toString()} lang="html" lines={['26']}  />
   <div className="mtop10p mbot10p"><b>Output:</b></div>
   <SampleNote3 />
   </Card>
   </>);
 };

 const Note4 = () =>{
   return (<>
   <div className="mtop10p mbot10p"><b>A Simple Table where DataSettings defined and it is false:</b></div>
   <Card padding={15} backgroundColor={Colors.grey}>
   <div className="mbot10p"><b>Sample Code:</b></div>
   <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
   <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3T10']}  />
   <Highlight content={SampleCodeJS.toString()} lang="html" lines={['32']} />
   <div className="mtop10p mbot10p"><b>Output:</b></div>
   <SampleNote4 />
   </Card>
   </>);
  };

  const Note5 = () =>{
    return (<>
    <div className="mtop10p mbot10p"><b>A Simple Table where DataSettings defined and with Search Required:</b></div>
    <Card padding={15} backgroundColor={Colors.grey}>
    <div className="mbot10p"><b>Sample Code:</b></div>
    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
    <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['3T10']}  />
    <Highlight content={SampleCodeJS.toString()} lang="html" lines={['38T41']}  />
    <div className="mtop10p mbot10p"><b>Output:</b></div>
    <SampleNote5 />
    </Card>
    </>);
   };

 return (<Order data={[<Note1 />, <Note2 />, <Note3 />, <Note4 />,<Note5 />]} />);
};

export const TablePage = () =>{
  
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
 <DocumentHeader title="Table" componentAttributesTable={ComponentAttributesTable} />
 <ContainerFluid>
  <Row>
    <Col><TableNotes /></Col>
  </Row>
 </ContainerFluid>
 </>);
};