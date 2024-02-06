import React from "react";
import { Highlight, Badge, ReactJSXToOutputViewer, Autocomplete } from 'e-ui-react';

export const ComponentAttributesTable = {
    "columns": [{ "columnName": "Attribute Name", "id": "attributeName", "dataAlign":"left",  "width": "20%" },
        { "columnName": "Description", "id": "description", "dataAlign":"left", "width": "30%" },
        { "columnName": "Example", "id": "example", "dataAlign":"left", "width": "40%" }
    ],
    "data": [
        {
            "attributeName": (<>
                <div>
                    name
                    <Badge type="success" label="Mandatory" size="11" className="pull-right" />
                </div>
            </>),
            "description": "Name of the Autocomplete Form Field which is used to identify when we have group of Form Fields within a Form",
            "example": (<Highlight content={`-`} lang="html"  />)
        },
        {
            "attributeName": (<>
                <div>
                    label
                    <Badge type="success" label="Mandatory" size="11" className="pull-right" />
                </div>
            </>),
            "description": "It is the Title of the Form Field",
            "example": (<Highlight content={`-`} lang="html"  />)
        },
        {
            "attributeName": (<>
                <div>
                    value
                    <Badge type="success" label="Mandatory" size="11" className="pull-right" />
                </div>
            </>),
            "description": "",
            "example": (<Highlight content={`-`} lang="html"  />)
        },
        {
            "attributeName": (<>
                <div>
                    placeholder
                    <Badge type="success" label="Mandatory" size="11" className="pull-right" />
                </div>
            </>), 
            "description": "It provides the Suggestion to the Customer - What to be entered within the Field",
            "example": (<Highlight content={`-`} lang="html"  />)
        },
        {
            "attributeName": (<>
                <div>
                    autoCompleteData
                    <Badge type="success" label="Mandatory" size="11" className="pull-right" />
                </div>
            </>), 
            "description": "It is an Array of data that provides the Suggestions to the Customer to Select while entering the data within the Autocomplete FormField",
            "example": (<Highlight content={`-`} lang="html"  />)
        },
        {
            "attributeName": (<>
                <div>
                    validation
                    <Badge type="success" label="Mandatory" size="11" className="pull-right" />
                </div>
            </>), 
            "description": (<div>It contains following Fields:
                <ul>
                    <li>required</li>
                    <li>minLength</li>
                    <li>maxLength</li>
                    <li>pattern</li>
                    <li>validate</li>
                </ul>
            </div>),


            "example": (<Highlight content={`<Autocomplete
            validation={{
             required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
             },
             minLength:{
                value: 2,
                errorMessage:"Message should be greator than 2"
             },
             maxLength:{
                value: 6,
                errorMessage:"Message should be less than 6"
             }
            }}
         />)`} lang="html"  />)

        }
    ]
};