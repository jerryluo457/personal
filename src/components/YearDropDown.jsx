import React, { useState } from 'react';
import { theme } from '../theme';

const YearDropdown = ({ year, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: '30px' }}>
      {/* Clickable Header */}
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          borderBottom: `2px solid ${theme.colors.text}`,
          paddingBottom: '10px',
          cursor: 'pointer',
          userSelect: 'none'
        }}
      >
        <h2 style={{ 
          fontSize: '2.5rem', 
          margin: 0, 
          color: theme.colors.primaryRed,
          fontWeight: 'bold'
        }}>
          {year}
        </h2>
        
        {/* Animated Chevron */}
        <span style={{ 
          fontSize: '1.5rem', 
          color: theme.colors.text, 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}>
          ▼
        </span>
      </div>

      {/* Dropdown Content Area */}
      <div style={{ 
        maxHeight: isOpen ? '2000px' : '0', // Large max-height for animation
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden', 
        transition: 'all 0.5s ease-in-out',
        paddingTop: isOpen ? '20px' : '0'
      }}>
        {children}
      </div>
    </div>
  );
};

export default YearDropdown;