import React from 'react';

export const Modal = ({
 width,
 type,
 title,
 show,
 onClose,
 fullScreen,
 children,
 colorConfig
}) => {
 const isFullScreen = fullScreen !== undefined && fullScreen ? true : false;
 let headerStyle = {
        backgroundColor: (colorConfig?.header?.backgroundColor || '#fff'), 
        color: (colorConfig?.header?.color || '#000'),
 };
 if(colorConfig?.header?.borderColor) {
    headerStyle["border"] = '1px solid '+colorConfig?.header?.borderColor;
 }
 let bodyStyle = {
        padding:'0px',
        backgroundColor: (colorConfig?.body?.backgroundColor || '#fff'), 
        color: (colorConfig?.body?.color || '#000'),
        borderBottomLeftRadius:'8px',
        borderBottomRightRadius:'8px'
 };
 if(colorConfig?.body?.borderColor) {
    bodyStyle["border"] = '1px solid '+colorConfig?.body?.borderColor;
 }

 return (
  <>
   <div
    className={type !== undefined ? 'modal modal-' + type : 'modal'}
    style={{ display: show ? 'block' : 'none' }}
   >
    <div
     className={isFullScreen ? 'modal-dialog modal-fullscreen' : 'modal-dialog'}
     style={{ maxWidth: width }}
    >
     <div className="modal-content">
      <div className="modal-header" style={headerStyle}>
       <h5 className="modal-title"><b>{title}</b></h5>
       <button type="button" className="btn-close" onClick={() => onClose(false)}></button>
      </div>
      <div className="modal-body" style={bodyStyle}>{children}</div>
     </div>
    </div>
   </div>
   {show && <div className="modal-backdrop show"></div>}
  </>
 );
};
