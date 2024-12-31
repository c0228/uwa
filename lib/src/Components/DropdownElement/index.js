import React, { useState, useEffect } from 'react';
import HtmlToReactParser from 'html-to-react';
import {
 Icon,
 Colors,
 FormInputValidate,
 getForm,
 FORM_SUBMITTED,
 FORM_RESET,
} from 'e-ui-react';
import './index.css';

export const DropdownElement = ({ width, label, layout, menus }) => {
 /**
  * container:{ height: '' }
  */
 const [status, setStatus] = useState(false);

 return (
  <>
   <div
    tabIndex={1}
    onBlur={(e) => {
     if (!e.currentTarget.contains(e.relatedTarget)) {
      setStatus(false);
     }
    }}
   >
    <div className="dropdown" style={{ width: width }}>
     <div
      className="dropdown-toggle"
      data-bs-toggle="dropdown"
      onClick={() => setStatus(!status)}
     >
      {label}
     </div>
     <ul className={`dropdown-menu ${status ? 'show' : ''}`}>
      {menus?.map((menu, index) => {
       return (
        <li key={index}>
         <a className="dropdown-item" href={menu?.url}>
          {menu?.title}
         </a>
        </li>
       );
      })}
     </ul>
    </div>
   </div>
  </>
 );
};
