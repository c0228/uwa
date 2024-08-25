import React from "react";
import { Icon, Row, Col } from "e-ui-react";

export const ModalAlert = ({ title, type, show, onClose }) =>{
 let icon = (type ==='success')?'fa-check-circle':'fa-warning';
 return (<div>
  <div className={(type!==undefined)?"modal modal-"+type:"modal"} style={{ display: show?'block':'none' }}>
  <div className="modal-dialog" style={{ maxWidth: '60%' }}>
   <div className="modal-content">
     <div className="modal-body" style={{ padding:'0px' }}>
      <div className="alert alert-success alert-dismissible" style={{ marginBottom:'0px' }}>
        <button type="button" className="btn-close" data-bs-dismiss="alert"  onClick={()=>onClose(false)}></button>
        <Row>
            <Col md={1} sm={2}>
              <div align="center" style={{ display:'flex', justifyContent:'center', alignItems:'center', minHeight:'60px' }}>
                <Icon type="FontAwesome" name={icon} size={28} /></div>
            </Col>
            <Col md={11} sm={10}>
             <div style={{ display:'flex', justifyContent:'flex-start', alignItems:'center', minHeight:'60px' }}>{title}</div>
            </Col>
        </Row>
      </div>
     </div>
   </div>
  </div>
 </div>
 {(show) && <div className="modal-backdrop show"></div>}
 </div>);
};
