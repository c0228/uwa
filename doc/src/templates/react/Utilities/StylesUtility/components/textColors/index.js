import React from "react";
import { Card, Row, Col } from "e-ui-react";

const ColorUtility = ()=>{
 return (<>
 <Card>
    <div style={{ padding:'15px' }}>
        <div>
            <h4 className="bs-header" style={{ borderBottom:'1px solid #ccc', paddingBottom:'6px', marginBottom:'5px' }}>
                <b>Classes of Colors</b>
            </h4>
        </div> 
    <Row>
        <Col xl={12} xxl={12}>
            <div><div className="bg-black text-white pad5p">.text-white</div></div>
            <div className="mtop5p"><div className="bg-black text-light pad5p"><b>.text-light</b></div></div>
            <div className="mtop5p"><div className="bg-black text-white-50 pad5p"><b>.text-white-50</b></div></div>
            <div className="mtop5p"><div className="text-black pad5p"><b>.text-black</b></div></div>
            <div className="mtop5p"><div className="text-dark pad5p"><b>.text-dark</b></div></div>
            <div className="mtop5p"><div className="text-black-50 pad5p"><b>.text-black-50</b></div></div>       
            <div className="mtop5p"><div className="text-muted pad5p"><b>.text-muted</b></div></div>
            <div className="mtop5p"><div className="text-primary pad5p"><b>.text-primary</b></div></div>
            <div className="mtop5p"><div className="text-secondary pad5p"><b>.text-secondary</b></div></div>
            <div className="mtop5p"><div className="text-success pad5p"><b>.text-success</b></div></div>
            <div className="mtop5p"><div className="text-danger pad5p"><b>.text-danger</b></div></div>
            <div className="mtop5p"><div className="text-warning pad5p"><b>.text-warning</b></div></div>
            <div className="mtop5p"><div className="text-info pad5p"><b>.text-info</b></div></div>
            <div className="mtop5p"><div className="text-purple pad5p"><b>.text-purple</b></div></div>
            <div className="mtop5p"><div className="text-orange pad5p"><b>.text-orange</b></div></div>
            <div className="mtop5p"><div className="text-pink pad5p"><b>.text-pink</b></div></div>
            <div className="mtop5p"><div className="text-magenta pad5p"><b>.text-magenta</b></div></div>
            <div className="mtop5p"><div className="text-brown pad5p"><b>.text-brown</b></div></div>
        </Col>
    </Row>
    </div>
 </Card>
 </>);
};

export default ColorUtility;