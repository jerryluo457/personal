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
      {/* --- 2026 Projects --- */}
      <YearDropdown year="2026">
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
      </YearDropdown>
      {/* --- 2025 Projects --- */}
      <YearDropdown year="2025">
      <PortfolioItem 
          title="American Options Pricing Engine"
          link="https://github.com/jerryluo457/basicoptionpricing"
          description="high-performance computational finance tool designed to price American Options using a vectorized Binomial Tree (Cox-Ross-Rubinstein) model and concepts from dynamic programming."
          tech={["Python", "Dynamic Programming", "Binomial Tree"]}
        />

        <PortfolioItem 
          title="Implementations of Theoretical Algirthms"
          link="https://github.com/jerryluo457/algocollection"
          description="A comprehensive collection of fundamental algorithms implemented in C. This repository covers graph theory, greedy strategies, dynamic programming, and advanced network analysis."
          tech={["Python", "Algorithms"]}
        />
        <PortfolioItem 
          title="Campus Travel Time Guide"
          link="https://github.com/jerryluo457/campusmap"
          description="Designed a routing application using Dijkstra's Algorithm to find shortest paths on campus. Built a custom generic Hashtable with dynamic resizing and chaining for collision resolution."
          tech={["Java", "JUnit5", "Algorithms", "Data Structures"]}
        />
        <PortfolioItem 
          title="Cache Simulator"
          link="https://github.com/jerryluo457/cachesim"
          description="Built a low-level cache simulator in C that handles dynamic memory allocation. Simulated memory traces to analyze cache hits, misses, and evictions using an LRU (Least Recently Used) policy."
          tech={["C", "Linux", "Memory Management", "Systems Programming"]}
        />
      </YearDropdown>


    </div>
  );
};

export default Portfolio;