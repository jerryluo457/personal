import React from 'react';
import { theme } from '../theme';
import YearDropdown from '../components/YearDropdown';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ 
        color: theme.colors.primaryRed, 
        marginBottom: '40px', 
        textAlign: 'center',
        fontSize: '2.5rem'
      }}>
        Selected Works
      </h1>

      {/* --- 2025 Projects --- */}
      <YearDropdown year="2025">
        <PortfolioItem 
          title="Neural Ordinary Differential Equations"
          role="Research Assistant (UW-Madison Dept. of Math)"
          description="Studied continuous-depth modeling and the adjoint sensitivity method. Implemented Neural ODE frameworks in JAX and PyTorch, achieving a 94.9% error reduction over ResNet baselines on planetary orbit prediction."
          tech={["JAX", "PyTorch", "Python", "Differential Equations"]}
        />
        <PortfolioItem 
          title="Materials Science AI Optimization"
          role="AI/ML Researcher"
          description="Developed and optimized PyTorch models on CUDA GPUs to predict material properties. Achieved >85% accuracy across all models and created visualization tools using Matplotlib and Seaborn."
          tech={["PyTorch", "CUDA", "Computer Vision", "Matplotlib"]}
        />
        <PortfolioItem 
          title="Campus Travel Time Guide"
          role="Full Stack Developer"
          description="Designed a routing application using Dijkstra's Algorithm to find shortest paths on campus. Built a custom generic Hashtable with dynamic resizing and chaining for collision resolution."
          tech={["Java", "JUnit5", "Algorithms", "Data Structures"]}
        />
      </YearDropdown>

      {/* --- 2024 Projects --- */}
      <YearDropdown year="2024">
        <PortfolioItem 
          title="Cache Simulator"
          role="Systems Programmer"
          description="Built a low-level cache simulator in C that handles dynamic memory allocation. Simulated memory traces to analyze cache hits, misses, and evictions using an LRU (Least Recently Used) policy."
          tech={["C", "Linux", "Memory Management", "Systems Programming"]}
        />
      </YearDropdown>

    </div>
  );
};

export default Portfolio;