import React from "react";
import { Highlight, Badge, ReactJSXToOutputViewer, Autocomplete } from 'e-ui-react';

export const ComponentAttributesTable = {
    "columns": [{ "columnName": "Attribute Name", "id": "attributeName", "dataAlign":"left" },
        { "columnName": "Description", "id": "description", "dataAlign":"left" },
        { "columnName": "Example", "id": "example", "dataAlign":"left" }
    ],
    "data": [
    {
        "attributeName": (<>
            <div>
                children 
                <Badge type="success" label="Mandatory" size="11" className="pull-right" />
            </div>
        </>),
        "description": (<div>
            We pass other JSX tags within the <code><b>{'<Card>{...}<Card/>'}</b></code>.
        </div>),
        "example": (<Highlight content={`<Card>
{children}    
</Card>`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                className 
                <Badge type="warning" label="Optional" size="11" className="pull-right" />
            </div>
        </>),
        "description": (<div>
            We provide classes that need to be applied to <code><b>{'<Card>{...}<Card/>'}</b></code>
        </div>),
        "example": (<Highlight content={`<Card className="">
{...}    
</Card>`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                padding 
                <Badge type="warning" label="Optional" size="11" className="pull-right" />
            </div>
        </>),
        "description": (<div>
            We provide Number in <code><b>padding</b></code> which internal takes in <code><b>pixels</b></code>.<br/><br/>
            <b>Example</b>, <code><b>padding={'{15}'}</b></code> converts into <code><b>padding: 15px;</b></code>
        </div>),
        "example": (<Highlight content={`<Card padding={15}>
{...}    
</Card>`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                backgroundColor 
                <Badge type="warning" label="Optional" size="11" className="pull-right" />
            </div>
        </>),
        "description": (<div>
            We can add <code><b>Default Colors</b></code> from Library or <code><b>HTML Colors</b></code> or 
            <br/> we can add <code><b>Color HexaDecimal Codes</b></code> 
        </div>),
        "example": (<Highlight content={`<Card backgroundColor="">
{...}    
</Card>`} lang="html"  />)
    },
    {
        "attributeName": (<>
            <div>
                style 
                <Badge type="warning" label="Optional" size="11" className="pull-right" />
            </div>
        </>),
        "description": (<div>
            Add the CSS, in Camel Case instead of hyphenated CSS syntax.<br/><br/>
            <b>Example</b>, <code><b>fontSize</b></code> instead of <code><b>font-size</b> </code>.
        </div>),
        "example": (<Highlight content={`<Card style={{ ... }}>
{...}    
</Card>`} lang="html"  />)
    }]
};