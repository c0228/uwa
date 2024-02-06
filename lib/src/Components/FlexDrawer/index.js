import React, { useState } from "react";
import { Button, Icon } from 'e-ui-react';
import './index.css';

export const FlexDrawer = ({ width, top, bottom, children })=>{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const w = ((width)?width:0);
    const left = (w - 35);
    const handleOpenDrawer = () => {
      setIsDrawerOpen(true);
    };

    const handleToggle = ()=>{
        setIsDrawerOpen(!isDrawerOpen);
    };
  
    const handleCloseDrawer = () => {
      setIsDrawerOpen(false);
    };
  
    return (
      <div className="flexDrawer-container">
        <div className="flexDrawer"
        // className={`flexDrawer ${isDrawerOpen ? 'open' : ''}`} 
        style={{  display: 'flex', justifyContent: 'flex-end', left: isDrawerOpen?'0px':'-'+left+'px', 
            width: w, top: top, bottom: bottom }}>
            {children}
            <Button type="primary" label={<Icon type="FontAwesome" name="fa-angle-double-right" size={16} />} 
                style={{ margin:'0px', borderRadius:'0px' }} onClick={handleToggle} />
        </div>
      </div>
    );
  };