import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div className="section-header">
        <span className="material-icons-round icon-glow">work</span>
        <h2>Work Experience</h2>
      </div>

      <div className="timeline-interactive">
        <div className="timeline-item open">
          <div className="timeline-summary">
            <div className="timeline-point">
              <span className="year-start">2023</span>
              <span className="year-end">Now</span>
            </div>
            <div className="timeline-header">
              <h3>Member of Technical Staff - III</h3>
              <div className="company-row">
                <span className="company-badge">VZ</span>
                <span className="company">Verizon Data Services India</span>
              </div>
            </div>
          </div>
          <div className="timeline-content glass-card">
            <ul className="job-desc">
              <li>Engineered a high-traffic e-commerce application tailored for business customers.</li>
              <li>Accelerated the migration of an Order History page using AI tools, reducing development time from 2 months to under 2 weeks.</li>
              <li>Built an Agentic Workflow Orchestrator using Generative AI achieving <span className="metric-highlight">100% reduction</span> in manual effort for VoC feedback and a <span className="metric-highlight">40% CSAT increase</span>.</li>
              <li>Spearheaded backend API optimizations, slashing processing time from <span className="metric-highlight">60 seconds</span> to under <span className="metric-highlight">35 seconds</span>.</li>
              <li>Earned recognition from company directors for the successful, cross-functional delivery of a complex, full-stack solution involving multiple stakeholders.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item open">
          <div className="timeline-summary">
            <div className="timeline-point">
              <span className="year-start">2019</span>
              <span className="year-end">2023</span>
            </div>
            <div className="timeline-header">
              <h3>Member of Technical Staff - II</h3>
              <div className="company-row">
                <span className="company-badge">VZ</span>
                <span className="company">Verizon Data Services India</span>
              </div>
            </div>
          </div>
          <div className="timeline-content glass-card">
            <ul className="job-desc">
              <li>Architected and maintained a robust Point of Sale (POS) application developing backend APIs with Spring Boot and UI in React.</li>
              <li>Directed and mentored a high-performing team of <span className="metric-highlight">6 engineers</span>.</li>
              <li>Positioned as the Subject Matter Expert (SME) demonstrating strong technical leadership.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item open">
          <div className="timeline-summary">
            <div className="timeline-point">
              <span className="year-start">2017</span>
              <span className="year-end">2019</span>
            </div>
            <div className="timeline-header">
              <h3>Backend Engineer - Junior Associate</h3>
              <div className="company-row">
                <span className="company-badge">TCS</span>
                <span className="company">Tata Consultancy Services</span>
              </div>
            </div>
          </div>
          <div className="timeline-content glass-card">
            <ul className="job-desc">
              <li>Developed scalable backend APIs for a major US-based insurance client.</li>
              <li>Executed migration of legacy systems from Spring MVC to Spring Boot.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
