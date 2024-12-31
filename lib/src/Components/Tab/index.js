import React, { useState } from 'react';
import { Colors } from '@LibUtils/GlobalStyles.js';
import { ContainerFluid, Row, Col, Icon, UrlParams, Nav } from 'e-ui-react';

export const Tab = ({ justify, menulinks, minValues, settings }) => {
 const [activeTab, setActiveTab] = useState(menulinks?.[0]?.id);
 const [displayTabs, setDisplayTabs] = useState(menulinks?.slice(0, minValues));
 const [dropdownList, setDropdownList] = useState(
  menulinks?.slice(minValues, menulinks?.length) || []
 );
 const [showDropdown, setShowDropdown] = useState(false);

 // console.log("displayTabs", displayTabs, " dropDownList", dropdownList);
 const onDropdownMenuSelect = (d) => {
  console.log(d);
  let a = [...displayTabs];
  let b = [...dropdownList];
  a.unshift(d); // Added element to the First
  b = dropdownList.filter((c) => c.id !== d?.id); // Removing Added Element from Second
  b.unshift(a.pop());
  // ;
  /*a.push(b.unshift(d)); 
      ; */
  setDisplayTabs(a);
  setDropdownList(b);
  setActiveTab(d?.id);
  console.log(a, b);
 };

 let tabList = [];
 let tabContent = [];
 let tabContentCss = {};
 if (settings?.tabContent?.border) {
  tabContentCss.border = settings?.tabContent?.border;
 }

 displayTabs?.map((l, i) => {
  tabList.push(
   <li key={i} className="nav-item">
    <div
     className={l.id === activeTab ? 'nav-link active' : 'nav-link'}
     data-bs-toggle="tab"
     style={{ cursor: 'pointer' }}
     onClick={() => {
      setActiveTab(l?.id);
      if (l?.onClick !== undefined) {
       l?.onClick();
      }
      if (l?.url !== undefined) {
       window.location.replace(l?.url);
      }
     }}
    >
     <b>{l?.label}</b>
    </div>
   </li>
  );
  tabContent.push(
   <div
    key={i}
    className={l.id === activeTab ? 'tab-pane tab-active' : 'tab-pane fade'}
    id={l?.id}
    style={tabContentCss}
   >
    {l.component}
   </div>
  );
 });
 if (minValues !== undefined) {
  tabList.push(
   <li
    className="nav-item"
    onBlur={(e) => {
     if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowDropdown(false);
     }
    }}
   >
    <div data-bs-toggle="tab" style={{ color: '#0d6efd', padding: '8px 16px' }}>
     <Icon
      type="FontAwesome"
      name="fa-plus-circle"
      size="12"
      color="primary"
      style={{ cursor: 'pointer' }}
      onClick={() => setShowDropdown(!showDropdown)}
     />
     <ul
      className={showDropdown ? 'dropdown-menu open' : 'dropdown-menu'}
      style={{ zIndex: 1000 }}
     >
      {dropdownList?.map((d, i) => {
       return (
        <li key={i} onClick={() => onDropdownMenuSelect(d)}>
         <div className="dropdown-item" style={{ cursor: 'pointer' }}>
          {d?.label}
         </div>
        </li>
       );
      })}
     </ul>
    </div>
   </li>
  );
 }
 return (
  <>
   <ul
    className={
     justify !== undefined && justify
      ? 'nav nav-tabs nav-justified'
      : 'nav nav-tabs'
    }
   >
    {tabList}
   </ul>
   <div className="tab-content">{tabContent}</div>
  </>
 );
};
