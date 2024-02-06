import React from "react";
import { Timeline } from 'e-ui-react';

const data = [{ 
  align: "left",
  content: (<>
      <h2 className="bs-header">2017</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim 
        fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
  </>)
},
{ 
  align: "right",
  content: (<>
      <h2 className="bs-header">2016</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim 
        fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p> 
  </>)
},
{ 
  align: "right",
  content: (<>
    <h2 className="bs-header">2016</h2>
    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim 
      fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>  
  </>)
},
{ 
  align: "right",
  content: (<>
    <h2  className="bs-header">2016</h2>
    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim 
      fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>  
  </>)
},
{ 
align: "left",
content: (<>
    <h2 className="bs-header">2015</h2>
    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim 
    fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
</>)
},
{ 
align: "right",
content: (<>
    <h2 className="bs-header">2012</h2>
    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim 
    fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>    
</>)
},
{ 
align: "left",
content: (<>
    <h2 className="bs-header">2011</h2>
    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim 
    fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
</>)
}];

export const SampleNote1 = () =>{

 return (<>
  <Timeline data={data} template={1} />
  </>);
};

export const SampleNote2 = () =>{

  return (<>
   <Timeline data={data} withCard={true} template={1} />
   </>);
 };

export const SampleNote3 = () =>{
 return (<>
    <Timeline data={data} withCard={true} template={2} />
 </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;