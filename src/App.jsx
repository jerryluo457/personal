// src/App.jsx
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Coursework from './pages/Coursework';
import Portfolio from './pages/Portfolio';
import { theme } from './theme';

const App = () => {
  return (
    <Router>
      <div style={{ 
        fontFamily: theme.fonts.main, 
        color: theme.colors.text, 
        backgroundColor: theme.colors.background,
        minHeight: '100vh' 
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/coursework" element={<Coursework />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;