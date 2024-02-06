import React, { useState } from "react";

export const AppThemes = ({ children, theme }) =>{
 const [ themeName, setThemeName ] = useState(theme);
 return (<div>
    {themeName==='Hello' && import('./style1.css')}
    {themeName==='Hi' && import('./style2.css')}
    {children}
  </div>);
};