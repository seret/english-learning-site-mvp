import React from 'react';

const PunctuationIcon = ({ className = '', size = 24, color = '#2563EB" }) => (
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
    <circle cx="8" cy="8" r="1.5" fill={color}/>
    <path d="M8 12V16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="20" r="2" stroke={color} strokeWidth="2"/>
    <path d="M16 8L19 5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 12L19 15" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 16L19 19" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M13 5H19" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M13 15H19" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M13 19H19" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default PunctuationIcon;
