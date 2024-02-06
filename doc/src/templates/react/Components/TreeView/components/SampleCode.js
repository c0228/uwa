import React, { useState } from "react";
import { ContainerFluid, Row, Col, TreeView } from 'e-ui-react';

const data = [
  {
    id:'folder1',
    name: 'Folder 1',
    type: 'folder',
    open: true,
    children: [
      {
        id:'subfolder1',
        name: 'Subfolder 1',
        type: 'folder',
        open: false,
        children: [
          { id:'file1', name: 'index.php', type: 'file' },
          { id:'file2', name: 'File 2', type: 'file' },
        ],
      },
      { id:'file3', name: 'File 3', type: 'file' },
    ],
  },
  {
    id:'folder2',
    name: 'Folder 2',
    type: 'folder',
    open: false,
    children: [
      { id:'file4', name: 'File 4', type: 'file' },
      { id:'file5', name: 'File 5', type: 'file' },
    ],
  },
  { id:'file6', name: 'File 6', type: 'file' },
];

export const SampleNote1 = () =>{
 return (<>
  <TreeView data={data} />
 </>);
};

export const SampleNote2 = () =>{
  return (<>
   <TreeView data={data} checked={true} />
  </>);
 };

 export const SampleNote3 = () =>{
  return (<>
   <TreeView data={data} settings={{ ".php": "red", "default":"blue", "folder":"#fd7e14" }} />
  </>);
 };

 export const SampleNote4 = () =>{

  const data = [
    {
      id:'folder1',
      name: 'Folder 1',
      type: 'folder',
      open: true,
      children: [
        {
          id:'subfolder1',
          name: 'Subfolder 1',
          type: 'folder',
          open: false,
          children: [
            { id:'file1', name: 'index.php', type: 'file' },
            { id:'file2', name: 'File 2', type: 'file' },
          ],
        },
        { id:'file3', name: 'File 3', type: 'file' },
      ],
    },
    {
      id:'folder2',
      name: 'Folder 2',
      type: 'folder',
      open: false,
      children: [
        { id:'file4', name: 'File 4', type: 'file' },
        { id:'file5', name: 'File 5', type: 'file' },
      ],
    },
    { id:'file6', name: 'File 6', type: 'file' },
  ];

  return (<>
  <ContainerFluid>
    <Row>
      <Col xl={3}>
        <TreeView id="CodeStructure" data={data} settings={{ ".php": "red", "default":"blue", "folder":"#fd7e14" }} 
        defaultFileSelect="file6" />
      </Col>
      <Col xl={9}>
        <div id="treeViewerComponent-CodeStructure" className="treeViewerComponent">
          <div id="treeViewerComponent-file1">File#1 Info</div>
          <div id="treeViewerComponent-file2">File#2 Info</div>
          <div id="treeViewerComponent-file3">File#3 Info</div>
          <div id="treeViewerComponent-file4">File#4 Info</div>
          <div id="treeViewerComponent-file5">File#5 Info</div>
          <div id="treeViewerComponent-file6">File#6 Info</div>
        </div>
      </Col>
    </Row>
  </ContainerFluid>
  </>);
 };

const SampleCode = () =>{
  return (<>
   </>);
 };

export default SampleCode;