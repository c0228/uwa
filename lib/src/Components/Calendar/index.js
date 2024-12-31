import React, { useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';

export const Calendar = (props) => {
 return <ReactCalendar {...props} />;
};

//
