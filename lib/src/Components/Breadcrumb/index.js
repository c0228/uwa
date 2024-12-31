import React from 'react';
import './index.css';

export const Breadcrumb = ({ backgroundColor, data }) => {
 return (
  <>
   <div>
    <nav aria-label="breadcrumb">
     <ol
      className="breadcrumb"
      style={{ backgroundColor: backgroundColor, marginBottom: '0px' }}
     >
      {data?.map((d, i) => {
       if (i === data?.length - 1) {
        return (
         <li
          key={i}
          className="breadcrumb-item active"
          aria-current="page"
          onClick={() => d?.onClick()}
         >
          {d?.label}
         </li>
        );
       } else {
        return (
         <li key={i} className="breadcrumb-item">
          <a href={d?.url ? d?.url : '#'} onClick={() => d?.onClick()}>
           {d?.label}
          </a>
         </li>
        );
       }
      })}
     </ol>
    </nav>
   </div>
  </>
 );
};
