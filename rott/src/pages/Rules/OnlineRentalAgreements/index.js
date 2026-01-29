import React from "react";
import { Breadcrumb, Colors, ContainerFluid, Row, Col, Icon, Menu, Card } from 'e-ui-react';
import { Table } from '@Templates/Table/index.js';
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Footer from '@Templates/Footer/index.js';
import BasicRules from './components/Basics/index.js';
import StatewiseStampDuty from './components/StatewiseStampDuty/index.js';
import OnlinevsOffline from './components/OnlineVsOffline/index.js';

const OnlineRentalAgreements = () =>{
 return (<div>
    <Header menulinks={HeaderMenu} />
    <div>
        <Breadcrumb backgroundColor={Colors.light} 
                data={[{ label: 'Our Platform', url:'#' },
                    { label:'Regulatory & Trust Center', url:'#' },
                    { label:'Online Rental Agreement Stamp Duty & Registration Rules (State-wise)', url:'#' }
                ]} />
    </div>
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div><h2><b>Online Rental Agreement Stamp Duty & Registration Rules (State-wise)</b></h2><hr/></div>
            </Col>
        </Row>
        <div className="mtop15p">
            <Menu type="pill" layout="vertical" 
                        layoutStyle={{ 
                                    menu:{ sm:'3', md:'3', lg:'3', xl:'3', xxl:'3' },
                                    content:{ sm:'9', md:'9', lg:'9', xl:'9', xxl:'9' } 
                                    }}
                        list={[{ id:"basic", label:"Basic Rules", component:(<BasicRules />) },
                                { id:"menu1", label:"State-wise Stamp Duty & Registration Rules (India)", component:(<StatewiseStampDuty />) },
                                { id:"menu2", label:"Online vs Offline Rental Agreements Comparision", component:(<OnlinevsOffline />) }]}
                        />
        </div>
    </ContainerFluid>
    <Footer />
 </div>);
};

export default OnlineRentalAgreements;