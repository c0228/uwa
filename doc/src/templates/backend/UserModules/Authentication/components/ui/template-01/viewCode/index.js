import React from "react";
import { ContainerFluid, Row, Col, Card, TreeView , SimpleHeader } from "e-ui-react";
import CodeViewer from '../../../utils/CodeViewer/index.js';
import { ReadMe } from './components/ReadMe.js';
import { IndexJs } from './components/indexJs.js';
import { IndexCss } from './components/indexCss.js';
import { RegisterIndex } from './components/registerIndex.js';
import { LoginIndex } from './components/loginIndex.js';
import { ForgotPwdIndex } from './components/forgotPwdIndex.js';
import { ChangePwdIndex } from './components/changePwdIndex.js';

const ProjectStructure = ()=>{
 const data = [
        {
          id:'changePwd',
          name: 'changePwd',
          type: 'folder',
          open: false,
          children: [{ id:'changePwdIndex', name: 'index.js', type: 'file' }],
        },
        {
          id:'forgotPwd',
          name: 'forgotPwd',
          type: 'folder',
          open: false,
          children: [{ id:'forgotPwdIndex', name: 'index.js', type: 'file' }],
        },
        {
            id:'login',
            name: 'login',
            type: 'folder',
            open: false,
            children: [{ id:'loginIndex', name: 'index.js', type: 'file' }],
        },
        {
            id:'register',
            name: 'register',
            type: 'folder',
            open: false,
            children: [{ id:'registerIndex', name: 'index.js', type: 'file' }],
        },
        { id:'indexCss', name: 'index.css', type: 'file' },
        { id:'indexJs', name: 'index.js', type: 'file' },
        { id:'readMe', name: 'ReadMe.md', type: 'file' }
      ];
 return (<>
    <div style={{ borderBottom:'1px solid #ccc', paddingBottom:'10px', marginBottom:'10px'}}><b>Project Structure</b></div>
    <TreeView id="AuthCodeStructure" data={data} defaultFileSelect="readMe" />
 </>);
};

export const DisplayCode = ()=>{
 return (<>
  <CodeViewer>
    <ContainerFluid>
        <Row>
            <Col xl={2} xxl={2}>
                <Card padding={15}>
                    <ProjectStructure />
                </Card>
            </Col>
            <Col xl={10} xxl={10}>
                <Card padding={15}>
                <div id="treeViewerComponent-AuthCodeStructure" className="treeViewerComponent">
                <div id="treeViewerComponent-readMe"><ReadMe /></div>
                <div id="treeViewerComponent-indexJs"><IndexJs /></div>
          <div id="treeViewerComponent-indexCss"><IndexCss /></div>
          <div id="treeViewerComponent-registerIndex"><RegisterIndex /></div>
          <div id="treeViewerComponent-loginIndex"><LoginIndex /></div>
          <div id="treeViewerComponent-forgotPwdIndex"><ForgotPwdIndex /></div>
          <div id="treeViewerComponent-changePwdIndex"><ChangePwdIndex /></div>
        </div>
                </Card>
            </Col>
        </Row>
    </ContainerFluid>
  </CodeViewer>
 </>);
};