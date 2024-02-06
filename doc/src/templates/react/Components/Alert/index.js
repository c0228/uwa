import React, { useEffect } from 'react';
import { SimpleHeader, FilledHeader, Alert, ContainerFluid, Row, Col, Order, Card, Highlight, Colors } from 'e-ui-react';
import { SampleNote1, SampleNote2, SampleNote3, SampleNote4, SampleNote5, SampleNote6, SampleNote7, SampleNote8,
 SampleNote9, SampleNote10, SampleNote11, SampleNote12, SampleNote13, SampleNote14, SampleNote15, SampleNote16 } from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

const AlertNotes1 = ()=>{

 const Note1 = () =>{
   return (<>
    <div className="mtop10p mbot10p"><b>Primary Alert:</b></div>
    <Card padding={15} backgroundColor={Colors.grey}>
        <div className="mbot10p"><b>Sample Code:</b></div>
        <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['5']}  />
        <div className="mtop10p mbot10p"><b>Output:</b></div>
        <SampleNote1 />
    </Card>
   </>);
 };

 const Note2 = () =>{
    return (<>
        <div className="mtop10p mbot10p"><b>Secondary Alert:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['11']}  />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote2 />
        </Card>
    </>);
 };

 const Note3 = () =>{
    return (<>
        <div className="mtop10p mbot10p"><b>Success Alert:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['17']}  />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote3 />
        </Card>
    </>);
 };

 const Note4 = () =>{
    return (<>
        <div className="mtop10p mbot10p"><b>Danger Alert:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['23']}  />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote4 />
        </Card>
    </>);
 };

 const Note5 = () =>{
    return (<>
        <div className="mtop10p mbot10p"><b>Warning Alert:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['29']}  />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote5 />
        </Card>
    </>);
 };

 const Note6 = () =>{
    return (<>
        <div className="mtop10p mbot10p"><b>Info Alert:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['35']}  />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote6 />
        </Card>
    </>);
 };

 const Note7 = () =>{
    return (<>
        <div className="mtop10p mbot10p"><b>Dark Alert:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['41']}  />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote7 />
        </Card>
    </>);
 };

 const Note8 = () =>{
    return (<>
        <div className="mtop10p mbot10p"><b>Light Alert:</b></div>
        <Card padding={15} backgroundColor={Colors.grey}>
            <div className="mbot10p"><b>Sample Code:</b></div>
            <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['47']}  />
            <div className="mtop10p mbot10p"><b>Output:</b></div>
            <SampleNote8 />
        </Card>
    </>);
 };

 return (<Order data={[<Note1 />, <Note2 />, <Note3 />, <Note4 />, <Note5 />, <Note6 />, <Note7 />, <Note8 />]} />);

};

const AlertNotes2 = ()=>{

    const Note1 = () =>{
      return (<>
       <div className="mtop10p mbot10p"><b>Primary Alert:</b></div>
       <Card padding={15} backgroundColor={Colors.grey}>
           <div className="mbot10p"><b>Sample Code:</b></div>
           <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['53']}  />
           <div className="mtop10p mbot10p"><b>Output:</b></div>
           <SampleNote9 />
       </Card>
      </>);
    };
   
    const Note2 = () =>{
       return (<>
           <div className="mtop10p mbot10p"><b>Secondary Alert:</b></div>
           <Card padding={15} backgroundColor={Colors.grey}>
               <div className="mbot10p"><b>Sample Code:</b></div>
               <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['59']}  />
               <div className="mtop10p mbot10p"><b>Output:</b></div>
               <SampleNote10 />
           </Card>
       </>);
    };
   
    const Note3 = () =>{
       return (<>
           <div className="mtop10p mbot10p"><b>Success Alert:</b></div>
           <Card padding={15} backgroundColor={Colors.grey}>
               <div className="mbot10p"><b>Sample Code:</b></div>
               <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['65']}  />
               <div className="mtop10p mbot10p"><b>Output:</b></div>
               <SampleNote11 />
           </Card>
       </>);
    };
   
    const Note4 = () =>{
       return (<>
           <div className="mtop10p mbot10p"><b>Danger Alert:</b></div>
           <Card padding={15} backgroundColor={Colors.grey}>
               <div className="mbot10p"><b>Sample Code:</b></div>
               <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['71']}  />
               <div className="mtop10p mbot10p"><b>Output:</b></div>
               <SampleNote12 />
           </Card>
       </>);
    };
   
    const Note5 = () =>{
       return (<>
           <div className="mtop10p mbot10p"><b>Warning Alert:</b></div>
           <Card padding={15} backgroundColor={Colors.grey}>
               <div className="mbot10p"><b>Sample Code:</b></div>
               <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['77']}  />
               <div className="mtop10p mbot10p"><b>Output:</b></div>
               <SampleNote13 />
           </Card>
       </>);
    };
   
    const Note6 = () =>{
       return (<>
           <div className="mtop10p mbot10p"><b>Info Alert:</b></div>
           <Card padding={15} backgroundColor={Colors.grey}>
               <div className="mbot10p"><b>Sample Code:</b></div>
               <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['83']}  />
               <div className="mtop10p mbot10p"><b>Output:</b></div>
               <SampleNote14 />
           </Card>
       </>);
    };
   
    const Note7 = () =>{
       return (<>
           <div className="mtop10p mbot10p"><b>Dark Alert:</b></div>
           <Card padding={15} backgroundColor={Colors.grey}>
               <div className="mbot10p"><b>Sample Code:</b></div>
               <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['89']}  />
               <div className="mtop10p mbot10p"><b>Output:</b></div>
               <SampleNote15 />
           </Card>
       </>);
    };
   
    const Note8 = () =>{
       return (<>
           <div className="mtop10p mbot10p"><b>Light Alert:</b></div>
           <Card padding={15} backgroundColor={Colors.grey}>
               <div className="mbot10p"><b>Sample Code:</b></div>
               <Highlight content={SampleCodeJS.trim().toString()} lang="javascript" lines={['95']}  />
               <div className="mtop10p mbot10p"><b>Output:</b></div>
               <SampleNote16 />
           </Card>
       </>);
    };
   
    return (<Order data={[<Note1 />, <Note2 />, <Note3 />, <Note4 />, <Note5 />, <Note6 />, <Note7 />, <Note8 />]} />);
   
   };

export const AlertPage = () =>{

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
  <DocumentHeader title="Alert" componentAttributesTable={ComponentAttributesTable} />
  <ContainerFluid>
    <Row>
        <Col><FilledHeader title="Alerts with Heading and Body" backgroundColor={Colors.primary} color={Colors.light} /></Col>
    </Row>
    <Row>
        <Col><AlertNotes1 /></Col>
    </Row>
    <Row>
        <Col><FilledHeader title="Simple Alerts without Heading" backgroundColor={Colors.primary} color={Colors.light} /></Col>
    </Row>
    <Row>
        <Col><AlertNotes2 /></Col>
    </Row>
  </ContainerFluid>
 </>);
};