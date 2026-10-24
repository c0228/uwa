import React, { useState, useEffect } from 'react';
import { Icon } from 'e-ui-react';
import './index.css';

export const Accordian = ({ id, data, highlight, defaultOpen }) => {
 const [showAccordian, setShowAccordian] = useState([]);
 const [expandCollapseSection, setExpandCollapseSection] = useState({ icon:'fa-plus-circle', label:'Expand All Sections' })

 useEffect(() => {
  if (defaultOpen !== undefined) {
   toggleAccordian(defaultOpen);
  }
 }, []);

 const toggleAccordian = (id) => {
  if (showAccordian.includes(id)) {
   removeFromAccordianList(id);
  } else {
   addToAccordianList(id);
  }
 };
 const addToAccordianList = (id) => {
  setShowAccordian([id, ...showAccordian]);
 };

 const removeFromAccordianList = (id) => {
  setShowAccordian(
   showAccordian.filter((ids) => {
    return ids != id;
   })
  );
 };

 const handleExpandCollapse = () =>{
  if (showAccordian.length === data.length) { // Collapse all sections
    setExpandCollapseSection({ icon:'fa-plus-circle', label:'Expand All Sections' });
    setShowAccordian([]);
  } else { // Expand all sections
    setExpandCollapseSection({ icon:'fa-minus-circle', label:'Collapse All Sections' });
    setShowAccordian(data.map((d) => d.id));
  }
 };
 return (
  <>
   <div align="right" className="accordian-expand-collapse-section" onClick={()=>handleExpandCollapse()}>
    <Icon type="FontAwesome" name={expandCollapseSection?.icon} size={11} style={{ marginRight:'3px' }}/> 
    <span className="accordian-expand-collapse-section-label">{expandCollapseSection?.label}</span>
   </div>
   <div className="list-group" id={id}>
    {data?.map((d, i) => {
     console.log(showAccordian, d);

     let collapseDivClass = showAccordian.includes(d.id)
      ? 'collapse show'
      : 'collapse ';
     let headingClassName =
      'list-group-item ' +
      (highlight?.length > 0 ? 'accordian-header-' + highlight : '') +
      (d?.headingClassName?.length > 0 ? ' ' + d?.headingClassName : '');
     let bodyClassName =
      'list-group-item ' +
      collapseDivClass +
      ' ' +
      (highlight?.length > 0 ? 'accordian-body-' + highlight : '') +
      (d?.bodyClassName?.length > 0 ? ' ' + d?.bodyClassName : '');

     console.log('headingClassName', headingClassName);

     return (
      <div key={i}>
       <div
        id={'heading-' + d.id}
        className={headingClassName}
        onClick={() => toggleAccordian(d.id)}
        data-bs-toggle="collapse"
        data-bs-target={'#' + d.id}
        aria-expanded="true"
        aria-controls={d.id}
        style={{ cursor: 'pointer', backgroundColor: (d?.backgroundColor)?d?.backgroundColor:'none' }}
       >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
         <div style={{ width: '90%' }}>{d.title}</div>
         <div align="right" style={{ width: '10%' }}>
          <Icon
           type="FontAwesome"
           name={
            showAccordian.includes(d.id)
             ? 'fa-angle-double-up'
             : 'fa-angle-double-down'
           }
           size="18"
          />
         </div>
        </div>
       </div>
       <div
        id={d.id}
        className={bodyClassName}
        aria-labelledby={'heading-' + d.id}
        data-bs-parent={'#' + id}
       >
        <div className="accordion-body">{d.component}</div>
       </div>
      </div>
     );
    })}
   </div>
  </>
 );
};
