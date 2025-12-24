import React from 'react';

const Resume = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', fontFamily: 'Arial, Helvetica, sans-serif', color: '#111', lineHeight: '1.45', padding: '0 20px' }}>

      {/* Header */}
      <div style={{ borderBottom: '2px solid #222', paddingBottom: '12px', marginBottom: '20px' }}>
        <h1 style={{ margin: 0, fontSize: '32px', fontWeight: 700 }}>Jerry Luo</h1>
        <p style={{ margin: '6px 0 0 0', fontSize: '15px' }}>
          Lake Worth, FL &nbsp;|&nbsp;
          <a href="mailto:sluo85@wisc.edu" style={{ color: '#111', textDecoration: 'none' }}>sluo85@wisc.edu</a> &nbsp;|&nbsp;
          <a href="https://linkedin.com/in/jerbear" target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none' }}>linkedin.com/in/jerbear</a>
        </p>
      </div>

      {/* Experience */}
      <section style={{ marginBottom: '26px' }}>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ccc', paddingBottom: '4px' }}>Experience</h2>

        {/* Neural ODEs */}
        <h3 style={{ margin: '14px 0 4px 0', fontSize: '17px' }}>Researcher — Neural Ordinary Differential Equations</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#444' }}>
          Department of Mathematics, University of Wisconsin–Madison · Madison, WI<br />
          <em>Sep 2025 – Dec 2025</em>
        </p>
        <ul style={{ marginTop: '8px' }}>
          <li>Studied and presented the <strong>adjoint sensitivity method</strong> and theoretical foundations of <strong>Neural ODEs</strong>, including continuous-depth modeling and gradient computation, to graduate mathematics students and faculty.</li>
          <li>Implemented Neural ODE frameworks in <strong>JAX</strong> (explicit Euler solver) and <strong>PyTorch</strong> (RK4 solver), modeling physics-informed systems such as oscillating springs and planetary orbits.</li>
          <li>Achieved a <strong>94.9% error reduction over ResNet baselines</strong> on planetary orbit prediction and lowest average error on oscillatory spring dynamics.</li>
          <li>Analyzed stability, accuracy, and inductive bias of continuous-time models versus discrete residual networks for long-horizon prediction.</li>
          <li>Culminated in a formal research presentation to graduate students and faculty in applied mathematics and dynamical systems.</li>
        </ul>

        {/* AI/ML Researcher */}
        <h3 style={{ margin: '18px 0 4px 0', fontSize: '17px' }}>AI / ML Researcher</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#444' }}>
          Dept. of Materials Science & Engineering, UW–Madison · Madison, WI<br />
          <em>Jan 2025 – May 2025</em>
        </p>
        <ul style={{ marginTop: '8px' }}>
          <li>Developed and optimized <strong>PyTorch models on CUDA GPUs</strong> for material property prediction using CNNs and deep learning architectures, achieving &gt;85% accuracy.</li>
          <li>Built training diagnostics and visualizations using <strong>Matplotlib</strong> and <strong>Seaborn</strong> to analyze convergence and reliability.</li>
        </ul>
      </section>

      {/* Education */}
      <section style={{ marginBottom: '26px' }}>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ccc', paddingBottom: '4px' }}>Education</h2>
        <h3 style={{ margin: '12px 0 4px 0', fontSize: '17px' }}>University of Wisconsin–Madison</h3>
        <p style={{ margin: 0, fontSize: '14px' }}>
          B.S. in Mathematics, Computer Science, and Economics — <strong>GPA: 3.94/4.00</strong><br />
          Expected May 2027
        </p>
        <ul style={{ marginTop: '8px' }}>
          <li>$244,000 scholarship recipient; first-generation college student.</li>
          <li>Key coursework: Algorithms, Machine Learning Theory, Artificial Intelligence, Stochastic Processes, Real Analysis, Linear Algebra, Statistics, Finance.</li>
          <li>130 credits completed by Spring 2026.</li>
        </ul>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: '26px' }}>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ccc', paddingBottom: '4px' }}>Projects</h2>

        <h3 style={{ margin: '12px 0 4px 0', fontSize: '17px' }}>Campus Travel Time Guide</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#444' }}>Java · JUnit5 · Data Structures & Algorithms</p>
        <ul style={{ marginTop: '8px' }}>
          <li>Implemented <strong>Dijkstra’s Algorithm</strong> for shortest-path routing using optimized priority queues.</li>
          <li>Built a generic <strong>hash table</strong> with dynamic resizing and chaining for collision resolution.</li>
          <li>Designed comprehensive automated tests to validate performance and edge cases.</li>
          <li>Developed the application end-to-end including frontend and backend.</li>
        </ul>

        <h3 style={{ margin: '12px 0 4px 0', fontSize: '17px' }}>Cache Simulator</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#444' }}>C · Systems Programming</p>
        <ul style={{ marginTop: '8px' }}>
          <li>Implemented a cache simulator with <strong>LRU replacement policy</strong> and dynamic memory allocation.</li>
          <li>Analyzed memory traces to evaluate hit/miss/eviction performance against a reference model.</li>
        </ul>
      </section>

      {/* Skills */}
      <section>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ccc', paddingBottom: '4px' }}>Technical Skills</h2>
        <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Languages:</strong> Python, Java, C, C++, JavaScript<br />
          <strong>Frameworks & Tools:</strong> PyTorch, JAX, React, HTML, LaTeX, NumPy, Matplotlib, Seaborn, JUnit<br />
          <strong>Other:</strong> Git, Linux, Google Colab, Jupyter Notebook
        </p>
      </section>

    </div>
  );
};

export default Resume;