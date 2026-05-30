import React from "react";
import { ContainerFluid, Row, Col, Accordian } from "e-ui-react";
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import GradleSetup from "./components/GradleSetup/index.js";
import AndroidStudio from "./components/AndroidStudio/index.js";

export const InstallationAndSetup = () =>{
 return (<div>
    <DocumentHeader title="Installation & Setup" componentAttributesTable={{}} />
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div className="mtop15p">
                    <Accordian id="AccordianExample" 
                        defaultOpen="Item#2"
                        data={[{ 
                            id:"Item#1", 
                            title: (<h5 className="bs-header"><b>Gradle Setup on Windows</b></h5>), 
                            component: <GradleSetup />  },
                            { 
                            id:"Item#2", 
                            title: (<h5 className="bs-header"><b>Android Studio on Windows</b></h5>), 
                            component: <AndroidStudio />  }]} />
                </div>
            </Col>
        </Row>
    </ContainerFluid>
 </div>);
};