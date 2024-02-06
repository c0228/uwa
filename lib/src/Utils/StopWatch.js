import React, { useEffect, useState } from 'react';

export const StopWatchTimer = ({ defHr, defMin, defSec, onCallBack, onTimerEnd }) => {
  const [time, setTime] = useState({
    hours: defHr,
    minutes: defMin,
    seconds: defSec
  });

  useEffect(()=>{
    if(onCallBack) { onCallBack(time); }
  },[time]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;

        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }

        if (minutes < 0) {
          minutes = 59;
          hours--;
        }

        if (hours < 0) {
          hours = 24;
        }

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          onTimerEnd(); // Call the callback function when the timer reaches 0
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [onTimerEnd]);

  return (
    <span style={{ fontSize:'16px', fontWeight:'bold' }}>
        {time.hours.toString().padStart(2, '0')+" Hr : "}
        {time.minutes.toString().padStart(2, '0')+" Min : "}
        {time.seconds.toString().padStart(2, '0')+" Sec"}
    </span>
  );
};

export default StopWatchTimer;
