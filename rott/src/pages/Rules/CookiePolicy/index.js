import React from "react";
import { Breadcrumb, Colors, ContainerFluid, Row, Col } from 'e-ui-react';
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Footer from '@Templates/Footer/index.js';

const CookiePolicy = () =>{
 return (<div>
    <Header menulinks={HeaderMenu} />
    <div>
        <Breadcrumb backgroundColor={Colors.light} 
                    data={[{ label: 'Our Platform', url:'#' },
                        { label:'Regulatory & Trust Center', url:'#' },
                        { label:'Cookies Policy', url:'#' }
                    ]} />
    </div>
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div><h2><b>Cookies Policy</b></h2></div>
            </Col>
        </Row>
    </ContainerFluid>
    <Footer />
 </div>);
};

export default CookiePolicy;