import React, { useState } from 'react';
import { theme } from '../theme';

const PortfolioItem = ({ title, role, description, tech = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor: theme.colors.lightBg,
    padding: '20px',
    borderRadius: '8px',
    borderLeft: `4px solid ${theme.colors.primaryRed}`,
    marginBottom: '20px',
    transition: 'opacity 0.3s ease, transform 0.2s ease', // Smooth fade & subtle lift
    opacity: isHovered ? 0.8 : 1, // Fade effect
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)', // Optional subtle lift
    cursor: 'default'
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={{ margin: '0 0 5px 0', color: '#1a1a1a' }}>{title}</h3>
      <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: theme.colors.lightText, fontWeight: 'bold' }}>
        {role}
      </p>
      <p style={{ margin: '0 0 15px 0', lineHeight: '1.6', fontSize: '0.95rem', color: theme.colors.text }}>
        {description}
      </p>
      
      {/* Tech Stack Tags */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {tech.map((t, i) => (
          <span key={i} style={{ 
            fontSize: '0.8rem', 
            backgroundColor: '#fff', 
            border: '1px solid #ddd', 
            padding: '4px 8px', 
            borderRadius: '4px',
            color: '#555'
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PortfolioItem;