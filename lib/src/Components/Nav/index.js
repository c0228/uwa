import React, { useState, useEffect } from "react";
import { Row, Col, UrlParams, Colors } from "e-ui-react";

export const Nav = ({ mode, layout, align, sequence, menulinks, activeId, colorConfig }) => {
 let alignment = (align === 'center') ? "justify-content-center" : 
  ((align === 'right') ? "justify-content-end" : "");

 const sequenceOrder = (sequence===undefined)?["menu","content"]:sequence;
 const activeColor = colorConfig?.active?.color;
 const activeBgColor = colorConfig?.active?.backgroundColor;
 const defaultColor = colorConfig?.default?.color;
 const defaultBgColor = colorConfig?.default?.backgroundColor;
  
 // activeColor, defaultColor,
 let activeShowColor = (activeColor === undefined) ? Colors.primary : activeColor;
 let defaultShowColor = (defaultColor === undefined) ? Colors.secondary : defaultColor;
 let activeBgShowColor = (activeColor === undefined) ? 'none' : activeBgColor;
 let defaultBgShowColor = (defaultColor === undefined) ? 'none' : defaultBgColor;
 
 const [actId, setActId] = useState(activeId);
 const [contentObj, setContentObj ] = useState();

 useEffect(()=>{
  setContentObj( menulinks?.find((menu)=>menu?.id===actId) );
 },[actId]);

 const NavContent = ()=>{
  return (menulinks?.map((data, index) => {
    let activeStyle = { cursor:'pointer', color: activeShowColor, paddingBottom:'5px',
        background: activeBgShowColor, textDecoration: 'none', borderBottom: '2px solid ' + activeShowColor, 
        fontWeight: 'bold' };
    let defaultStyle = { cursor:'pointer', textDecoration: 'none', paddingBottom:'5px',
        background: defaultBgShowColor, color: defaultShowColor, fontWeight: 'bold' };
    return (<li 
      className={(data?.disabled && (data?.disabled === true)) ? "nav-item mbot15p disabled" : "nav-item mbot15p"} 
      style={{ marginRight:'15px' }}
      key={index} 
      onClick={()=>{
        setActId(data?.id);
        if(data?.onClick!==undefined){ data?.onClick(); }
        if(data?.url!==undefined) { window.location.replace(data?.url); }
      }}>
        {typeof data?.label === 'string'?(<>
          <span style={((actId === data?.id)) ? 
          activeStyle : defaultStyle}>{data?.label}</span>
        </>):(<>
          {data?.label}
        </>)}
      </li>);
  }));
 };

 const menu_xs = (layout?.menu?.xs!==undefined)?(layout?.menu?.xs):'12';
 const menu_sm = (layout?.menu?.sm!==undefined)?(layout?.menu?.sm):'12';
 const menu_md = (layout?.menu?.md!==undefined)?(layout?.menu?.md):'12';
 const menu_lg = (layout?.menu?.lg!==undefined)?(layout?.menu?.lg):'12';
 const menu_xl = (layout?.menu?.xl!==undefined)?(layout?.menu?.xl):'12';
 const menu_xxl = (layout?.menu?.xxl!==undefined)?(layout?.menu?.xxl):'12';

 const content_xs = (layout?.content?.xs!==undefined)?(layout?.content?.xs):'12';
 const content_sm = (layout?.content?.sm!==undefined)?(layout?.content?.sm):'12';
 const content_md = (layout?.content?.md!==undefined)?(layout?.content?.md):'12';
 const content_lg = (layout?.content?.lg!==undefined)?(layout?.content?.lg):'12';
 const content_xl = (layout?.content?.xl!==undefined)?(layout?.content?.xl):'12';
 const content_xxl = (layout?.content?.xxl!==undefined)?(layout?.content?.xxl):'12';

 const Menu = ()=>{
  if(mode === undefined || mode === 'horizontal'){
    return ( <ul className={("navbar-nav " + alignment).trim()}>
     <NavContent />
    </ul>);
  } else {
      return (<div align={align}><ul className={"navbar-nav flex-column "}><NavContent /></ul></div>);
  }
 };

 const Content = ()=>contentObj?.content;

 const BuildMenu = ()=>{
  return (<Row>
    {sequenceOrder?.map((seq, index)=>{
    if(seq==='menu'){
      return (<Col key={index} xs={menu_xs} sm={menu_sm} md={menu_md} lg={menu_lg} xl={menu_xl} xxl={menu_xxl}>
        <Menu />
      </Col>);
    } else if(seq==='content'){
        return (<Col key={index} xs={content_xs} sm={content_sm} md={content_md} lg={content_lg} xl={content_xl} xxl={content_xxl}>
          <Content />
        </Col>); 
    }
  })}
  </Row>); 
 };

 return (<>
  <BuildMenu />
 </>);
};