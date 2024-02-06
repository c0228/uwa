import React from 'react';

export const Stackblitz = ({ data }) =>{

 return (<>
 <form id={data.id} method="post" action="https://stackblitz.com/run" target="_blank">
  {Object.keys(data.files).map((f,i)=>{
    return <input key={i} type="hidden" name={'project[files]['+f+']'} value={data.files[f]} />
  })}
 <input type="hidden" name="project[title]" value={data.title} />
 <input type="hidden" name="project[description]" value={data.description} />
 <input type="hidden" name="project[dependencies]" value={JSON.stringify(data.dependencies)} />
 <input type="hidden" name="project[template]" value={data.template} />
 <input type="hidden" name="project[settings]" value={JSON.stringify(data.settings)} />
</form>
 <button onClick={()=>document.getElementById(data.id).submit()}>{data.label}</button>
 </>);
};