import React from "react";
import { ContainerFluid, Row, Col, Card, Highlight, Accordian } from "e-ui-react";
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import ImgSrc from "./assets/arch-standalone-and-lib.png";
import CreateStandaloneAndroidProject from "./components/01-create-standalone-and-proj/index.js";

export const StandaloneAndroidLibrary = () =>{
 return (<div>
    <DocumentHeader title="Standalone Android Library" componentAttributesTable={{}} />
    <div className="pad5p mtop15p">
        <ContainerFluid>
        <Row>
            <Col md={6}>
                <div>
                    <div><b>A Separate Android Project</b> whose main purpose is to produce a reusable library (.aar) instead of 
                    a final App (.apk). Later, you can integrate it in to any Android App as a dependency.</div>
                </div>
                <div><img src={ImgSrc} style={{ maxWidth:'410px' }} /></div>
            </Col>
            <Col md={6}>
                <Card padding={15} backgroundColor="#eee">
                    <div><b>Android App Project =</b> <code><b>.apk</b></code> [ <b>A</b>ndroid <b>P</b>ackage <b>K</b>it ]</div>
                    <div><b>Android Library Project =</b> <code><b>.aar</b></code> [ <b>A</b>ndroid <b>AR</b>chive ]</div>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <div className="mtop15p">
                    <Accordian id="StandaloneAndroidProjectInKotlin" 
                    defaultOpen="Item#1"
                    data={[{ 
                            id:"Item#1", 
                            title: (<h5  className="bs-header"><b>1. Create a Standalone Android Library (.aar) in VSCode</b></h5>),
                            component: <CreateStandaloneAndroidProject />  }]} />
                </div>
            </Col>    
        </Row>    
        </ContainerFluid>
    </div>
 </div>);
};