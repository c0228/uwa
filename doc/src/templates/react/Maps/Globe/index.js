import React, { useEffect } from "react";
import { Globe } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";
import './index.css';

export const GlobePage = ()=>{

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (<>
  <DocumentHeader title="Globe" componentAttributesTable={ComponentAttributesTable} />
  <Globe height="500px" />
 </>);
};