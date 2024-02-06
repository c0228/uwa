import React from "react";
import { Card, Row, Col } from "e-ui-react";

const BgColorUtility = ()=>{
 return (<>
 <Card>
    <div style={{ padding:'15px' }}>
        <div>
            <h4 className="bs-header" style={{ borderBottom:'1px solid #ccc', paddingBottom:'6px', marginBottom:'5px' }}>
                <b>Classes of Background Colors</b>
            </h4>
        </div>
        <Row>
            <Col xl={5} xxl={5}>
                <div align="center" className="mtop5p mbot10p">
                    <h5 className="bs-header"><b>Normal</b></h5>
                </div>
                <div style={{ fontSize:'12px' }}>
                    <div><div className="bg-black text-white pad5p">.bg-black</div></div>
                    <div className="mtop5p"><div className="bg-dark text-white pad5p">.bg-dark</div></div>
                    <div className="mtop5p"><div className="bg-white text-dark pad5p">.bg-white</div></div>
                    <div className="mtop5p"><div className="bg-warning text-dark pad5p">.bg-warning</div></div>
                    <div className="mtop5p"><div className="bg-light text-dark pad5p">.bg-light</div></div>
                    <div className="mtop5p"><div className="bg-primary text-white pad5p">.bg-primary</div></div>
                    <div className="mtop5p"><div className="bg-secondary text-white pad5p">.bg-secondary</div></div>
                    <div className="mtop5p"><div className="bg-info text-dark pad5p">.bg-info</div></div> 
                    <div className="mtop5p"><div className="bg-success text-white pad5p">.bg-success</div></div>
                    <div className="mtop5p"><div className="bg-danger text-white pad5p">.bg-danger</div></div>
                    <div className="mtop5p"><div className="bg-purple text-white pad5p">.bg-purple</div></div>
                    <div className="mtop5p"><div className="bg-orange text-white pad5p">.bg-orange</div></div>
                    <div className="mtop5p"><div className="bg-pink text-white pad5p">.bg-pink</div></div>
                    <div className="mtop5p"><div className="bg-magenta text-white pad5p">.bg-magenta</div></div>
                    <div className="mtop5p"><div className="bg-brown text-white pad5p">.bg-brown</div></div>
                </div>
            </Col>
            <Col xl={7} xxl={7}>
                <div align="center" className="mtop5p mbot10p">
                    <h5 className="bs-header"><b>Gradient</b></h5>
                </div>
                <div style={{ fontSize:'12px' }}>
                    <div><div className="bg-black bg-gradient text-white pad5p">.bg-black .bg-gradient</div></div>
                    <div className="mtop5p"><div className="bg-dark bg-gradient text-white pad5p">.bg-dark .bg-gradient</div></div>
                    <div className="mtop5p"><div className="bg-white bg-gradient text-dark pad5p">.bg-white .bg-gradient</div></div>
                    <div className="mtop5p"><div className="bg-warning bg-gradient text-dark pad5p">.bg-warning .bg-gradient</div></div>
                    <div className="mtop5p"><div className="bg-light bg-gradient text-dark pad5p">.bg-light .bg-gradient</div></div>
                    <div className="mtop5p"><div className="bg-primary bg-gradient text-white pad5p">.bg-primary .bg-gradient</div></div>
                    <div className="mtop5p"><div className="bg-secondary bg-gradient text-white pad5p">.bg-secondary .bg-gradient</div></div>
                    <div className="mtop5p"><div className="bg-info bg-gradient text-dark pad5p">.bg-info .bg-gradient</div></div> 
                    <div className="mtop5p"><div className="bg-success bg-gradient text-white pad5p">.bg-success .bg-gradient</div></div>
                    <div className="mtop5p"><div className="bg-danger bg-gradient text-white pad5p">.bg-danger .bg-gradient</div></div>
                    <div className="mtop5p"><div className="bg-purple bg-gradient text-white pad5p">.bg-purple .bg-gradient</div></div>
                    <div className="mtop5p"><div className="bg-orange bg-gradient text-white pad5p">.bg-orange .bg-gradient</div></div>
                    <div className="mtop5p"><div className="bg-pink bg-gradient text-white pad5p">.bg-pink .bg-gradient</div></div>
                    <div className="mtop5p"><div className="bg-magenta bg-gradient text-white pad5p">.bg-magenta .bg-gradient</div></div>
                    <div className="mtop5p"><div className="bg-brown bg-gradient text-white pad5p">.bg-brown .bg-gradient</div></div>
                </div>
            </Col>
        </Row>
        </div>
    </Card>
 </>);
};

export default BgColorUtility;