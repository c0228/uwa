import React from "react";
import { Highlight, ContainerFluid, Row, Col } from 'e-ui-react';
import { default as SampleCodePHP  } from '!!raw-loader!./components/SampleCode.php';

export const SelfFileManagerPage = ()=>{
 return (<>
 <ContainerFluid>
    <Row>
        <Col xl={12}><b>Upload Single / Multiple Files to the Directory</b></Col>
    </Row>
    <Row>
        <Col xl={8}>
            <Highlight content={SampleCodePHP.toString()} lang="javascript" lines={['2T4']}  />
            <div align="center"><b>controller.module.fileuploader.php</b></div>
        </Col>
    </Row>
 </ContainerFluid>
 
  
 </>);
};