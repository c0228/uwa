import React, { useState, useEffect } from 'react';
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

export const TablePagination = ({ header, apiUrl, pageSize = 10, mode = "pagination" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch data from API
  const fetchData = async () => {
    setLoading(true);
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    try {
      const response = await axios.get(
        `${apiUrl}?start=${start}&end=${end}&search=${searchTerm}`
      );
      setData(prevData => mode === "scrollable" ? [...prevData, ...response.data.data] : response.data.data);
      setTotalCount(response.data.totalCount);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiUrl, currentPage, searchTerm, mode]);

  // Pagination logic
  const totalPages = Math.ceil(totalCount / pageSize);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle scroll for scrollable mode
  useEffect(() => {
    if (mode === "scrollable") {
      const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
          if (!loading) {
            setCurrentPage(prevPage => prevPage + 1);
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [loading, mode]);

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
          <thead style={{ border:'1px solid #ccc' }}>
            <tr align="center" style={{
              backgroundColor: (header?.backgroundColor?.length > 0) ? (header?.backgroundColor) : '#eee',
              color: (header?.color?.length > 0) ? (header?.color) : '#eee'
            }}>
              {header?.columns?.map((column, index) => (
                <td align={(column?.align) ? column?.align : 'center'} key={index}><b>{column?.header}</b></td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {header?.columns?.map((column, colIndex) => (
                  <td align={(column?.align) ? column?.align : 'center'} key={colIndex} style={{ width: column?.width }}>
                    {/* Custom column render */}
                    {column?.render
                      ? column?.render(row, searchTerm, (((currentPage - 1) * pageSize) + rowIndex), currentPage, pageSize)
                      : searchTableTerm(row?.[column.key], searchTerm)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {mode === "pagination" && (
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
      )}
    </div>
  );
};
