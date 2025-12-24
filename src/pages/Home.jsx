import React from 'react';
import { theme } from '../theme';

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
          <a href="mailto:sluo85@wisc.edu" style={{ color: '#555' }}>Email</a>
          <a href="https://linkedin.com/in/jerbear" style={{ color: '#555' }}>LinkedIn</a>
        </div>
      </header>

      {/* About Me Section */}
      <section>
        <h2 style={{ color: theme.colors.primaryRed }}>About Me</h2>
        <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
          I am a sophomore and first-generation college student at the University of Wisconsin-Madison.
          My academic focus lies at the intersection of rigorous mathematics and computer science, 
          specifically within deep learning and dynamical systems.
        </p>
      </section>

      {/* Research Highlight Section */}
      <section style={{ marginTop: '30px' }}>
        <h2 style={{ color: theme.colors.primaryRed }}>Current Research Focus</h2>
        <div style={{ padding: '20px', backgroundColor: theme.colors.lightBg, borderLeft: `4px solid ${theme.colors.primaryRed}` }}>
          <h3 style={{ marginTop: 0 }}>Neural Ordinary Differential Equations</h3>
          <p>
            I am currently researching continuous-depth modeling at the UW-Madison Department of Mathematics. 
            My work involves implementing frameworks in JAX and PyTorch to model physical systems like planetary orbits, 
            achieving significant error reduction over traditional ResNet baselines.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;