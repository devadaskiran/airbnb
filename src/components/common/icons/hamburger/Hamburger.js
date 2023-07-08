import React from 'react';

const Hamburger = ({ width, height, color, ...props }) => (
    <svg fill="none" height={height} viewBox="0 0 24 24" width={width} xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill="rgb(0,0,0)" fill-rule="evenodd"><path d="m2 11h20v2h-20z"/><path d="m2 5h20v2h-20z"/><path d="m2 17h20v2h-20z"/></g></svg>
);

export default Hamburger;
