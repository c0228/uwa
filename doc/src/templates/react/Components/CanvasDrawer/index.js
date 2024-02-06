import React from "react";
import { CanvasDrawer, ContainerFluid, Row, Col } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

export const CanvasDrawerPage = ()=>{
 return (<>
 <DocumentHeader title="CanvasDrawer" componentAttributesTable={ComponentAttributesTable} />
 <ContainerFluid>
  <Row>
    <Col><CanvasDrawer /></Col>
  </Row>
 </ContainerFluid>
 </>);
};