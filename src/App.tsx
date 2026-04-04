import './App.css';

function App() {
  return (
    <>
      <div className="ambient-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <nav className="glass-nav">
        <div className="nav-container">
          <div className="brand">AS<span>.</span></div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
          <a href="mailto:itzaravindsridhar@gmail.com" className="btn-primary">Hire Me</a>
        </div>
      </nav>

      <main className="wrapper">
        <header id="home" className="hero glass-panel neumorphic-hover">
          <div className="hero-content">
            <div className="chip">🚀 Open to Opportunities</div>
            <h1 className="gradient-text">Aravind Sridhar</h1>
            <h2 className="role">Full Stack Engineer</h2>

            <div className="summary-container">
              <p>Innovative Full Stack Engineer with approximately 10 years of experience architecting and scaling high-performance web applications. I bring deep expertise in Java, Spring Boot, and React JS.</p>
              <p>Currently working at Verizon, I have a proven track record of owning the full SDLC to deliver resilient solutions. I am deeply passionate about modern system design and building agentic workflows using emerging AI technologies.</p>
            </div>

            <div className="contact-chips">
              <a href="#" className="contact-chip highlight-chip" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              <a href="#" className="contact-chip highlight-chip" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a href="mailto:itzaravindsridhar@gmail.com" className="contact-chip">
                <span className="material-icons-round">email</span> itzaravindsridhar@gmail.com
              </a>
              <span className="contact-chip">
                <span className="material-icons-round">location_on</span> Chennai, India
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="profile-card glass-panel">
              <img src="/assets/profile.webp" alt="Aravind" onError={(e) => e.currentTarget.style.display='none'} />
            </div>
          </div>
        </header>

        <div className="bento-grid">
          <div className="bento-col experience-col">
            <section id="experience">
              <div className="section-header">
                <span className="material-icons-round icon-glow">work</span>
                <h2>Work Experience</h2>
              </div>

              <div className="timeline-interactive">
                <details className="timeline-item" open>
                  <summary className="timeline-summary neumorphic-hover">
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
                    <span className="view-more-text">View</span>
                    <div className="expand-icon"><span className="material-icons-round">expand_more</span></div>
                  </summary>
                  <div className="timeline-content glass-card">
                    <ul className="job-desc">
                      <li>Engineered a high-traffic e-commerce application tailored for business customers.</li>
                      <li>Built an Agentic Workflow Orchestrator using Generative AI achieving <span className="metric-highlight">100% reduction</span> in manual effort for VoC feedback and a <span className="metric-highlight">40% CSAT increase</span>.</li>
                      <li>Spearheaded backend API optimizations, slashing processing time from <span className="metric-highlight">60 seconds</span> to under <span className="metric-highlight">35 seconds</span>.</li>
                      <li>Earned recognition from company directors for the successful, cross-functional delivery of a complex, full-stack solution involving multiple stakeholders.</li>
                    </ul>
                  </div>
                </details>

                <details className="timeline-item">
                  <summary className="timeline-summary neumorphic-hover">
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
                    <span className="view-more-text">View</span>
                    <div className="expand-icon"><span className="material-icons-round">expand_more</span></div>
                  </summary>
                  <div className="timeline-content glass-card">
                    <ul className="job-desc">
                      <li>Architected and maintained a robust Point of Sale (POS) application developing backend APIs with Spring Boot and UI in React.</li>
                      <li>Directed and mentored a high-performing team of <span className="metric-highlight">6 engineers</span>.</li>
                      <li>Positioned as the Subject Matter Expert (SME) demonstrating strong technical leadership.</li>
                    </ul>
                  </div>
                </details>

                <details className="timeline-item">
                  <summary className="timeline-summary neumorphic-hover">
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
                    <span className="view-more-text">View</span>
                    <div className="expand-icon"><span className="material-icons-round">expand_more</span></div>
                  </summary>
                  <div className="timeline-content glass-card">
                    <ul className="job-desc">
                      <li>Developed scalable backend APIs for a major US-based insurance client.</li>
                      <li>Executed migration of legacy systems from Spring MVC to Spring Boot.</li>
                    </ul>
                  </div>
                </details>
              </div>
            </section>

            <section id="projects" className="glass-panel neumorphic-hover projects-panel" style={{ marginTop: '32px' }}>
              <div className="section-header">
                <span className="material-icons-round icon-glow">rocket_launch</span>
                <h2>Featured Work & Projects</h2>
              </div>
              <div className="projects-grid">
                <div className="glass-card project-card neumorphic-hover">
                  <h3>Agentic Workflow Orchestrator</h3>
                  <p>Automated VoC feedback analysis using Generative AI, drastically reducing manual processing time.</p>
                  <div className="chip-container">
                    <span className="tech-chip">Gen AI</span>
                    <span className="tech-chip">Python</span>
                  </div>
                  <a href="#" className="contact-chip project-link">View Details <span className="material-icons-round" style={{ fontSize: '1rem' }}>arrow_forward</span></a>
                </div>
                <div className="glass-card project-card neumorphic-hover">
                  <h3>High-Traffic B2B Portal</h3>
                  <p>Scalable e-commerce platform processing complex backend transactions in under 35 seconds.</p>
                  <div className="chip-container">
                    <span className="tech-chip">Spring Boot</span>
                    <span className="tech-chip">React</span>
                  </div>
                  <a href="#" className="contact-chip project-link">View Details <span className="material-icons-round" style={{ fontSize: '1rem' }}>arrow_forward</span></a>
                </div>
              </div>
            </section>
          </div>

          <aside className="bento-col side-col">
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
                <div className="badge soft-badge" style={{ marginTop: '8px', display: 'inline-block', padding: '4px 12px', borderRadius: '99px', fontSize: '0.85rem' }}>
                  2012 - 2016
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
                  <p>Optimized web app used by millions, reducing order placement time by 25s.</p>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
