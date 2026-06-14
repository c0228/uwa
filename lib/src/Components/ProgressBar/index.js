import React from 'react';

export const ProgressBar = ({
  height = 25,
  background = '#e9ecef',
  segments = []
}) => {
  return (
    <div
      className="progress"
      style={{
        height: `${height}px`,
        backgroundColor: background,
        border:'1px solid #000'
      }}
    >
      {segments.map((segment, index) => (
        <div
          key={index}
          className={`progress-bar progress-bar-striped progress-bar-animated`}
          role="progressbar"
          style={{
            width: `${segment.progress}%`,
            backgroundColor: segment.color
          }}
        >
          {segment.value}
        </div>
      ))}
    </div>
  );
};