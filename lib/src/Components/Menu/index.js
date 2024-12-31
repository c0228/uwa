import React, { useState } from 'react';
import { Colors } from '@LibUtils/GlobalStyles.js';
import { ContainerFluid, Row, Col, Icon, UrlParams, Nav } from 'e-ui-react';

import './index.css';

export const Menu = React.memo(
 ({ type, layout, layoutStyle, align, list, justify, minValues, settings }) => {
  const Nav = ({ layout, align, list }) => {};

  const Tab = ({ justify, list, minValues }) => {
   const [activeTab, setActiveTab] = useState(list[0].id);
   const [displayTabs, setDisplayTabs] = useState(list.slice(0, minValues));
   const [dropdownList, setDropdownList] = useState(
    list.slice(minValues, list.length)
   );
   const [showDropdown, setShowDropdown] = useState(false);

   // console.log("displayTabs", displayTabs, " dropDownList", dropdownList);
   const onDropdownMenuSelect = (d) => {
    console.log(d);
    let a = [...displayTabs];
    let b = [...dropdownList];
    a.unshift(d); // Added element to the First
    b = dropdownList.filter((c) => c.id !== d.id); // Removing Added Element from Second
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
      <a
       className={l.id === activeTab ? 'nav-link active' : 'nav-link'}
       data-bs-toggle="tab"
       href="#"
       onClick={() => setActiveTab(l.id)}
      >
       <b>{l.label}</b>
      </a>
     </li>
    );
    tabContent.push(
     <div
      key={i}
      className={l.id === activeTab ? 'tab-pane tab-active' : 'tab-pane fade'}
      id={l.id}
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
      <a className="nav-link" data-bs-toggle="tab" href="#">
       <Icon
        type="FontAwesome"
        name="fa-plus-circle"
        size="12"
        color="primary"
        onClick={() => setShowDropdown(!showDropdown)}
       />
       <ul
        className={showDropdown ? 'dropdown-menu open' : 'dropdown-menu'}
        style={{ zIndex: 1000 }}
       >
        {dropdownList?.map((d, i) => {
         return (
          <li key={i} onClick={() => onDropdownMenuSelect(d)}>
           <a className="dropdown-item" href="#">
            {d?.label}
           </a>
          </li>
         );
        })}
       </ul>
      </a>
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

  const Pills = React.memo(({ justify, list }) => {
   const [activePill, setActivePill] = useState(list[0].id);
   let tabList = [];
   let tabContent = [];
   list.map((l, i) => {
    tabList.push(
     <li key={i} className="nav-item">
      <a
       id={l.id}
       className={l.id === activePill ? 'nav-link active' : 'nav-link'}
       data-bs-toggle="tab"
       href={'#' + l.id}
       onClick={() => {
        setActivePill(l.id);
       }}
      >
       <b>{l.label}</b>
      </a>
     </li>
    );
    tabContent.push(
     <div
      key={i}
      className={l.id === activePill ? 'tab-pane pill-active' : 'tab-pane fade'}
      id={l.id}
     >
      {l.component}
     </div>
    );
   });
   return (
    <>
     {layout === 'vertical' ? (
      <>
       <ContainerFluid>
        <Row>
         <Col
          md={layoutStyle?.menu?.md}
          lg={layoutStyle?.menu?.lg}
          xl={layoutStyle?.menu?.xl}
          xxl={layoutStyle?.menu?.xxl}
         >
          <ul className="nav nav-pills flex-column">{tabList}</ul>
         </Col>
         <Col
          md={layoutStyle?.content?.md}
          lg={layoutStyle?.content?.lg}
          xl={layoutStyle?.content?.xl}
          xxl={layoutStyle?.content?.xxl}
         >
          <div className="tab-content">{tabContent}</div>
         </Col>
        </Row>
       </ContainerFluid>
      </>
     ) : (
      <>
       <ul
        className={
         justify !== undefined && justify
          ? 'nav nav-pills nav-justified'
          : 'nav nav-pills'
        }
       >
        {tabList}
       </ul>
       <div className="tab-content">{tabContent}</div>
      </>
     )}
    </>
   );
  });

  console.log('menu', type.toLowerCase());
  return (
   <>
    {type.toLowerCase() === 'nav' && (
     <Nav layout={layout} align={align} list={list} />
    )}
    {/*type.toLowerCase() === "tab" && <Tab justify={justify} list={list} minValues={minValues} />*/}
    {type.toLowerCase() === 'pill' && <Pills justify={justify} list={list} />}
   </>
  );
 }
);
