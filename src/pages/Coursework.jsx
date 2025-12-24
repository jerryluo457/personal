import React from 'react';
import { theme } from '../theme';
import CourseCard from '../components/CourseCard';

const Coursework = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <h2 style={{ color: theme.colors.primaryRed, marginBottom: '30px' }}>Coursework Review</h2>
      
      {/* Featured Course Card */}
      <CourseCard 
        code="CS 577"
        title="Introduction to Algorithms"
        semester="Fall 2025"
        instructor="Marc Renault"
        description="Basic paradigms for the design and analysis of efficient algorithms: greed, divide-and-conquer, dynamic programming, reductions, and the use of randomness. Computational intractability including typical NP-complete problems and ways to deal with them."
        prerequisites="CS 400 (Programming III) and MATH 240 (Discrete Mathematics)"
        themes="Divide & Conquer, Dynamic Programming, NP-Completeness, Graph Primitives"
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '40px' }}>
        
        {/* Computer Science Column */}
        <div>
          <h3 style={{ borderLeft: `3px solid ${theme.colors.primaryRed}`, paddingLeft: '10px' }}>Computer Science</h3>
          <ul style={{ lineHeight: '2' }}>
            <li>Algorithms</li>
            <li>Machine Learning Theory</li>
            <li>Artificial Intelligence</li>
            <li>Databases</li>
          </ul>
        </div>
        
        {/* Math & Finance Column */}
        <div>
          <h3 style={{ borderLeft: `3px solid ${theme.colors.primaryRed}`, paddingLeft: '10px' }}>Mathematics & Finance</h3>
          <ul style={{ lineHeight: '2' }}>
            <li>Stochastic Processes</li>
            <li>Real Analysis</li>
            <li>Linear Algebra</li>
            <li>Statistics & Finance</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Coursework;