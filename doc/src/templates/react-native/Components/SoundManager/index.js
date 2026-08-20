import React from "react";
import { ContainerFluid, Row, Col, Card, Highlight, Tab } from "e-ui-react";
import { DocumentHeader } from "@DocUtils/DocHeaders.js";

export const RNSoundManager = () =>{
 return (<div>
    <DocumentHeader title="React Native Sound Manager" componentAttributesTable={{}} />
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <Card padding={15}>
                    <div className="mtop15p">Use this for background music. It will continue playing without interruption, 
                    even when navigating from one screen to another.</div>
                </Card>
            </Col>
        </Row>
    </ContainerFluid>
 </div>);
};
