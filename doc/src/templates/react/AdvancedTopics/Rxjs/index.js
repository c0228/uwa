import React, { useEffect } from "react";
import { SimpleHeader } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";
import { ComponentAttributesTable } from "./temp-data/ComponentAttributesTable.js";

export const RxJSPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
        <DocumentHeader title="RxJS" componentAttributesTable={ComponentAttributesTable} />
        <div>This RxJS is used to make a Live Communication between a Component to another Component. This Library acts as a Messaging Queue between the React Components.</div>
        <div>npm install rxjs</div>
    </>);
};