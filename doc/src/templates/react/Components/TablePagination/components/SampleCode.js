import React from "react";
import { TablePagination, searchTableTerm } from 'e-ui-react';

export const SampleNote1 = () =>{
  const columns = [{
    header: 'S.No.',
    align:'center',
    key: 'id',
    width:'4%',
    render: (_row, _searchTerm, rowIndex) => (<strong>{rowIndex+1}</strong>)
  },
  {
    header: 'Column 1 Title',
    key: 'headerColumn1',
    width:'32%',
    render: (row, searchTerm) =>(<strong>{searchTableTerm(row?.Column1, searchTerm)}</strong>)
  },
  { 
    header: 'Column 2 Title', 
    key: 'headerColumn2', 
    width:'40%',
    render: (row, searchTerm) =>(<strong>{searchTableTerm(row?.Column2, searchTerm)}</strong>)
  },
  { 
    header: 'Column 3 Title', 
    key: 'headerColumn3', 
    width:'40%',
    render: (row, searchTerm) =>(<strong>{row?.Column3+' (Non-Searchable)'}</strong>)
  },
];

 return (<>
  <TablePagination mode="scrollable" header={{ backgroundColor:'blue', color:'#fff', columns: columns }} pageSize={5} apiUrl="http://localhost:8080/assets/apis/table.json" />
  </>);
};

export const SampleNote2 = () =>{
  const columns = [{
    header: 'S.No.',
    align:'center',
    key: 'id',
    width:'4%',
    render: (_row, _searchTerm, rowIndex) => (<strong>{rowIndex+1}</strong>)
  },
  {
    header: 'Column 1 Title',
    key: 'headerColumn1',
    width:'32%',
    render: (row, searchTerm) =>(<strong>{searchTableTerm(row?.Column1, searchTerm)}</strong>)
  },
  { 
    header: 'Column 2 Title', 
    key: 'headerColumn2', 
    width:'40%',
    render: (row, searchTerm) =>(<strong>{searchTableTerm(row?.Column2, searchTerm)}</strong>)
  },
  { 
    header: 'Column 3 Title', 
    key: 'headerColumn3', 
    width:'40%',
    render: (row, searchTerm) =>(<strong>{row?.Column3+' (Non-Searchable)'}</strong>)
  },
];

 return (<>
  <TablePagination header={{ backgroundColor:'blue', color:'#fff', columns: columns }} pageSize={10} apiUrl="http://localhost:8080/assets/apis/table.json" />
  </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;