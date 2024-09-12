import React, { useEffect } from "react";
import './index.css';

export const ProgressCircle = ({ size = 80, percentage = 4.2 }) => {
  useEffect(() => {
    const circles = document.querySelectorAll('.progress-circle');
    circles.forEach((el) => {
      const circle = el.querySelector('.progress');
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (percentage / 100) * circumference;

      circle.style.strokeDasharray = `${circumference}`;
      circle.style.strokeDashoffset = `${offset}`;
    });
  }, [percentage]);

  const radius = (size / 2) - 5; // 5 is an arbitrary stroke width offset
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="progress-circle" data-percentage={percentage}>
      <div className="progress-text" style={{ top: radius-8, left:(percentage?.toString()?.length===1)?(radius-5):(radius-10) }}><b>{percentage}%</b></div>
      <svg width={size} height={size}>
        <circle className="bg" cx={size / 2} cy={size / 2} r={radius} style={{ stroke: '#ddd' }}></circle>
        <circle className="progress" cx={size / 2} cy={size / 2} r={radius} style={{ stroke: '#f44336', strokeDasharray: circumference, strokeDashoffset: circumference }}></circle>
      </svg>
    </div>
  );
};

