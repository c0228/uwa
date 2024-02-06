import React from "react";
import { Table } from 'e-ui-react';

const tableData = [{  "city": "Hyderabad", "country": "India", "continent":"Asia" },
                  {  "city": "Tokyo", "country": "Japan", "continent":"Asia"  },
                  {  "city": "Sydney", "country": "Australia", "continent":"Australia"  },
                  {  "city": <div style={{ backgroundColor:'yellow' }}>New York</div>, "country": "USA", "continent":"North America"  }];

const columnDesc = [{ "columnName":"City", "id":"city", "width":"30%" },
    { "columnName":"Country", "id":"country", "width":"30%" },
    { "columnName":"Continent", "id":"continent", "width":"30%" }];

export const SampleNote1 = () =>{
 return (<>
  <Table title="Simple Table - DataSettings not defined" columnDesc={columnDesc} data={tableData} />
  </>);
};

export const SampleNote2 = () =>{
  return (<>
   <Table title="Simple Table - DataSettings defined and Empty" columnDesc={columnDesc} data={tableData} dataSettings={{ }}/>
   </>);
};

export const SampleNote3 = () =>{
  return (<>
   <Table title="Simple Table - DataSettings defined and it is true" columnDesc={columnDesc} data={tableData} dataSettings={{ dataSequence: true }}/>
   </>);
 };
 
 export const SampleNote4 = () =>{
   return (<>
    <Table title="Simple Table - DataSettings defined and it is false" columnDesc={columnDesc} data={tableData} dataSettings={{ dataSequence: false }}/>
   </>);
 };

 export const SampleNote5 = () =>{
  return (<>
   <Table title="Simple Table - DataSettings defined and with Search Required" 
          columnDesc={columnDesc}
          data={tableData} 
          dataSettings={{ required: { search: true } }}/>
  </>);
};

const SampleCode = () =>{
  return (<></>);
 };

export default SampleCode;