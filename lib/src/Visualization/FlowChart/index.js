import React from 'react';
import ReactFlow from 'react-flow-renderer';
import './index.css';

const defaultNodes = [
 {
  id: 'A',
  type: 'group',
  data: { label: null },
  position: { x: 0, y: 0 },
  style: {
   width: 170,
   height: 140,
  },
 },
 {
  id: 'B',
  type: 'input',
  data: { label: 'child node 1' },
  position: { x: 10, y: 10 },
  parentNode: 'A',
  extent: 'parent',
 },
 {
  id: 'C',
  data: { label: 'child node 2' },
  position: { x: 10, y: 90 },
  parentNode: 'A',
  extent: 'parent',
 },
];

const defaultEdges = [
 {
  id: 'eB-C',
  type: 'straight',
  source: 'B',
  target: 'C',
  animated: true,
  label: 'edge label',
 },
];

export const FlowChart = () => {
 return (
  <>
   hello
   <ReactFlow
    defaultNodes={defaultNodes}
    defaultEdges={defaultEdges}
    fitView
    style={{
     width: '100%',
     height: '500px',
     backgroundColor: '#ccc',
    }}
   />
  </>
 );
};
