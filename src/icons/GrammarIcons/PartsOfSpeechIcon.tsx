import React from 'react';

const PartsOfSpeechIcon = ({ className = '', size = 24, color = '#2563EB' }) => (
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
    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4Z" stroke={color} strokeWidth="2"/>
    <path d="M7 4V20" stroke={color} strokeWidth="2"/>
    <text x="12" y="10" textAnchor="middle" fill={color} fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold">ABC</text>
    <path d="M9 8H15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 11H15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 14H15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default PartsOfSpeechIcon;
