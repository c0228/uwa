import moment from 'moment';

export const TIMESTAMP_TZ_FORMAT = "DD MMMM YYYY, hh:mm:ss A [IST]";

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