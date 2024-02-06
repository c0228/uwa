import React, { useEffect, useState } from "react";
import axios from "axios";
import { Select } from "e-ui-react";
import { Dropdown } from "e-ui-react";

export const SampleNote1 = ()=>{

const [timezone, setTimezone] = useState([]);

useEffect(() => {
  console.log("process.env.NEXUS_URL", process.env.NEXUS_URL);
  const url = process.env.NEXUS_URL + "timezones/list";
  axios.get(url).then((response) => {
    setTimezone(response.data);
  });
}, []);

return (<>
<Select
  placeholder="Select Timezone"
  options={timezone}
  className="navbar-layout"
  width="160"
  fontSize="12" />
</>);
 };


 export const SampleNote2 = ()=>{

const [timezone, setTimezone] = useState([]);

useEffect(() => {
  console.log("process.env.NEXUS_URL", process.env.NEXUS_URL);
  const url = process.env.NEXUS_URL + "timezones/list";
  axios.get(url).then((response) => {
    setTimezone(response.data);
  });
}, []);

return (<>
  <Dropdown placeholder="Select your Dropdown" menu={timezone} container={{
    searchLabel: "Search a Location"
  }} />
</>);
 };


 const SampleCode = () =>{
    return (<></>);
 };

 export default SampleCode;