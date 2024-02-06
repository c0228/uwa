import React from "react";
import { Highlight, Badge, ReactJSXToOutputViewer, Autocomplete } from 'e-ui-react';

export const ComponentAttributesTable = {
    "columns": [{ "columnName": "Attribute Name", "id": "attributeName", "dataAlign":"left",  "width": "20%" },
        { "columnName": "Description", "id": "description", "dataAlign":"left", "width": "30%" },
        { "columnName": "Example", "id": "example", "dataAlign":"left", "width": "40%" }
    ],
    "data": [{
        "attributeName": (<>
            <div>
                template 
                <Badge type="success" label="Mandatory" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`-`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                content 
                <Badge type="success" label="Mandatory" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`{
 "backgroundColor":"________________",
 "backgroundImage":"_________________",
 "content":"HTML / String Content",
 "staticDisplay":"HTML/String Content"
}`} lang="html"  />)
    }]
};