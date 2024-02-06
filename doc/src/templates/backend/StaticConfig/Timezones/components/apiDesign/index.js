import React from 'react';
import { Highlight, Row, Col, FilledHeader } from "e-ui-react";
import { default as Controller } from '!!raw-loader!@Nexus/src/controllers/config.static.apis.php';
import { default as Htaccess  } from '!!raw-loader!@Nexus/.htaccess';
import { ApiTemplate } from '@DocUtils/ApiTemplate.js';

const ApiDesign = () =>{
    
 return (
 <div style={{ padding: '15px' }}>
    <ApiTemplate data={{
        id: 'timezonesListApi',
        title:'Get List of Timezones',
        url:'timezones/list',
        method: 'GET',
        details: (<>
        <FilledHeader backgroundColor="#0d6efd" color="#fff" title={<b>API Design</b>} />
        <div className="mtop15p">
            <Row>
                <Col xl={6}>
                    <Highlight content={Controller} lang="php"  />
                    <div align="center"><b>controller.static.apis.php</b></div>
                </Col>
                <Col xl={6}>
                    <Highlight content={Htaccess} lang="php" />
                    <div align="center"><b>.htaccess</b></div>
                </Col>
            </Row>
        </div>
        </>)
    }}/>
 </div>);
};

export default ApiDesign;