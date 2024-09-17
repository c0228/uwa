import React, { useState, useEffect, useMemo } from 'react';
import { Row, Col, TextBox } from "e-ui-react";
import axios from 'axios';

// Helper function to highlight search term in text
export const searchTableTerm = (text, searchTerm) => {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = String(text).split(regex);

  return parts?.map((part, index) =>
    part?.toLowerCase() === searchTerm?.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: 'yellow' }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

export const TablePagination = ({ header, apiUrl, pageSize = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(()=>{
    console.log("data: ", data);
  },[data]);
  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      console.log("pageSize: ", pageSize);
      console.log("totalPages: ", totalPages);
      console.log("start: ", start);
      console.log("end: ", end);
      try {
        const response = await axios.get(
          `${apiUrl}?start=${start}&end=${end}&search=${searchTerm}`
        );
        setData(response.data.data);
        setTotalCount(response.data.totalCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl, currentPage, pageSize, searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(totalCount / pageSize);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
        <Row>
            <Col md={9}></Col>
            <Col md={3}>
                {/* Search input */}
                <div className="mbot15p">
                <TextBox name="search" placeholder="Enter your Search" onChange={(result) => {
                    setSearchTerm(result?.value);
                    setCurrentPage(1); // Reset to first page on search
                 }} />
                </div>
            </Col>
        </Row>
      

      {/* Table */}
      <div className="table-responsive">
        <table className="table" style={{ width: '100%' }}>
        <thead>
          <tr align="center" style={{ backgroundColor: (header?.backgroundColor?.length>0)?(header?.backgroundColor):'#eee',
            color: (header?.color?.length>0)?(header?.color):'#eee'
           }}>
            {header?.columns?.map((column, index) => (
              <td align={(column?.align)?column?.align:'center'} key={index}><b>{column?.header}</b></td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {header?.columns?.map((column, colIndex) => (
                <td align={(column?.align)?column?.align:'center'} key={colIndex} style={{ width: column?.width }}>
                  {/* Custom column render */}
                  {column?.render
                    ? column?.render(row, searchTerm, (((currentPage-1)*pageSize) + rowIndex), currentPage, pageSize)
                    : searchTableTerm(row?.[column.key], searchTerm)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {/* Pagination */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};
