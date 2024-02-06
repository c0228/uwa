import React from "react";
import { DateTimePicker } from 'e-ui-react';

export const SampleNote1 = () =>{
 return (<>
 <DateTimePicker type="datePicker" id="date" name="date" />
 <DateTimePicker type="datePicker" id="date" name="date" value="2022-11-12" 
  minValue="2022-12-10" maxValue="2023-01-15" />
 </>);
};

export const SampleNote2 = () =>{
 return (<>
 <DateTimePicker type="timePicker" id="time" name="time" />
 <DateTimePicker type="timePicker" id="time" name="time" value="23:59" />
 </>);
};

export const SampleNote3 = () =>{
 return (<>
 <DateTimePicker type="dateTimePicker" id="dateTime" name="dateTime" />
 <DateTimePicker type="dateTimePicker" id="dateTime" name="dateTime" value="1991-10-15 23:59" />
 </>);
};

const SampleCode = () =>{
 return (<></>);
};
  
export default SampleCode;