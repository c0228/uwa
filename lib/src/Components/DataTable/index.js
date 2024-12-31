import React, { useEffect } from 'react';
import { UrlAsyncFetch } from 'e-ui-react';
import $ from 'jquery';
import jszip from 'jszip';
// import pdfmake from 'pdfmake';
import DataTable from 'datatables.net-bs5';
import Editor from 'datatables.net-editor-bs5';
import 'datatables.net-autofill-bs5';
import 'datatables.net-buttons-bs5';
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import 'datatables.net-buttons/js/buttons.print.mjs';
import 'datatables.net-colreorder-bs5';
import DateTime from 'datatables.net-datetime';
import 'datatables.net-fixedcolumns-bs5';
import 'datatables.net-fixedheader-bs5';
import 'datatables.net-keytable-bs5';
import 'datatables.net-responsive-bs5';
import 'datatables.net-rowgroup-bs5';
import 'datatables.net-rowreorder-bs5';
import 'datatables.net-scroller-bs5';
import 'datatables.net-searchbuilder-bs5';
import 'datatables.net-searchpanes-bs5';
import 'datatables.net-select-bs5';
import 'datatables.net-staterestore-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'; // Import the DataTables Bootstrap 5 CSS
import 'datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css'; // Import the DataTables Buttons Bootstrap 5 CSS
import './dataTables.css';
// import pdfMake from "pdfmake/build/pdfmake"; // Import pdfmake
// Import the 'Roboto-Regular.ttf' font file
// import RobotoRegular from './Roboto-Regular.ttf';

// Register the font with pdfmake
// pdfMake.vfs = pdfMake.vfs || {};
// pdfMake.vfs['Roboto-Regular.ttf'] = await fetch(RobotoRegular).then((res) => res.arrayBuffer());

export const DTable = () => {
 let data = [];
 /* const data = [
    { "Name": "John Doe", "Age": 30, "City": "New York" },
    { "Name": "Alice Smith", "Age": 25, "City": "Los Angeles" },
    { "Name": "Bob Johnson", "Age": 35, "City": "Chicago" }
]; */
 const Load = async () => {
  let dataTable = $('#example').DataTable({
   dom: 'Bfrtip',
   buttons: ['pdf'],
   fixedHeader: true,
   initComplete: () => {},
   columnDefs: [
    {
     title: 'Name', // Column header
     targets: 0, // Target the first column (use 0-based index)
     type: 'string',
    },
    {
     title: 'Age',
     targets: 1, // Target the second column
     type: 'num',
    },
    {
     title: 'Location',
     targets: 2, // Target the third column
     type: 'string',
    },
    // Add more columnDefs as needed for additional columns
   ],
   // Optional: Enable searching for specific columns
   searching: true,
   language: {
    searchPlaceholder: 'Enter your Search', // Add a placeholder
   },
   data: data,
   columns: [{ data: 'Name' }, { data: 'Age' }, { data: 'City' }],
   bFilter: true, // Enable column filtering
  });
  /*
    // Add custom filters for specific columns below column headers
    dataTable.columns().every(function () {
      const column = this;
      const header = $(column.header()); // Get the column header element
  
      if (column.index() === 0) {
        // Add text filter to the first column
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Filter Name");
        input.setAttribute("class", "form-control");
        $(input).appendTo(header);
  
        $(input).on("keyup change", function () {
          column.search($(this).val()).draw();
        });
      } else if (column.index() === 1) {
        // Add range filter to the second column
        const input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("placeholder", "Min Age");
        input.setAttribute("class", "form-control");
        $(input).appendTo(header);
  
        const input2 = document.createElement("input");
        input2.setAttribute("type", "number");
        input2.setAttribute("placeholder", "Max Age");
        input2.setAttribute("class", "form-control");
        $(input2).appendTo(header);
  
        $(input).on("keyup change", function () {
          column
            .search(this.value + "-" + input2.value)
            .draw();
        });
  
        $(input2).on("keyup change", function () {
          column
            .search(input.value + "-" + this.value)
            .draw();
        });
      } else if (column.index() === 2) {
        // Add select filter to the third column
        const select = document.createElement("select");
        select.setAttribute("style", "width: 100%");
        select.setAttribute("class", "form-control");
        $(select).appendTo(header);
  
        column.data().unique().sort().each(function (d, j) {
          $(select).append('<option value="' + d + '">' + d + "</option>");
        });
  
        $(select).on("change", function () {
          const val = $.fn.dataTable.util.escapeRegex($(this).val());
          column.search(val ? "^" + val + "$" : "", true, false).draw();
        });
      }
    });
    */
  const responseData = await UrlAsyncFetch(
   'http://localhost/sample.php',
   'GET',
   {}
  );
  dataTable.rows.add(responseData.data).draw();
 };

 useEffect(() => {
  Load();
  // Function to load data in chunks

  // Function to fetch all data from your data source (e.g., an API)
  /* function fetchData(limitStart) {
        var intervalId;
        $.ajax({
            url: 'http://localhost/sample.php',
            method: 'GET',
            data: { limitStart: limitStart },
            dataType: 'json',
            success: function(response) {
                // Store the data
                data = response;
                console.log(data);
                dataTable.rows.add(data.data).draw();
                if(data.total === data.current.end){ // clear interval
                    clearInterval( intervalId );
                } else {
                    intervalId = setInterval(()=>{
                        fetchData(data.end+1);
                    }, 1000);
                }
            },
            error: function(error) {
                console.error('Error loading data:', error);
            }
        });
    }

    // Call the fetchData function to initially fetch data
    fetchData(); */
 }, []);
 return (
  <div>
   <table id="example" style={{ width: '100%' }}>
    <tbody></tbody>
   </table>
  </div>
 );
};
