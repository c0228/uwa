import React, { useState, useEffect } from 'react';
import { Row, Col, UrlParams, Colors, getResponsiveStyle } from 'e-ui-react';
import './index.css';

export const Nav = ({
 mode,
 layout,
 align,
 sequence,
 menulinks,
 activeId,
 colorConfig,
}) => {
 let alignment =
  align === 'center'
   ? 'justify-content-center'
   : align === 'right'
     ? 'justify-content-end'
     : '';

 const sequenceOrder = sequence === undefined ? ['menu', 'content'] : sequence;
 const activeColor = colorConfig?.active?.color;
 const activeBgColor = colorConfig?.active?.backgroundColor;
 const defaultColor = colorConfig?.default?.color;
 const defaultBgColor = colorConfig?.default?.backgroundColor;

 // activeColor, defaultColor,
 let activeShowColor = activeColor === undefined ? Colors.primary : activeColor;
 let defaultShowColor =
  defaultColor === undefined ? Colors.secondary : defaultColor;
 let activeBgShowColor = activeColor === undefined ? 'none' : activeBgColor;
 let defaultBgShowColor = defaultColor === undefined ? 'none' : defaultBgColor;

 const [actId, setActId] = useState(activeId);
 const [contentObj, setContentObj] = useState();

 useEffect(() => {
  setContentObj(menulinks?.find((menu) => menu?.id === actId));
 }, [actId]);

 const NavContent = () => {
  const mediaQuery = window.matchMedia('(max-width: 1200px)');
  return menulinks?.map((data, index) => {
   let activeStyle = {
    cursor: 'pointer',
    color: activeShowColor,
    textDecoration: 'none',
    fontSize: getResponsiveStyle(12),
    background: activeBgShowColor,
    fontWeight: 'bold',
   };
   if (mediaQuery?.matches) {
    activeStyle = {
     ...activeStyle,
     padding: getResponsiveStyle(5),
     borderBottom: getResponsiveStyle(2) + ' solid ' + activeShowColor,
    };
   } else {
    activeStyle = {
     ...activeStyle,
     paddingBottom: '5px',
     borderBottom: '2px solid ' + activeShowColor,
    };
   }

   let defaultStyle = {
    cursor: 'pointer',
    textDecoration: 'none',
    background: defaultBgShowColor,
    color: defaultShowColor,
    fontWeight: 'bold',
    fontSize: getResponsiveStyle(12),
   };
   if (mediaQuery?.matches) {
    defaultStyle = { ...defaultStyle, padding: getResponsiveStyle(5) };
   } else {
    defaultStyle = { ...defaultStyle, paddingBottom: '5px' };
   }

   return (
    <li
     className={
      data?.disabled && data?.disabled === true
       ? 'nav-item mbot15p mrgt15p disabled'
       : 'nav-item mbot15p mrgt15p'
     }
     key={index}
     onClick={() => {
      setActId(data?.id);
      if (data?.onClick !== undefined) {
       data?.onClick();
      }
      if (data?.url !== undefined) {
       window.location.replace(data?.url);
      }
     }}
    >
     {typeof data?.label === 'string' ? (
      <>
       <span style={actId === data?.id ? activeStyle : defaultStyle}>
        {data?.label}
       </span>
      </>
     ) : (
      <>{data?.label}</>
     )}
    </li>
   );
  });
 };

 const menu_xs = layout?.menu?.xs !== undefined ? layout?.menu?.xs : '12';
 const menu_sm = layout?.menu?.sm !== undefined ? layout?.menu?.sm : '12';
 const menu_md = layout?.menu?.md !== undefined ? layout?.menu?.md : '12';
 const menu_lg = layout?.menu?.lg !== undefined ? layout?.menu?.lg : '12';
 const menu_xl = layout?.menu?.xl !== undefined ? layout?.menu?.xl : '12';
 const menu_xxl = layout?.menu?.xxl !== undefined ? layout?.menu?.xxl : '12';

 const content_xs =
  layout?.content?.xs !== undefined ? layout?.content?.xs : '12';
 const content_sm =
  layout?.content?.sm !== undefined ? layout?.content?.sm : '12';
 const content_md =
  layout?.content?.md !== undefined ? layout?.content?.md : '12';
 const content_lg =
  layout?.content?.lg !== undefined ? layout?.content?.lg : '12';
 const content_xl =
  layout?.content?.xl !== undefined ? layout?.content?.xl : '12';
 const content_xxl =
  layout?.content?.xxl !== undefined ? layout?.content?.xxl : '12';

 const Menu = () => {
  if (mode === undefined || mode === 'horizontal') {
   return (
    <div style={{ marginTop: getResponsiveStyle(8) }}>
     <ul className={('navbar-nav ' + alignment).trim()}>
      <NavContent />
     </ul>
    </div>
   );
  } else {
   return (
    <div align={align}>
     <ul className={'navbar-nav flex-column '}>
      <NavContent />
     </ul>
    </div>
   );
  }
 };

 const Content = () => contentObj?.content;

 const BuildMenu = () => {
  return (
   <Row>
    {sequenceOrder?.map((seq, index) => {
     if (seq === 'menu') {
      return (
       <Col
        key={index}
        xs={menu_xs}
        sm={menu_sm}
        md={menu_md}
        lg={menu_lg}
        xl={menu_xl}
        xxl={menu_xxl}
       >
        <Menu />
       </Col>
      );
     } else if (seq === 'content') {
      return (
       <Col
        key={index}
        xs={content_xs}
        sm={content_sm}
        md={content_md}
        lg={content_lg}
        xl={content_xl}
        xxl={content_xxl}
       >
        <Content />
       </Col>
      );
     }
    })}
   </Row>
  );
 };

 return (
  <>
   <BuildMenu />
  </>
 );
};
