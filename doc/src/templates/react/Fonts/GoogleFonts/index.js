import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Order, Card, Highlight, Colors, FilledHeader  } from 'e-ui-react';
import { SampleNote1, Template1, SampleNote3 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { default as SampleCodeCSS } from '!!raw-loader!./components/SampleCode.css';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
// import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";


const GoogleFontsNotes = () => {

  const Note1 = () => {
    return (<>
      <div className="mtop10p mbot10p"><b>Basic Google Fonts Loader:</b></div>
      <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['1']}  />
        <div className="mbot15p"><b>Make Sure this &lt;GoogleFonts /&gt; Tag exists in the App.js / index.js (at Project Root Level) -</b></div>
        <Row>
            <Col md={6}> 
                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['5T12']}  />   
                <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['15T20']}  />   
            </Col>
            <Col md={6}>
                <div className="mtop10p mbot10p"><b>Output:</b></div>
                <Card padding={15} backgroundColor={Colors.light}><SampleNote1 /></Card>
            </Col>
        </Row>
      </Card>
    </>);
  };

  const Template1Notes = ()=>{
    return (<><Row><Col md={12}><div align="center" className="mbot15p" style={{ fontSize:'15px' }}><b>Template #01</b></div></Col></Row>
    <Row>
        <Col md={6}>
            <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['25T36']}  /> 
            <Highlight content={SampleCodeJS.toString()} lang="javascript" lines={['38T49']}  />
            <Highlight content={SampleCodeCSS.toString()} lang="css" lines={['0T3']}  />  
        </Col>
        <Col md={6}>
            <div className="mbot15p"><b>Output:</b></div>    
            <Card padding={15} backgroundColor={Colors.light}><Template1 /></Card>
        </Col>
    </Row>
    </>);
  };

  return (<ContainerFluid>
    <Row>
        <Col md={12}><Note1 /></Col>
    </Row>
    <Row>
        <Col md={12}>
            <div align="center" className="mtop15p mbot15p">
                <FilledHeader backgroundColor="#0d6efd" color="#fff" title="FONT TEMPLATES" />
            </div>
        </Col>
    </Row>
    <Template1Notes />
  </ContainerFluid>);
};

export const GoogleFontsPage = ()=>{
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);
 return (<>
    <DocumentHeader title="Google Fonts" />
    <ContainerFluid>
      <Row>
        <Col><GoogleFontsNotes /></Col>
      </Row>
    </ContainerFluid>
 </>);
}
