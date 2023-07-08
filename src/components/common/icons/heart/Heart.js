import React from 'react';

const Heart = ({ width, height, color, outlined, ...props }) => (
  <div>
    {outlined ? 
      <svg
      version="1.1"
      id="svg582"
      xmlSpace="preserve"
      width={width}
      height={height}
      viewBox="0 0 682.66669 682.66669"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsSvg="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs id="defs586">
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath596">
          <path
            d="M 0,512 H 512 V 0 H 0 Z"
            id="path594"
          />
        </clipPath>
      </defs>
      <g id="g588" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
        <g id="g590">
          <g id="g592" clipPath="url(#clipPath596)">
            <g id="g598" transform="translate(372.8906,462.4062)">
              <path
                d="M 0,0 C -54.011,0 -99.834,-37.873 -116.891,-90.653 -133.946,-37.873 -179.771,0 -233.781,0 c -68.543,0 -123.633,-60.886 -124.108,-135.991 -0.866,-137.196 240.998,-276.821 240.998,-276.821 0,0 240.13,139.625 240.997,276.821 C 124.581,-60.886 68.542,0 0,0 Z"
                style={{
                  fill: 'none',
                  stroke: '#000000',
                  strokeWidth: 30,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 10,
                  strokeDasharray: 'none',
                  strokeOpacity: 1,
                }}
                id="path600"
              />
            </g>
          </g>
        </g>
      </g>
    </svg> : <svg id="Capa_1" enable-background="new 0 0 512.001 512.001" height="512" viewBox="0 0 512.001 512.001" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m256.001 477.407c-2.59 0-5.179-.669-7.499-2.009-2.52-1.454-62.391-36.216-123.121-88.594-35.994-31.043-64.726-61.833-85.396-91.513-26.748-38.406-40.199-75.348-39.982-109.801.254-40.09 14.613-77.792 40.435-106.162 26.258-28.848 61.3-44.734 98.673-44.734 47.897 0 91.688 26.83 116.891 69.332 25.203-42.501 68.994-69.332 116.891-69.332 35.308 0 68.995 14.334 94.859 40.362 28.384 28.563 44.511 68.921 44.247 110.724-.218 34.393-13.921 71.279-40.728 109.632-20.734 29.665-49.426 60.441-85.279 91.475-60.508 52.373-119.949 87.134-122.45 88.588-2.331 1.354-4.937 2.032-7.541 2.032z"/></svg>
    }
  </div>
);

export default Heart;
