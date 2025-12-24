import React, { useState } from 'react';
import { theme } from '../theme';

const CourseCard = ({ code, title, semester, instructor, description, prerequisites, themes }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor: theme.colors.lightBg,
    padding: '20px',
    borderRadius: '8px',
    borderLeft: `4px solid ${theme.colors.primaryRed}`,
    marginBottom: '20px',
    transition: 'opacity 0.3s ease', // Smooth fade transition
    opacity: isHovered ? 0.75 : 1,   // Fades to 75% opacity when hovered
    cursor: 'default'
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
        <h3 style={{ margin: 0, color: theme.colors.primaryRed }}>{code}: {title}</h3>
        <span style={{ fontSize: '0.9rem', color: theme.colors.lightText, fontWeight: 'bold' }}>{semester}</span>
      </div>
      
      <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem', fontWeight: 'bold' }}>
        Instructor: <span style={{ fontWeight: 'normal' }}>{instructor}</span>
      </p>

      <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#444' }}>
        {description}
      </p>

      <div style={{ marginTop: '15px', fontSize: '0.9rem' }}>
        <p style={{ margin: '5px 0' }}><strong>Prerequisites:</strong> {prerequisites}</p>
        <p style={{ margin: '5px 0' }}><strong>Major Themes:</strong> {themes}</p>
      </div>
    </div>
  );
};

export default CourseCard;