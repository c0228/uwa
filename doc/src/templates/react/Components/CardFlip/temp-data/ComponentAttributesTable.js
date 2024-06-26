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
                width 
                <Badge type="success" label="Mandatory" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`Number`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                height 
                <Badge type="success" label="Mandatory" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`Number`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                frontContent 
                <Badge type="success" label="Mandatory" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={'HTML Content / String Content'} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                backContent 
                <Badge type="success" label="Mandatory" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={'HTML Content / String Content'} lang="html"  />)
    }]
};