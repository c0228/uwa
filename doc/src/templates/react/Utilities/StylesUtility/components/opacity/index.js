import React from "react";
import { Card } from "e-ui-react";

const OpacityUtility = ()=>{
 return (<>
 <Card>
    <div style={{ padding:'15px' }}>
        <div>
            <h4 className="bs-header" style={{ borderBottom:'1px solid #ccc', paddingBottom:'6px', marginBottom:'5px' }}>
                <b>Opacity Classes</b>
            </h4>
        </div>
        <div style={{ fontSize:'12px' }}>
            <div><code><b>.opacity-0 &#123; opacity: 0; &#125;</b></code></div>
            <div><code><b>.opacity-25 &#123; opacity: 25; &#125;</b></code></div>
            <div><code><b>.opacity-50 &#123; opacity: 50; &#125;</b></code></div>
            <div><code><b>.opacity-75 &#123; opacity: 75; &#125;</b></code></div>
            <div><code><b>.opacity-100 &#123; opacity: 100; &#125;</b></code></div>
        </div>
    </div>
 </Card>
 </>);
};

export default OpacityUtility;