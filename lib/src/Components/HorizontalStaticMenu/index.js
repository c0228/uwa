import React, { useState, useEffect } from 'react';
import './index.css';

export const HorizontalStaticMenu = ({ data, config, activeId }) => {
 const [activeMenu, setActiveMenu] = useState();
 useEffect(() => {
  setActiveMenu(activeId);
 }, [activeId]);
 return (
  <div>
   <div className="horizontal-menu-details">
    {data?.map((d, i) => {
     let styles = {};
     if (activeMenu === d?.id) {
      styles.color = config?.active?.color;
      styles.borderBottom = '3px solid ' + config?.active?.color;
     } else {
      styles.color = config?.inactive?.color;
     }
     return (
      <div
       id={d?.id}
       key={i}
       className={
        activeMenu === d?.id ? 'horizontal-menu-active' : 'horizontal-menu'
       }
       style={styles}
       onClick={() => setActiveMenu(d?.id)}
      >
       <b>{d?.label}</b>
      </div>
     );
    })}
   </div>
   <div>{data?.filter((d) => d?.id === activeMenu)?.[0]?.['component']}</div>
  </div>
 );
};
