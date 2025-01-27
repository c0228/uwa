import React from 'react';
import PropTypes from "prop-types";
import './index.css';


export const Breadcrumb = ({ data }) => {
    return (
      <div className="mtop15p">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {data?.map((d, i) => {
              if (i === data?.length - 1) {
                return (
                  <li
                    key={i}
                    className="breadcrumb-item active"
                    aria-current="page"
                  >
                    {d?.label}
                  </li>
                );
              }
              return (
                <li key={i} className="breadcrumb-item">
                  <a href={d?.url || "#"}>{d?.label}</a>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    );
  };

  // PropTypes validation
 Breadcrumb.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string,
      })
    ),
 };
  
  // Default Props
 Breadcrumb.defaultProps = {
    data: [],
 };
  
/*export const Breadcrumb = ({ backgroundColor, data }) => {
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
}; */


