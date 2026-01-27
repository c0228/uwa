import React from "react";

export const Table = ({ header, data }) =>{
 return (<div className="table-responsive">
        <table className="table">
            <thead className="table-dark">
                <tr>
                    {header?.map((h,i)=>{
                        return (<td key={i}><b>{h}</b></td>);
                    })}
                </tr>
            </thead>
            <tbody>
                {data?.map((d,i)=>{
                    return (<tr>
                        {d?.map((d1,i2)=>{
                            return (<td key={i2}>{d1}</td>);
                        })}
                    </tr>)
                })}
            </tbody>
        </table>
    </div>);
};