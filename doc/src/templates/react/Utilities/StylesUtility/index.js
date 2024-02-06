import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Card } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import OpacityUtility from "./components/opacity/index.js";
import BgColorUtility from "./components/bgColors/index.js";
import ColorUtility from "./components/textColors/index.js";
import PlaceholderGlow from "./components/placeholderGlow/index.js";

export const StylesUtilityPage = ()=>{
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);
      
 return (<>
   <DocumentHeader title="Styles Utility" />
  <div className="mtop15p">
  <ContainerFluid>
    <Row>
        <Col xl={3} xxl={3}>
            <OpacityUtility />
        </Col>
    </Row>
    <Row className="mtop15p">
        <Col xl={4} xxl={4}>
            <BgColorUtility />
        </Col>
        <Col xl={3} xxl={3}>
            <ColorUtility />
        </Col>
        <Col xl={5} xxl={5}>
            <PlaceholderGlow />
        </Col>
    </Row>
    </ContainerFluid>
    </div>
 </>);
};