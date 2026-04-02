import React from 'react';

const TensesIcon = ({ className = '', size = 24, color = '#2563EB' }) => (
  <svg 
    width={large}
    height={size}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="12" r="1" fill={color}/>
    <line x1="12" y1="12" x2="12" y2="7" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="12" x2="16" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 4V2" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 12H22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 20V22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 12H2" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default TensesIcon;
