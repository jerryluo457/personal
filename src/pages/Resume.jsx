import React from 'react';

const Resume = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', fontFamily: 'Arial, Helvetica, sans-serif', color: '#111', lineHeight: '1.45', padding: '0 20px' }}>

      {/* Header */}
      <div style={{ borderBottom: '2px solid #222', paddingBottom: '12px', marginBottom: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '32px', fontWeight: 700, textTransform: 'uppercase' }}>Jerry Luo</h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '15px' }}>
          Lake Worth, FL &nbsp;|&nbsp;
          <a href="mailto:sluo85@wisc.edu" style={{ color: '#111', textDecoration: 'underline' }}>sluo85@wisc.edu</a> &nbsp;|&nbsp;
          <a href="https://linkedin.com/in/jerbear" target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'underline' }}>linkedin.com/in/jerbear</a> <br/>
          <a href="https://jerryluo457.github.io/personal" target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'underline' }}>jerryluo457.github.io/personal</a> &nbsp;|&nbsp;
          <a href="http://github.com/jerryluo457" target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'underline' }}>github.com/jerryluo457</a>
        </p>
      </div>

      {/* Experience */}
      <section style={{ marginBottom: '26px' }}>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ccc', paddingBottom: '4px', textTransform: 'uppercase' }}>Experience</h2>

        <div style={{ marginBottom: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <h3 style={{ margin: 0, fontSize: '17px' }}>Researcher — Neural Ordinary Differential Equations</h3>
            <span style={{ fontSize: '15px' }}>Sep 2025 – Dec 2025</span>
          </div>
          <p style={{ margin: 0, fontSize: '14px', color: '#444' }}>
            Department of Mathematics, University of Wisconsin–Madison · Madison, WI
          </p>
          <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '14px' }}>
            <li>Studied and presented the <strong>adjoint sensitivity method</strong> and theoretical foundations of <strong>Neural ODEs</strong>, including continuous-depth modeling and gradient computation, to a consortium of graduate mathematics students and faculty.</li>
            <li>Implemented <strong>Neural ODE frameworks</strong> in <strong>JAX</strong> (explicit Euler solver) and <strong>PyTorch</strong> (RK4 solver), modeling <strong>physical systems</strong> such as oscillating springs and planetary orbits.</li>
            <li>Demonstrated that Neural ODE models achieved a <strong>94.9% error reduction over ResNet baselines</strong> on planetary orbit prediction and attained the <strong>lowest average error</strong> among competing models on oscillatory spring dynamics.</li>
            <li>Analyzed stability, accuracy, and inductive bias of continuous-time models versus discrete residual networks, highlighting advantages in long-horizon dynamical prediction.</li>
            <li>Culminated in a formal research presentation to graduate students and faculty in applied mathematics and dynamical systems.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section style={{ marginBottom: '26px' }}>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ccc', paddingBottom: '4px', textTransform: 'uppercase' }}>Education</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <h3 style={{ margin: 0, fontSize: '17px' }}>University of Wisconsin – Madison</h3>
          <span style={{ fontSize: '15px' }}>Madison, WI</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span style={{ fontSize: '14px', fontStyle: 'italic' }}>B.S. in Mathematics, Computer Science, Economics (GPA: 3.94/4.00)</span>
          <span style={{ fontSize: '14px', fontStyle: 'italic' }}>Expected May 2027</span>
        </div>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '14px' }}>
          <li>Received scholarship of $244,000, First generation college student.</li>
          <li>Key Coursework: Algorithms, Databases, Machine Learning Theory, Artificial Intelligence, Stochastic Processes, Real Analysis, Linear Algebra, Statistics, Accounting, Finance. 130 credits by Spring 2026.</li>
        </ul>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: '26px' }}>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ccc', paddingBottom: '4px', textTransform: 'uppercase' }}>
          Projects <span style={{fontSize: '14px', textTransform: 'none', fontWeight: 'normal'}}>(See All: <a href="https://jerryluo457.github.io/personal/#/portfolio" style={{color: '#111'}}>jerryluo457.github.io/personal/#/portfolio</a>)</span>
        </h2>

        {/* Project 1: Agentic Market Simulator */}
        <div style={{ marginBottom: '15px' }}>
          <div style={{ marginBottom: '4px' }}>
            <span style={{ fontSize: '16px' }}>
              <a href="https://github.com/jerryluo457/AgenticMarketSim" style={{ color: 'blue', textDecoration: 'underline', fontWeight: 'bold' }}>Agentic Market Simulator</a>
              <span style={{ color: '#111', fontWeight: 'normal' }}> | <em>C++, Python, LightweightCharts, ZeroMQ</em></span>
            </span>
          </div>
          <ul style={{ marginTop: '4px', paddingLeft: '20px', fontSize: '14px' }}>
            <li>Developed a high-fidelity agent-based model (ABM) to simulate financial market microstructure, incorporating distinct autonomous agents (Market Makers, Momentum, Fundamental, and Noise traders) with stochastic behavior to simulate the movement of securities markets sensitive to user market actions.</li>
            <li>Engineered complex market scenarios, including 'Pump and Dump' schemes and 'Short Squeezes,' to analyze emergent phenomena such as liquidity crises, mean reversion, and momentum-driven volatility in a controlled environment.</li>
            <li>Constructed a low-latency core in C++ optimized for sub-millisecond execution, utilizing ZeroMQ (ZMQ) for asynchronous, high-throughput Inter-Process Communication (IPC) with a Python orchestration layer.</li>
            <li>Deployed a real-time, interactive web dashboard using FastAPI and LightweightCharts for tick-by-tick data visualization, containerized the application using Docker, and established a CI/CD pipeline for cloud deployment on Render.</li>
          </ul>
        </div>

        {/* Project 2: Campus Travel Time Guide */}
        <div style={{ marginBottom: '15px' }}>
          <div style={{ marginBottom: '4px' }}>
            <span style={{ fontSize: '16px' }}>
              <a href="https://github.com/jerryluo457/campusmap" style={{ color: 'blue', textDecoration: 'underline', fontWeight: 'bold' }}>Campus Travel Time Guide</a>
              <span style={{ color: '#111', fontWeight: 'normal' }}> | <em>Java, JUnit5, Data Structures & Algorithms</em></span>
            </span>
          </div>
          <ul style={{ marginTop: '4px', paddingLeft: '20px', fontSize: '14px' }}>
            <li>Implemented <strong>Dijkstra’s Algorithm</strong> for shortest-path routing in a weighted graph system, leveraging <code>PriorityQueue</code> and optimized data structures.</li>
            <li>Built a generic <strong>Hashtable</strong> with dynamic resizing, chaining for collision resolution, and full CRUD operations.</li>
            <li>Developed comprehensive <strong>JUnit automated tests</strong> to validate correctness, performance, and edge-case handling.</li>
            <li>Applied object-oriented design principles to deliver scalable, maintainable code.</li>
            <li>Created both the frontend and backend of this application, and developed application end-to-end.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ccc', paddingBottom: '4px', textTransform: 'uppercase' }}>Technical Skills</h2>
        <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Languages:</strong> Python, Java, C, C++, JavaScript<br />
          <strong>Frameworks & Tools:</strong> PyTorch, React, JUnit, HTML, LaTeX, Matplotlib, Seaborn, NumPy<br />
          <strong>Others:</strong> Git version control, Google Colab, Jupyter Notebook, Linux
        </p>
      </section>

    </div>
  );
};

export default Resume;