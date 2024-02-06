import React, { useEffect } from 'react';
import { SimpleHeader } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

export const BoxChartPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
    <DocumentHeader title="BoxChart" componentAttributesTable={ComponentAttributesTable} />
    </>);
};