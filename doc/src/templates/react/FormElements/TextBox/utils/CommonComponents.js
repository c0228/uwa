import React from "react";

 export const Title = ({ label }) =>{
    return (<div className="mtop15p"><h4><b>{label}</b></h4></div>);
 };
 export const TblDisplay = ({ header, body }) =>{
    return (<div className="table-responsive">
        <table className="table">
            <thead><tr>{header?.map((d,i)=>(<th key={i}>{d}</th>))}</tr></thead>
            <tbody>
                {body?.map((d,i)=>{
                    return (<tr key={i}>
                        <td><code><b>{d?.key}</b></code></td>
                        <td>{d?.value}</td>
                    </tr>);
                 })}
            </tbody>
        </table>
    </div>);
 };