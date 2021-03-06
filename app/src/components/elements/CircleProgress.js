import React from 'react';

function CircleProgress({radius,stroke,progress,className}){
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius*2*Math.PI
  const strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className={`progr_circle ${className}`}
      >
      <text>
        {progress}
      </text>
      <circle
        strokeWidth={ stroke }
        strokeDasharray={ circumference + ' ' + circumference }
        style={ { strokeDashoffset } }
        stroke-width={ stroke }
        r={ normalizedRadius }
        cx={ radius }
        cy={ radius }
        />
    </svg>
  );
}

export default CircleProgress;
