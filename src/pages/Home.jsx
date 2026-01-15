import React from 'react';
import { theme } from '../theme';
import uwLogo from '../assets/Wisconsin_Badgers_logo.svg';
import PortfolioItem from '../components/PortfolioItem';

// --- Reusable Education Card Component ---
const EducationCard = ({ logo, degree, years, school }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.colors.lightBg,
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px',
      borderLeft: `4px solid ${theme.colors.primaryRed}`,
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    }}>
      {/* School Logo Container */}
      <div style={{ flexShrink: 0, marginRight: '25px' }}>
        {logo ? (
          <img src={logo} alt={`${school} logo`} style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
        ) : (
          <div style={{ width: '70px', height: '70px', backgroundColor: '#e0e0e0', borderRadius: '4px' }}></div>
        )}
      </div>

      {/* Text Content */}
      <div>
        <h3 style={{ margin: '0', fontSize: '1.2rem', color: theme.colors.text, fontWeight: '600' }}>
          {degree}, {years}
        </h3>
        <p style={{ margin: '8px 0 0 0', fontSize: '1.05rem', color: theme.colors.lightText }}>
          {school}
        </p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      
      {/* Introduction Header */}
      <header style={{ borderBottom: `4px solid ${theme.colors.primaryRed}`, paddingBottom: '20px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', margin: 0, color: '#1a1a1a' }}>Jerry Luo</h1>
        <p style={{ fontSize: '1.2rem', color: theme.colors.primaryRed, fontWeight: 'bold' }}>
          Mathematics, Computer Science & Economics @ UW-Madison
        </p>
        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <a href="mailto:sluo85@wisc.edu" style={{ color: '#555' }} target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://linkedin.com/in/jerbear" style={{ color: '#555' }} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/jerryluo457" style={{ color: '#555' }} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </header>

      {/* About Me Section */}
      <section>
        <h2 style={{ color: theme.colors.primaryRed }}>About Me</h2>
        <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
          I am a sophomore and first-generation college student at the University of Wisconsin-Madison.
          My academic focus lies at the intersection of rigorous mathematics and computer science, 
          specifically within the computational sciences and financial mathematics.
        </p>
      </section>

      {/* Education Section */}
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ color: theme.colors.primaryRed }}>Education</h2>
        
        <EducationCard
          logo={uwLogo}
          degree="B.S. in Mathematics, Computer Science, and Economics"
          years="2027(?)" 
          school="University of Wisconsin-Madison, CDIS & L&S"
        />
      </section>
      {/* Project Highlight secion */}
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ color: theme.colors.primaryRed }}>Recent Projects</h2>
            <PortfolioItem 
              title="Oligarchy Simulator"
              link="https://github.com/jerryluo457/OligarchySim"
              description="A computational model exploring Economic Elite Domination theory. This interactive simulation visualizes how democratic responsiveness decays when policy outcomes systematically favor elite interests over the public will. It draws on theoretical frameworks from Gilens & Page (2014) and Jeffrey Winters (2011) to model the tension between electoral democracy and oligarchic capture."
              tech={["Python", "streamlit"]}
            />
            <PortfolioItem 
              title="Agentic Market Simulator"
              link="https://github.com/jerryluo457/AgenticMarketSim"
              description="The Agentic Market Simulator is a high-performance, agent-based modeling system designed to simulate financial market microstructure and limit order book dynamics in real-time. The project visualizes the interactions between various autonomous trading agents and a human user, demonstrating phenomena such as liquidity crises, mean reversion, and momentum-driven volatility.

    The system is architected as a hybrid application: a high-speed C++ engine handles the order book matching and agent logic, while a Python/FastAPI server manages the WebSocket communication to a web-based frontend dashboard."
              tech={["C++", "Python", "LightweightCharts", "ZeroMQ"]}
            />
      </section>
      {/* Research Highlight Section */}
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ color: theme.colors.primaryRed }}>Current Research Focus</h2>
        <div style={{ padding: '20px', backgroundColor: theme.colors.lightBg, borderLeft: `4px solid ${theme.colors.primaryRed}` }}>
          <h3 style={{ marginTop: 0 }}>TBD</h3>
          <p style={{ margin: 0 }}>
            TBD
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;