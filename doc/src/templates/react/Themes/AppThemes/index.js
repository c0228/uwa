import React, { useEffect } from 'react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";
import { AppThemeBuilder } from "./components/AppThemeBuilder.js";

export const AppThemesPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
    <DocumentHeader title="App Themes" componentAttributesTable={ComponentAttributesTable} />
    <AppThemeBuilder />
    </>);
};