import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import './index.css';

const Footer = () =>{
 return (<div className="kyt-footer">
    <ContainerFluid>
        <Row>
            <Col md={4}>
                <div>
                    <a href="privacy-policy">Privacy Policy</a> | 
                    <span className="padLeft5p"><a href="cookie-policy">Cookie Policy</a></span> | 
                    <span className="padLeft5p"><a href="terms-of-use">Terms of Use</a></span> 
                </div>
            </Col>
            <Col md={4}><div align="center"><u>{process.env.APP_NAME}</u> - All Rights Reserved | 2026</div></Col>
            <Col md={4}><div align="right"></div></Col>
        </Row>
    </ContainerFluid>
   
 </div>);
};

export default Footer;