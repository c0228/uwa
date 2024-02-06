import React from "react";
import { AppThemes, ContainerFluid, Row, Col, Card, Accordian, Button } from 'e-ui-react';

const Header = ()=>{
 return (<ContainerFluid className="mb-1">
  <Row>
    <Col xl={12}>
      <div style={{ fontSize:'14px', paddingBottom:'5px',color:'#555', borderBottom:'1px solid #ccc' }}>
         <b>Choose your Theme</b>
       </div>
    </Col>
  </Row>
</ContainerFluid>);
};

const ThemeSettings = ()=>{
 const ThemeTitle = ({ title })=>{
   return (<div style={{ fontSize:'14px', paddingBottom:'5px',color:'#555' }}><b>{title}</b></div>);
 };
 const ThemeHeaders = ()=>{
    return (<ContainerFluid>
        <Row>
            <Col xl={3}><b>H1</b></Col>
            <Col xl={9}>
                <b>Font Family</b><br/>
                <b>Font Size</b><br/>
                <b>Color</b><br/>
                <b>Horizontal Line Color</b>
            </Col>
        </Row>
        <hr/>
        <Row className="mt-3">
            <Col xl={3}><b>H2</b></Col>
            <Col xl={9}>
                <b>Font Family</b><br/>
                <b>Font Size</b><br/>
                <b>Color</b><br/>
                <b>Horizontal Line Color</b>
            </Col>
        </Row>
        <hr/>
        <Row className="mt-3">
            <Col xl={3}><b>H3</b></Col>
            <Col xl={9}>
                <b>Font Family</b><br/>
                <b>Font Size</b><br/>
                <b>Color</b><br/>
                <b>Horizontal Line Color</b>
            </Col>
        </Row>
        <hr/>
        <Row className="mt-3">
            <Col xl={3}><b>H4</b></Col>
            <Col xl={9}>
                <b>Font Family</b><br/>
                <b>Font Size</b><br/>
                <b>Color</b><br/>
                <b>Horizontal Line Color</b>
            </Col>
        </Row>
        <hr/>
        <Row className="mt-3">
            <Col xl={3}><b>H5</b></Col>
            <Col xl={9}>
                <b>Font Family</b><br/>
                <b>Font Size</b><br/>
                <b>Color</b><br/>
                <b>Horizontal Line Color</b>
            </Col>
        </Row>
    </ContainerFluid>);
 };

 const ThemeBody = ()=>{
    return (<ContainerFluid>
        <Row>
            <Col xl={12}><b>Background Color</b></Col>
        </Row>
        <Row className="mt-3">
            <Col xl={3}><b>Colors</b></Col>
            <Col xl={9}>
                <b>Theme-01 Primary</b><br/>
                <b>Theme-01 Secondary</b><br/>
                <b>Theme-02 Primary</b><br/>
                <b>Theme-02 Secondary</b>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col xl={3}><b>Fonts</b></Col>
            <Col xl={9}>
                <b>Font Family</b><br/>
                <b>Font Size</b><br/>
                <b>Font Color</b>
            </Col>
        </Row>
    </ContainerFluid>);
 };

 return (<Accordian id="AccordianExample"
 data={[{ id:"Item#1", 
          title: (<ThemeTitle title="NavBars" />), 
          component:"This is the first item's accordion body"  
        },
        { id:"Item#2", 
          title: (<ThemeTitle title="Headers" />), 
          component:<ThemeHeaders /> 
        },
        {   id:"Item#3", 
            title:(<ThemeTitle title="Body" />), 
            component:<ThemeBody />
        }]} 
/>);
};

export const AppThemeBuilder = ()=>{
 return (<ContainerFluid>
    <Row className="mt-1">
        <Col xl={4}>
            <Card padding={15}>
                {/** */}
                <Header />
                <ThemeSettings />
                <div align="right" className="mt-2">
                <Button type="primary" label="Create a New Theme" size={11} />
                </div>
                
                {/** */}
            </Card>
        </Col>
    </Row>
</ContainerFluid>);
};
