import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const Navbar = () => {
  // Styles for the navigation links
  const linkStyle = {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.95rem',
    marginLeft: '25px'
  };

  return (
    <nav style={{ 
      backgroundColor: theme.colors.darkRed, 
      padding: '15px 40px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      position: 'sticky', // Keeps nav at top when scrolling
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo / Name */}
      <div style={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 'bold' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Jerry Luo</Link>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex' }}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/resume">Resume/CV</Link>
        <Link style={linkStyle} to="/coursework">Coursework</Link>
        <Link style={linkStyle} to="/portfolio">Portfolio</Link>
      </div>
    </nav>
  );
};

export default Navbar;