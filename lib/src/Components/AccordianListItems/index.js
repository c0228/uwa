import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@LibComponents/Icons/index.js';
import './index.css';
import { UrlParams } from '@LibUtils/AppConfig.js';
import { Colors } from '@LibUtils/GlobalStyles.js';

export const AccordianListItems = ({
 data,
 highlightColor,
 defaultColor,
 selectKey,
 selectValue,
}) => {
 const hierarachyPath = (object, k, v) => {
  let mainList = [];
  let searchId = '';
  let level = 0;

  const looperHierarachy = (collect, lev, obj, index, parentId) => {
   if (obj?.[k] === v) {
    searchId = obj.id;
   }
   if (obj?.children?.length > 0) {
    let lvl = lev + 1;
    console.log(lvl, obj.id);
    collect.push(obj.id);
    obj?.children?.map((data, indx) => {
     looperHierarachy(collect, lvl, data, indx, data.id);
    });
   } else {
    // collect Data and add to MainList
    let finalData = [...collect];
    finalData.push(obj.id);
    mainList.push(finalData.toString());
   }
  };

  object.map((data, index) => {
   let collect = [];
   looperHierarachy(collect, level, data, index, data.id);
  });

  return mainList
   .find((record) => record.split(',').includes(searchId))
   ?.split(',');
 };

 const display_sidewrapper_children = (fetchedData, hierarachyPath) => {
  return (
   <>
    {fetchedData?.map((fetchData, index) => {
     let hPath = [...hierarachyPath];
     hPath?.shift();
     let id = fetchData.id;
     let url = fetchData.url;
     let title = fetchData.title;
     let children = fetchData?.children;

     let hColor =
      highlightColor !== undefined ? highlightColor : Colors.primary;
     let dColor = defaultColor !== undefined ? defaultColor : Colors.dark;
     if (children !== undefined) {
      return (
       <div className="container-fluid" key={'T-' + index}>
        <div
         className="row accordian-header"
         onClick={() => handleCollapse(id)}
         data-bs-toggle="collapse"
         data-bs-target={'#' + id}
         style={{
          color: id === hierarachyPath?.[0] ? hColor : dColor,
          borderBottom:
           '1.5px solid ' + (id === hierarachyPath?.[0] ? hColor : dColor),
         }}
        >
         <div className="col-10 pad5">
          <b>{title} </b>
         </div>
         <div align="right" className="col-2 pad5">
          <Icon type="FontAwesome" name="fa-angle-double-down" size="16" />
         </div>
        </div>
        <div className="row">
         <div className="col-12">
          <div
           id={id}
           className={id === hierarachyPath?.[0] ? 'collapse show' : 'collapse'}
          >
           {display_sidewrapper_children(children, hPath)}
          </div>
         </div>
        </div>
       </div>
      );
     } else {
      return (
       <a
        key={'St-' + index}
        href={UrlParams().baseUrl + url}
        style={{ textDecoration: 'none' }}
       >
        <div
         className="row col-12 accordian-title"
         style={{
          cursor: id === hierarachyPath?.[0] ? 'pointer' : '',
          color: id === hierarachyPath?.[0] ? hColor : dColor,
          fontWeight: id === hierarachyPath?.[0] ? 'bold' : '',
         }}
        >
         {title}
        </div>
       </a>
      );
     }
    })}
   </>
  );
 };

 const handleCollapse = (id) => {
  document.getElementById(id).classList.toggle('show');
 };
 let hierarachy = hierarachyPath(data, selectKey, selectValue);
 return (
  <>
   <div>{hierarachy && display_sidewrapper_children(data, hierarachy)}</div>
  </>
 );
};
