import React from 'react';
import { Icon, Row, Col } from 'e-ui-react';

export const ModalAlert = ({ data = {} , setData }) => {
 const { title = '', type = '', show = false , msg = (<></>) } = data;
 const closeAlert = () => {
    setData((prev) => ({
      ...prev,
      show: false,
    }));
  };
 let icon = (type === 'success') ? 'fa-check-circle' : 'fa-warning';
 return (
  <div>
   <div
    className={type !== undefined ? 'modal modal-' + type : 'modal'}
    style={{ display: show ? 'block' : 'none' }}
   >
    <div className="modal-dialog" style={{ maxWidth: '60%' }}>
     <div className="modal-content">
      <div className="modal-body" style={{ padding: '0px' }}>
       <div
        className={"alert alert-"+type}
        style={{ marginBottom: '0px' }}>
        <div>
            <span style={{ fontSize:'16px' }}><b>{title}</b></span>
            <div style={{ position:'absolute', top:'15px', right:'20px' }}>
              <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={closeAlert}></button>
            </div>
            <hr/>
        </div>
        <div className="mtop15p">
          <Icon type="FontAwesome" name={icon} size={14} style={{ marginRight:'5px' }} /> 
          <span>{msg}</span>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   {show && <div className="modal-backdrop show"></div>}
  </div>
 );
};
