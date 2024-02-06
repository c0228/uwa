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


        "example": (<Highlight content={`{ "align": "left/right", "content":"_Any HTML Content / String Content_"}`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                Templete 
                <Badge type="success" label="Mandatory" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`-`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                data 
                <Badge type="success" label="Mandatory" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`-`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                withCard 
                <Badge type="success" label="Mandatory" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`true / false`} lang="html"  />)   }]
};