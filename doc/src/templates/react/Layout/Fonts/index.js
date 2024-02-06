import React, { useEffect } from "react";
import { SimpleHeader } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";
import './index.css';

export const FontPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
    <DocumentHeader title="Fonts" componentAttributesTable={ComponentAttributesTable} />
    </>);
};