import React from 'react';

const Cave = ({ width, height, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 511 511"
    style={{ enableBackground: 'new 0 0 511 511' }}
    xmlSpace="preserve"
    width={width}
    height={height}
  >
    <g>
      <path
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
        }}
        d="M405.34,453.963H7.5l41.306-198.62c1.135-5.458,4.551-10.17,9.386-12.947l41.907-24.064l12.28-22.585"
      />
      <path
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
        }}
        d="M126.785,169.252l20.713-38.095c2.52-4.634,6.809-8.051,11.89-9.471l54.396-15.199l46.405-44.085c5.286-5.021,12.93-6.677,19.819-4.292l36.46,12.621l26.588,43.091l24.754,32.089l32.089,18.336l27.505,89.848l43.641,34.751c3.777,3.008,6.305,7.309,7.094,12.073L503.5,453.963h-68.16"
      />
      <path
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
        }}
        d="M159.389,121.687c-0.201,0.056-0.391,0.135-0.589,0.197c8.1,22.457,19.739,49.577,29.501,52.289c16.917,4.699,21.617-27.256,33.835-32.895c12.218-5.639,35.715,5.639,39.474,24.436c3.759,18.797,8.458,42.294,30.075,40.414c21.617-1.88,14.098-38.534,32.895-32.895c18.797,5.639,12.218,93.046,41.354,91.166c21.108-1.362,24.954-52.046,39.407-82.378"
      />
      <line
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
        }}
        x1="118.751"
        y1="453.963"
        x2="127.811"
        y2="401.296"
      />
      <polyline
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
        }}
        points="132.92,371.602 140.368,328.309 158.8,306.693 194.879,255.5 266.308,278.497 282.07,317.971 302.963,344.287 310.482,453.963"
      />
      <polyline
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
        }}
        points="165.363,453.963 186.98,328.309 205.412,306.693 232.871,267.732"
      />
    </g>
  </svg>
);

export default Cave;
