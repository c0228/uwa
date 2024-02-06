import React from "react";
import { Drawer, FloatingButton } from "e-ui-react";

const CodeViewer = ({ children })=>{
 return (<>
 <Drawer 
         width="100%"
         colorConfig={{
            backgroundColor:'#777',
            color: '#fff'
         }} 
         triggerElement={<FloatingButton type="circular" className="bg-primary text-white" bottom="5%" right="2%" >
            <div style={{ fontSize:'14px' }}>&lt; / &gt;</div>
         </FloatingButton>}>
            <div>
               {children}
            </div>
      </Drawer>
 </>);
};

export default CodeViewer;