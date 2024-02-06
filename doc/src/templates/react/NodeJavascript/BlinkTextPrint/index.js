import React from "react";
import { SimpleHeader, ContainerFluid, Row, Col, Highlight, Card } from "e-ui-react";
import SampleCode from './components/SampleCode.js';
import { default as SampleCodeJS  } from '!!raw-loader!./components/SampleCode.js';
import { default as IndexCSS  } from '!!raw-loader!./components/styles.css';

export const BlinkTextPrintPage = ()=>{
 return(<>
    <SimpleHeader title="Print Text with Blink" />
    <ContainerFluid className="mtop15p">
        <Row>
            <Col xxl={6} xl={6}>
                <Highlight style={{ height:'534px' }} content={SampleCodeJS.toString()} lang="javascript" lines={['0T28']}  />
                <div align="center"><b>index.js</b></div>
            </Col>
            <Col xxl={6} xl={6}>
                <Highlight style={{ height:'150px' }} content={IndexCSS.toString()} lang="css"  />
                <div align="center"><b>styles.js</b></div>
                <div className="mtop15p">
                    <Highlight style={{ height:'50px' }} content={SampleCodeJS.toString()} lang="javascript" 
                    lines={['31']}  />
                </div>
                <Card padding={15}>
                    <div className="mbot10p"><b>Output:</b></div>
                    <SampleCode />
                </Card>
            </Col>
        </Row>
    </ContainerFluid>
 </>);
};