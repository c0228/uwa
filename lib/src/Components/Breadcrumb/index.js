import React from "react";
import './index.css';

export const Breadcrumb = ({ data }) =>{
 return (<>
 <div>
	 <nav aria-label="breadcrumb">
	  <ol className="breadcrumb">
        {data?.map((d,i)=>{
            if(i===(data?.length-1)){
                return (<li key={i} className="breadcrumb-item active" aria-current="page">{d?.label}</li>);
            } else {
                return (<li key={i} className="breadcrumb-item"><a href={(d?.url)?(d?.url):'#'}>{d?.label}</a></li>);
            }
        })}
	  </ol>
	</nav>
</div>
 </>);
};
