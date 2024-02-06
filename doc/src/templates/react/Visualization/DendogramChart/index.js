import React, { useEffect } from 'react';
import { SimpleHeader } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

export const DendogramChartPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
    <DocumentHeader title="Dendogram Chart" componentAttributesTable={ComponentAttributesTable} />
    </>);
};