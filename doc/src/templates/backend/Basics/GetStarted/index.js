import React from "react";
import { SimpleHeader, ContainerFluid, Row, Col } from "e-ui-react";
import ProjectStructure from './components/project-structure/index.js';
import SendMail from './components/send-mail/index.js';
import ComposerSetup from './components/composer-setup/index.js';

export const GetStartedPage = ()=>{
 return (<>
    <SimpleHeader title="Get Started (With Backend Integration)" />
    <ContainerFluid className="mtop15p">
        <Row>
            <Col xl={3} xxl={2}>
                <div className="padLeft15p">
                    <ProjectStructure />
                </div>
            </Col>
            <Col xl={9} xxl={2}>
                 <div className="padRight15p">
                    <SendMail />
                    <ComposerSetup />
                 </div>
                
            </Col>
        </Row>
    </ContainerFluid>
 </>);
};