import React from 'react';

const SentenceStructureIcon = ({ className = '', size = 24, color = '#2563EB" }) => (
  <svg 
    width={size}
    height={size}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <rect x="4" y="4" width="6" height="6" stroke={color} strokeWidth="2"/>
    <rect x="14" y="4" width="6" height="6" stroke={color} strokeWidth="2"/>
    <rect x="4" y="14" width="6" height="6" stroke={color} strokeWidth="2"/>
    <rect x="14" y="14" width="6" height="6" stroke={color} strokeWidth="2"/>
    <path d="M10 7H14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 10V14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 10V14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 17H14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default SentenceStructureIcon;
