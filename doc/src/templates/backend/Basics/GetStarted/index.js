import React from "react";
import { SimpleHeader, ContainerFluid, Row, Col, Card, TreeView } from "e-ui-react";

const data = [
    {
        id:'app-data',
        name: 'app-data',
        type: 'folder',
        open: true,
        children: [
              { id:'appdata1', name: '...', type: 'file' },
        ],
    },
    {
      id:'config',
      name: 'config',
      type: 'folder',
      open: true,
      children: [
            { id:'logConfig', name: 'log-config.xml', type: 'file' },
      ],
    },
    {
      id:'controllers',
      name: 'controllers',
      type: 'folder',
      open: true, 
      children: [{ id:'module1', name: 'module._________.php', type: 'file' },
      { id:'module2', name: 'module._________.php', type: 'file' },
      { id:'module3', name: 'module._________.php', type: 'file' },
      { id:'module4', name: '...', type: 'file' }]
    },
    {
        id:'core',
        name: 'core',
        type: 'folder',
        open: true, 
        children: [{ id:'database', name: 'app.database.php', type: 'file' },
        { id:'initiator', name: 'app.initiator.php', type: 'file' },
        { id:'session', name: 'app.session.php', type: 'file' }]
    },
    {
        id:'docs',
        name: 'docs',
        type: 'folder',
        open: true, 
        children: [{ id:'...', name: '...', type: 'file' }]
    },
    {
        id:'repo',
        name: 'repo',
        type: 'folder',
        open: true, 
        children: [{ id:'dataModule1', name: 'data.module._________.php', type: 'file' },
        { id:'dataModule2', name: 'data.module._________.php', type: 'file' },
        { id:'dataModule3', name: 'data.module._________.php', type: 'file' },
        { id:'dataModule4', name: '...', type: 'file' }]
    },
    {
        id:'utils',
        name: 'utils',
        type: 'folder',
        open: true, 
        children: [{ id:'util1', name: 'util._________.php', type: 'file' }]
    },
    {
        id:'vendor',
        name: 'vendor',
        type: 'folder',
        open: true, 
        children: [{ id:'...', name: '...', type: 'file' },]
    },
    { id:'htaccess', name: '.htaccess', type: 'file' },
    { id:'composer', name: 'composer.json', type: 'file' },
    { id:'composerLock', name: 'composer.lock', type: 'file' },
    { id:'README.md', name: 'README.md', type: 'file' },
    { id:'swagger.bat', name: 'swagger.bat', type: 'file' },
];

export const GetStartedPage = ()=>{
 return (<>
    <SimpleHeader title="Get Started (With Backend Integration)" />
    <ContainerFluid className="mtop15p">
        <Row>
            <Col xl={3} xxl={2}>
                <Card padding={15} style={{ backgroundColor:'#eee' }}>
                    <TreeView data={data} settings={{ ".php": "red", "default":"blue", "folder":"#fd7e14" }} />
                </Card>
            </Col>
        </Row>
    </ContainerFluid>
 </>);
};