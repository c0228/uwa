import React, { useEffect } from 'react';
import { SimpleHeader, FlowChart } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

export const FlowChartPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
        <DocumentHeader title="Flow Chart" componentAttributesTable={ComponentAttributesTable} />
        <FlowChart />
    </>);
};