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
                type 
                <Badge type="warning" label="optional" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`-`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                className
                <Badge type="warning" label="optional" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`-`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                children 
                <Badge type="success" label="Mandatory" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`-`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                bottom 
                <Badge type="warning" label="optional" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`-`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                right 
                <Badge type="warning" label="optional" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`-`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                left 
                <Badge type="warning" label="optional" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`-`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
            top 
                <Badge type="warning" label="optional" size="11" className="pull-right" />
            </div>
        </>),
        "description": "",
        "example": (<Highlight content={`-`} lang="html"  />)
    }
    ]
};
