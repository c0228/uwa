import React from 'react';
import './index.css';

export const Grid = ({ data }) =>{
 return (<div className="container-fluid grid-layout">
    {data?.map((row, index1)=>{
        return (<div key={index1} className="row">
            {row.map((column, index2)=>{
            return <div key={index2} className={(column?.sm!==undefined)?' col-sm-'+column?.sm:'12'+
                                   (column?.md!==undefined)?' col-md-'+column?.md:'12'+
                                   (column?.lg!==undefined)?' col-lg-'+column?.lg:'12'+
                                   (column?.xl!==undefined)?' col-xl-'+column?.xl:'12'+
                                   (column?.xxl!==undefined)?' col-xxl-'+column?.xxl:'12'
                                 }>{column.component}</div>
        })}</div>)
    })}
 </div>);
};