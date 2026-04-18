import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  return (
    <header id="home" className="hero glass-panel neumorphic-hover animate-fade-up stagger-1">
      <div className="hero-content">
        <div className="chip">🚀 Open to Opportunities</div>
        <h1 className="gradient-text">Aravind Sridhar</h1>
        <h2 className="role">Full Stack Engineer</h2>

        <div className="summary-container">
          <p>Innovative Full Stack Engineer with approximately 10 years of experience architecting and scaling high-performance web applications. I bring deep expertise in Java, Spring Boot, and React JS.</p>
          <p>Currently working at Verizon, I have a proven track record of owning the full SDLC to deliver resilient solutions. I am deeply passionate about modern system design and building agentic workflows using emerging AI technologies.</p>
        </div>

        <div className="contact-chips">
          <a href="https://www.linkedin.com/in/aravind-sridhar-9b56a574/" className="contact-chip highlight-chip" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
          <a href="https://github.com/aravind-git" className="contact-chip highlight-chip" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <div className="contact-chip" style={{ paddingRight: '6px' }}>
            <a href="mailto:itzaravindsridhar@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', color: 'inherit', textDecoration: 'none' }}>
              <span className="material-icons-round">email</span> itzaravindsridhar@gmail.com
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText('itzaravindsridhar@gmail.com');
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '4px', marginLeft: '2px', borderRadius: '50%' }}
              title="Copy email to clipboard"
            >
              <span className="material-icons-round" style={{ fontSize: '1.05rem', color: copied ? '#4caf50' : 'var(--text-muted)' }}>
                {copied ? 'check' : 'content_copy'}
              </span>
            </button>
          </div>
          <span className="contact-chip">
            <span className="material-icons-round">location_on</span> Chennai, India
          </span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="profile-card glass-panel">
          <img src="/assets/profile.webp" alt="Aravind" onError={(e) => e.currentTarget.style.display = 'none'} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
