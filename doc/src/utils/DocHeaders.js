import React, { useState } from "react";
import { SimpleHeader, Button, Modal, Table } from 'e-ui-react';

export const DocumentHeader = ({ title, componentAttributesTable })=>{
 const [ showModel, setShowModal ] = useState(false);

 const ComponentAttributes = ()=>{
  return (<div>
    <Table height="400px" columnDesc={componentAttributesTable?.columns} data={componentAttributesTable?.data} />
   </div>);
 };

 return (<>
 {componentAttributesTable!==undefined && <Modal type="xl" title={title+" Component Attributes"}
    show={showModel} 
    onClose={setShowModal} content={<ComponentAttributes />}  />}
    <SimpleHeader title={title}
    rightContent={<>
    {componentAttributesTable!==undefined && 
     <Button type="primary" size={11} onClick={()=>setShowModal(true)}><b>Component Attributes</b></Button>}
    </>} />
 </>);
};