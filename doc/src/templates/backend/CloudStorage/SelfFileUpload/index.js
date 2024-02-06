import React from "react";
import { Highlight, ContainerFluid, Row, Col, Accordian, Menu } from 'e-ui-react';
import { SampleNote1, SampleNote2 } from './components/SampleCode.js';
import { default as SampleCodeJS } from '!!raw-loader!./components/SampleCode.js';
import { default as SampleCodePHP  } from '!!raw-loader!./components/SampleCode.php';
import imgSrc from './components/assets/arch-simpleFileUpload.png';
export const SelfFileUploadPage = ()=>{
 const AccordianItem1 = ()=>{
  const Architecture =()=>{
    return (<ContainerFluid>
        <Row>
            <Col xl={8} xxl={6}>
                <img src={imgSrc} style={{ width:'100%', height:'auto' }} />
                <div align="center"><b>Architecture</b></div>
            </Col>
        </Row>
    </ContainerFluid>);
  };

  const Frontend = ()=>{
    return (<ContainerFluid>
        <Row>
            <Col xl={9}>
             <Highlight content={SampleCodeJS.toString()} lang="js" lines={['1']}  />
             <div><b>Without Form:</b></div>
             <Highlight content={SampleCodeJS.toString()} lang="js" lines={['5T9']}  />
             <div><b>With Form:</b></div>
             <Highlight content={SampleCodeJS.toString()} lang="js" lines={['15T21']}  />
            </Col>
        </Row>
    </ContainerFluid>);
  };

  const Backend =()=>{
    return (<ContainerFluid>
        <Row>
            <Col xl={8}>
                <Highlight content={SampleCodePHP.toString()} lang="php" lines={['1T3','5T23']}  />
                <div align="center"><b>controller.module.fileuploader.php</b></div>
            </Col>
            <Col xl={4}>
                <b>Input Parameters passed to the API Service:</b>
                <ol>
                    <li><code><b>TARGET_DIRECTORY</b></code></li>
                    <li><code><b>TARGET_FILES_COUNT</b></code></li>
                    <li><code><b>TARGET_FILES_&lt;INDEX&gt;</b></code></li>
                </ol>
            </Col>
        </Row>
    </ContainerFluid>);
  };
  return (
        <Menu type="pill" 
            layout="vertical" 
            layoutStyle={{ 
                  menu:{ sm:'3', md:'3', lg:'3', xl:'2', xxl:'1' },
                  content:{ sm:'9', md:'9', lg:'9', xl:'10', xxl:'9' } 
                }}
            list={[{ id:"home", label:"Architecture", component: <Architecture /> },
                { id:"menu1", label:"Frontend", component:(<Frontend />) },
                { id:"menu2", label:"Backend", component: <Backend /> }]} />);
 };
 return (<>
 <Accordian id="SelfFileUpload" 
    data={[{ id:"Item#1", title: (<>
                    <div><b>1. Upload Single / Multiple Files to the Directory</b></div>
                    <div>( Parameters <code>TARGET_DIRECTORY</code>, <code>TARGET_FILE</code> are passed from Frontend )</div>
                    </>), component: <AccordianItem1 />  },
        { id:"Item#2", title: (<>
            <div><b>2. Upload Single / Multiple Files to the Directory</b></div>
            <div>( Parameters <code>TARGET_DIRECTORY</code>, <code>TARGET_FILE</code> are passed from the Database Table <code>config_static_info</code> )</div>
            </>), component:"This is the Second item's accordion body"  }]} 
  />
 </>);
};