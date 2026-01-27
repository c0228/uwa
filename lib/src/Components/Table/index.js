import React, { useState, useEffect } from 'react';
import {
 Icon,
 ReactJSXToOutputViewer,
 ReactJSXToHtmlStringConverter,
 HtmlStringToReactJSXConverter,
 SortJSONArray,
} from 'e-ui-react';
import './index.css';

export const Table = ({ title, height, columnDesc, data, dataSettings }) => {
 const isDataSequence =
  dataSettings === undefined ||
  dataSettings?.dataSequence === undefined ||
  dataSettings?.dataSequence === true;

 let colDesc = [...columnDesc];
 if (isDataSequence) {
  colDesc?.unshift({ columnName: '#', id: '#', sortBy: 'asc' });
 }

 const [tableData, setTableData] = useState([]);
 const [tableDataSearch, setTableDataSearch] = useState([]);
 const [sortColumns, setSortColumns] = useState(colDesc?.[0]);
 const [searchedText, setSearchedText] = useState('');
 const [searchInputs, setSearchInputs] = useState({});

 useEffect(() => {
  console.log('Table data', data);
  const tData = isDataSequence
   ? data?.map((d, i) => ({ '#': i + 1, ...d }))
   : data;
  setTableData(tData);
  console.log('onData Update');
  setTableDataSearch(tData);
 }, [data]);

 useEffect(() => {
  console.log('tableDataSearch', tableDataSearch);
 }, [tableData, tableDataSearch]);

 useEffect(() => {
  console.log('sortColumns', sortColumns);
 }, [sortColumns]);

 const updateColumnSorting = (column) => {
  if (sortColumns.sortBy === 'asc') {
   column.sortBy = 'desc';
  } else if (sortColumns.sortBy === 'desc') {
   column.sortBy = 'asc';
  } else {
   column.sortBy = 'asc';
  }
  const updatedSortColumns = { ...sortColumns, ...column };
  setSortColumns(updatedSortColumns);
  // setSearchInputs({ ...searchInputs, [column.id]: '' });
  const sortedData = SortJSONArray(
   tableDataSearch,
   updatedSortColumns?.id,
   updatedSortColumns?.sortBy
  );
  console.log('onUpdateColumnSorting');
  setTableDataSearch(sortedData);
 };

 const SearchData = (searchInputs, searchedText) => {
  let filteredData = tableData;

  Object.entries(searchInputs).forEach(([column, searchValue]) => {
   if (searchValue && searchValue.length > 0) {
    filteredData = filteredData.filter((el) => {
     let columnData = ReactJSXToOutputViewer(el[column]);
     return columnData
      ?.toString()
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    });
   }
  });

  if (searchedText && searchedText.length > 0) {
   filteredData = filteredData.filter((el) => {
    return Object.values(el).some((value) => {
     let columnData = ReactJSXToOutputViewer(value);
     return columnData
      ?.toString()
      .toLowerCase()
      .includes(searchedText.toLowerCase());
    });
   });
  }
  console.log('filteredData', filteredData);
  return filteredData;
 };

 useEffect(() => {
  if (Object.keys(searchInputs)?.length > 0 || searchedText?.length > 0) {
   const searchedData = SearchData(searchInputs, searchedText);
   console.log('onSearchedData');
   setTableDataSearch(searchedData);
  }
 }, [searchInputs, searchedText]);

 return (
  <>
   <div className="row mbot10p">
    <div className="col-md-8" style={{ display: 'flex', alignItems: 'center' }}>
     {title && (
      <label style={{ fontSize: '14px', fontWeight: '400' }}>{title}</label>
     )}
    </div>
    {dataSettings?.required?.search === true && (
     <>
      <div align="right" className="col-md-1">
       <label className="table-search-label">
        <b>Search:</b>
       </label>
      </div>
      <div className="col-md-3 table-search-textBox">
       <input
        type="text"
        className="form-control"
        placeholder="Enter your Search"
        onChange={(e) => {
         const searchValue = e.target.value;
         setSearchedText(searchValue);
        }}
       />
      </div>
     </>
    )}
   </div>
   <div className="row">
    <div className="col-md-12">
     <div
      className="table-responsive scroll"
      style={{ height: height, overflowX: 'auto' }}
     >
      <table
       className="table table-striped table-hover"
       style={{ marginBottom: '0px', backgroundColor: '#fff' }}
      >
       <thead>
        <tr align="center">
         {colDesc?.map((col, index) => (
          <th
           key={index}
           align={col?.titleAlign}
           style={{ position: 'relative', padding: '10px' }}
           onClick={() => updateColumnSorting(col)}
          >
           <div style={{ width: col.width ? col.width : 'auto' }}>
            <span>{col.columnName}</span>
            <span className="float-end">
             {sortColumns.id === col.id && (
              <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>
               <Icon
                type="FontAwesome"
                name={'fa-sort-amount-' + sortColumns.sortBy}
               />
              </span>
             )}
            </span>
           </div>
          </th>
         ))}
        </tr>
       </thead>
       <tbody>
        <tr align="center">
         {colDesc?.map((col, index) => (
          <th
           key={index}
           align={col?.titleAlign}
           style={{ position: 'relative', padding: '10px' }}
          >
           {index > 0 && (
            <input
             type="text"
             className="form-control"
             placeholder="Search..."
             value={searchInputs[col.id] || ''}
             onChange={(e) => {
              const { value } = e.target;
              setSearchInputs({ ...searchInputs, [col.id]: value });
             }}
            />
           )}
          </th>
         ))}
        </tr>
        {tableDataSearch?.map((d, i) => (
         <tr align="center" key={i}>
          {colDesc?.map((col, index) => {
           const cellContent = d[col.id];
           let highlightedContent = cellContent;
           console.log('highlightedContent', highlightedContent);
           console.log('searchedText', searchedText);
           if (searchedText && searchedText.length > 0) {
            const searchIndex = cellContent
             .toLowerCase()
             .indexOf(searchedText.toLowerCase());
            if (searchIndex !== -1) {
             const beforeText = cellContent.substring(0, searchIndex);
             const highlightedText = cellContent.substring(
              searchIndex,
              searchIndex + searchedText.length
             );
             const afterText = cellContent.substring(
              searchIndex + searchedText.length
             );

             highlightedContent = (
              <div>
               {beforeText}
               <span style={{ backgroundColor: 'yellow' }}>
                {highlightedText}
               </span>
               {afterText}
              </div>
             );
            }
           }
           const highlighedContentOutput =
            ReactJSXToOutputViewer(highlightedContent);
           const searchInput = searchInputs[col.id];
           if (searchInput && searchInput.length > 0) {
            const searchIndex = highlighedContentOutput
             ?.toLowerCase()
             .indexOf(searchInput.toLowerCase());
            if (searchIndex !== -1) {
             const beforeText = highlighedContentOutput?.substring(
              0,
              searchIndex
             );
             const highlightedText = highlighedContentOutput?.substring(
              searchIndex,
              searchIndex + searchInput.length
             );
             const afterText = highlighedContentOutput?.substring(
              searchIndex + searchInput.length
             );

             highlightedContent = (
              <div>
               {beforeText}
               <span style={{ backgroundColor: 'yellow' }}>
                {highlightedText}
               </span>
               {afterText}
              </div>
             );
            }
           }

           return (
            <td key={index} align={col?.dataAlign}>
             {highlightedContent}
            </td>
           );
          })}
         </tr>
        ))}
       </tbody>
      </table>
      {tableDataSearch?.length === 0 && (
       <div
        align="center"
        style={{
         border: '1px solid #ccc',
         padding: '8px',
         backgroundColor: '#f2f2f2',
        }}
       >
        No Data found
       </div>
      )}
     </div>
    </div>
   </div>
  </>
 );
};
