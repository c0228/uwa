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
                id 
                <Badge className="pull-right" type="success" label="Mandatory" size="11" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`-`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                data 
                <Badge className="pull-right" type="success" label="Mandatory" size="11" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`-`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                highlight 
                <Badge className="pull-right" type="success" label="Mandatory" size="11" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`-`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                defaultOpen 
                <Badge className="pull-right" type="success" label="Mandatory" size="11" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`-`} lang="html"  />)
    }]
};