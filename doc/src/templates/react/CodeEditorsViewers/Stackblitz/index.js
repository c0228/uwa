import React, { useEffect } from 'react';
import { SimpleHeader, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1 } from './components/example-01/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/example-01/SampleCode.js';
import IndexHtml from '!!raw-loader!./components/example-01/code/index.html'; 
import IndexJS from '!!raw-loader!./components/example-01/code/index.js'; 
import IndexCSS from '!!raw-loader!./components/example-01/code/index.css'; 
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const StackblitzNotes = ()=>{

 const Note1 = () =>{
  const HtmlTemplate = ()=>{
    return (<>
     <Highlight content={IndexHtml.toString()} style={{ height:'100px' }} lang="html"  />
     <div align="center" className="mbot10p"><b>index.html</b></div>
    </>);
  };
  const JSTemplate = ()=>{
    return (<>
     <Highlight content={IndexJS.toString()} style={{ height:'100px' }} lang="javascript"  />
     <div align="center" className="mbot10p"><b>index.js</b></div>
    </>);
  };
  const CSSTemplate = ()=>{
    return (<>
     <Highlight content={IndexCSS.toString()} style={{ height:'100px' }} lang="html"  />
     <div align="center" className="mbot10p"><b>index.css</b></div>
    </>);
  };

  return (<>
  <div className="mtop10p mbot10p"><b>Simple Stackblitz Notebook ( Open in New Window ):</b></div>
  <Card padding={15} backgroundColor={Colors.grey}>
  <div className="mbot10p"><b>Sample Code:</b></div>
  <ContainerFluid>
    <Row>
      <Col xl={4}><HtmlTemplate /></Col>
      <Col xl={4}><JSTemplate /></Col>
      <Col xl={4}><CSSTemplate /></Col>
    </Row>
    <Row>
      <Col><Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['2T4']}  /></Col>
      <Col><Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['6T25']}  /></Col>
      <Col><Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['29']}  /></Col>
    </Row>
  </ContainerFluid>
  <div className="mtop10p mbot10p"><b>Output:</b></div>
  <SampleNote1 />
  </Card>
  </>);
 };

 return (<Order data={[<Note1 />]} />);
};

export const StackblitzPage = () =>{
  
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
 <DocumentHeader title="Stackblitz" componentAttributesTable={ComponentAttributesTable} />
 <ContainerFluid>
  <Row>
    <Col><StackblitzNotes /></Col>
  </Row>
 </ContainerFluid> 
 </>);
};