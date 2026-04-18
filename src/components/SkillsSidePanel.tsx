import React from 'react';

const SkillsSidePanel: React.FC = () => {
  return (
    <aside className="bento-col side-col animate-fade-up stagger-3">
      <section id="skills" className="glass-panel skills-panel neumorphic-hover">
        <div className="section-header">
          <span className="material-icons-round icon-glow">code</span>
          <h2>Skills Matrix</h2>
        </div>

        <div className="skill-group">
          <h4 className="skill-title">Backend</h4>
          <div className="chip-container">
            <span className="tech-chip">Java</span>
            <span className="tech-chip">Spring Boot</span>
            <span className="tech-chip">Microservices</span>
            <span className="tech-chip">PostgreSQL</span>
          </div>
        </div>

        <div className="skill-group">
          <h4 className="skill-title">Frontend</h4>
          <div className="chip-container">
            <span className="tech-chip">React JS</span>
            <span className="tech-chip">Angular</span>
            <span className="tech-chip">ES6</span>
          </div>
        </div>

        <div className="skill-group">
          <h4 className="skill-title">Emerging Tech</h4>
          <div className="chip-container">
            <span className="tech-chip">Gen AI</span>
            <span className="tech-chip">Agentic AI</span>
            <span className="tech-chip">MCP</span>
            <span className="tech-chip">System Design</span>
          </div>
        </div>

        <div className="skill-group">
          <h4 className="skill-title">Currently Exploring</h4>
          <div className="chip-container">
            <span className="tech-chip learning-chip">Next.js</span>
            <span className="tech-chip learning-chip">Reactive Spring</span>
            <span className="tech-chip learning-chip">Python</span>
          </div>
        </div>
      </section>

      <section className="glass-panel edu-panel neumorphic-hover">
        <div className="section-header">
          <span className="material-icons-round icon-glow">school</span>
          <h2>Education</h2>
        </div>
        <div className="edu-card">
          <div className="edu-degree">B.Tech - Computer Science</div>
          <div className="edu-school">SASTRA University</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px', alignItems: 'flex-start' }}>
            <div className="badge soft-badge" style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '99px', fontSize: '0.85rem' }}>
              2012 - 2016
            </div>
            <div className="badge soft-badge" style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '99px', fontSize: '0.85rem' }}>
              CGPA 6.1
            </div>
          </div>
        </div>
      </section>

      <section className="glass-panel achieve-panel neumorphic-hover">
        <div className="section-header">
          <span className="material-icons-round icon-glow">emoji_events</span>
          <h2>Achievements</h2>
        </div>
        <ul className="achieve-list">
          <li>
            <span className="material-icons-round list-icon">star</span>
            <p>Recognized by directors for delivering full-stack solutions with multiple stakeholders.</p>
          </li>
          <li>
            <span className="material-icons-round list-icon">speed</span>
            <p>Optimized web app used by millions, reducing order placement time by 35s.</p>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default SkillsSidePanel;
