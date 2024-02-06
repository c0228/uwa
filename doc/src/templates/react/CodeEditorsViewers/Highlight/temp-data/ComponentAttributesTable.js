import React from "react";
import { Highlight, Badge, ReactJSXToOutputViewer, Autocomplete } from 'e-ui-react';

export const ComponentAttributesTable = {
    "columns": [{ "columnName": "Attribute Name", "id": "attributeName", "dataAlign":"left",  "width": "20%" },
        { "columnName": "Description", "id": "description", "dataAlign":"left", "width": "30%" },
        { "columnName": "Example", "id": "example", "dataAlign":"left", "width": "40%" }
    ],
    "data": [{
        "attributeName": (<div>content <Badge type="success" label="Mandatory" size="11" /></div>),
        "description": "It contains component or code that want to display as a highlight editor",
        "example": (<div align="center"><b>-</b></div>)
    },{
        "attributeName": (<div>lang <Badge type="success" label="Mandatory" size="11" /></div>),
        "description": "Programming language for which the content belongs to",
        "example": (<div align="center"><b>-</b></div>)
    },{
        "attributeName": (<div>lines <Badge type="warning" label="Optional" size="11" /></div>),
        "description": "The group of lines or a single line of a code that wants to be displayed as a highlight editor",
        "example": (<div align="center"><b>-</b></div>)
    }]
};