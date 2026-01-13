import React, { useState } from 'react';
import { theme } from '../theme';

const PortfolioItem = ({ title, link, description, tech = [] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const cardStyle = {
    backgroundColor: theme.colors.lightBg,
    padding: '20px',
    borderRadius: '8px',
    borderLeft: `4px solid ${theme.colors.primaryRed}`,
    marginBottom: '20px',
    transition: 'opacity 0.3s ease, transform 0.2s ease',
    opacity: isHovered ? 0.9 : 1, // Adjusted slightly so text remains readable
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    cursor: 'default'
  };

  const linkStyle = {
    display: 'inline-block',
    margin: '0 0 10px 0',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textDecoration: isLinkHovered ? 'underline' : 'none',
    color: theme.colors.primaryRed, // Uses the theme accent color
    cursor: 'pointer',
    transition: 'color 0.2s ease'
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={{ margin: '0 0 5px 0', color: '#1a1a1a' }}>{title}</h3>
      
      {/* Link Section */}
      {link && (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={() => setIsLinkHovered(true)}
          onMouseLeave={() => setIsLinkHovered(false)}
        >
          View Project &rarr;
        </a>
      )}

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