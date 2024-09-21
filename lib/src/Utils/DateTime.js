import moment from 'moment';

export const TIMESTAMP_TZ_FORMAT = "DD MMMM YYYY, hh:mm:ss A [IST]";
export const TIMESTAMP_TZ_FORMAT2 = "YYYY-MM-DDTHH:mm:ss.SSSZ"; // 2024-09-09T16:36:21.087Z

export const GetCurrentTimeStamp = ()=>{
 const date = new Date();
 return (date.getDate()+"-"+(date.getMonth() + 1)+"-"+date.getFullYear()+" "
        +date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
};

export const GetDurationTimeStamp = (beforeDays, afterDays)=>{
 return { beforeTimeStamp:'', currentTimeStamp:'', afterTimeSTamp:'' };
};

export const getDiffTimeFromNow = (targetDateString, format) => {
  const targetDate = moment(targetDateString, format);
  const currentDate = moment();
  const timeDifference = targetDate.diff(currentDate); // Calculate the time difference using the diff() function
  const remainingHours = Math.floor(timeDifference / (1000 * 60 * 60));
  const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  return { remainingHours, remainingMinutes, remainingSeconds };
};

export const stopWatchTimer = (defHr, defMin, defSec)=>{
 let actualValue = '';
 let hours = defHr;let minutes = defMin;let seconds = defSec;
 const timer = setInterval(() => {
   seconds--;
   if (seconds < 0) { seconds = 59; minutes--; }
   if (minutes < 0) { minutes = 59; hours--; }
   if (hours < 0) { hours = 24; }
      
   actualValue= hours.toString().padStart(2, '0')+":"+minutes.toString().padStart(2, '0')+":"+
        seconds.toString().padStart(2, '0');
      
   if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(timer);
    startTimer();
   }
 }, 1000);
};

export const formatDate = (dateString, options) =>{
/*
const options = { 
  year: 'numeric', 
  month: 'short', 
  day: 'numeric', 
  hour: 'numeric', 
  minute: 'numeric', 
  second: 'numeric', 
  hour12: true 
};
===================================
NOTES: 
===================================
The `options` object you pass to the `toLocaleString` method in JavaScript allows you to format the date and time in various ways. Below is a comprehensive list of the possible options you can use.

### 1. **Date Options**
These options control how the date (year, month, day) is displayed:

- **`year`**:
  - `"numeric"`: Displays the year as four digits (e.g., 2024).
  - `"2-digit"`: Displays the year as two digits (e.g., 24 for 2024).

- **`month`**:
  - `"numeric"`: Displays the month as a number (e.g., 9 for September).
  - `"2-digit"`: Displays the month as a two-digit number (e.g., 09 for September).
  - `"narrow"`: Displays the shortest form of the month (e.g., "S" for September).
  - `"short"`: Displays the abbreviated month name (e.g., "Sep").
  - `"long"`: Displays the full month name (e.g., "September").

- **`day`**:
  - `"numeric"`: Displays the day as a number (e.g., 13).
  - `"2-digit"`: Displays the day as a two-digit number (e.g., 13 becomes 13, but 5 becomes 05).

- **`weekday`**:
  - `"narrow"`: Displays the shortest form of the weekday (e.g., "F" for Friday).
  - `"short"`: Displays an abbreviated weekday name (e.g., "Fri").
  - `"long"`: Displays the full weekday name (e.g., "Friday").

### 2. **Time Options**
These options control how the time (hours, minutes, seconds) is displayed:

- **`hour`**:
  - `"numeric"`: Displays the hour as a number (e.g., 11).
  - `"2-digit"`: Displays the hour as a two-digit number (e.g., 11 becomes 11, but 5 becomes 05).

- **`minute`**:
  - `"numeric"`: Displays the minute as a number (e.g., 32).
  - `"2-digit"`: Displays the minute as a two-digit number (e.g., 32 becomes 32, but 5 becomes 05).

- **`second`**:
  - `"numeric"`: Displays the second as a number (e.g., 38).
  - `"2-digit"`: Displays the second as a two-digit number (e.g., 38 becomes 38, but 5 becomes 05).

- **`hour12`**:
  - `true`: Uses a 12-hour clock (with AM/PM).
  - `false`: Uses a 24-hour clock.

- **`timeZoneName`**:
  - `"short"`: Displays the abbreviated time zone (e.g., "PST").
  - `"long"`: Displays the full time zone name (e.g., "Pacific Standard Time").

### 3. **Time Zone Options**

- **`timeZone`**: You can specify a time zone to use for the formatting. By default, it uses the user's local time zone.
  - Example: `timeZone: "UTC"`, `timeZone: "America/New_York"`.

### 4. **Combination Options**
You can combine multiple options to achieve a variety of date and time formats.

Here are some examples:

```javascript
const options1 = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZoneName: 'short',
  hour12: true
}; 
// Example Output: "Friday, September 13, 2024, 11:32:38 PM GMT"

const options2 = {
  year: '2-digit',
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
};
// Example Output: "Sep 13, 24, 23:32:38"

const options3 = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  timeZone: 'UTC'
};
// Example Output: "9/13/2024, 11:32 AM"
```

### Full List of Available Options:
```javascript
const options = {
  year: 'numeric' | '2-digit',
  month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
  day: 'numeric' | '2-digit',
  weekday: 'narrow' | 'short' | 'long',
  hour: 'numeric' | '2-digit',
  minute: 'numeric' | '2-digit',
  second: 'numeric' | '2-digit',
  hour12: true | false,
  timeZone: 'UTC' | 'America/New_York' | etc.,
  timeZoneName: 'short' | 'long'
};
```

You can adjust and combine these options to format the date and time exactly as you need.
*/
// Convert the string into a Date object
const dateObj = new Date(dateString.replace(' ', 'T'));
return dateObj.toLocaleString('en-US', options);
};