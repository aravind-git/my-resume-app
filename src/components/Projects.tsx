import React, { useState } from 'react';
import { createPortal } from 'react-dom';

interface Project {
  id: string;
  title: string;
  summary: string;
  technologies: string[];
  details: React.ReactNode;
}

const PROJECT_DATA: Project[] = [
  {
    id: 'agentic-workflow',
    title: 'Agentic Workflow Orchestrator',
    summary: 'Automated VoC feedback analysis using Generative AI, drastically reducing manual processing time.',
    technologies: ['Gen AI', 'Python'],
    details: (
      <>
        <p style={{ marginBottom: '16px' }}>
          This project focused on analyzing Voice of Customer (VoC) feedback using state-of-the-art Generative AI to identify trends and actionable insights automatically.
        </p>
        <ul style={{ marginLeft: '20px', listStyleType: 'disc' }}>
          <li>Integrated multi-step prompt chains to parse unstructured feedback.</li>
          <li>Decreased manual processing workloads by over 70%.</li>
          <li>Architected the end-to-end pipeline using Python and modern cloud compute.</li>
        </ul>
      </>
    )
  },
  {
    id: 'b2b-portal',
    title: 'High-Traffic B2B Portal',
    summary: 'Scalable e-commerce platform processing complex backend transactions in under 35 seconds.',
    technologies: ['Spring Boot', 'React'],
    details: (
      <>
        <p style={{ marginBottom: '16px' }}>
          A modernized enterprise portal that drastically improved the way businesses interacted with core inventory services and ordering.
        </p>
        <ul style={{ marginLeft: '20px', listStyleType: 'disc' }}>
          <li>Migrated legacy PHP components to a Spring Boot microservices backend.</li>
          <li>Refactored UI to use React and Redux for a snappy single-page experience.</li>
          <li>Tuned query patterns resulting in complex cart checkouts securely finishing in under 35 seconds.</li>
        </ul>
      </>
    )
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="glass-panel neumorphic-hover projects-panel" style={{ marginTop: '32px' }}>
        <div className="section-header">
          <span className="material-icons-round icon-glow">rocket_launch</span>
          <h2>Featured Work & Projects</h2>
        </div>
        <div className="projects-grid">
          {PROJECT_DATA.map((project) => (
            <div key={project.id} className="glass-card project-card neumorphic-hover">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="chip-container">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-chip">{tech}</span>
                ))}
              </div>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProject(project);
                }} 
                className="contact-chip project-link"
              >
                View Details <span className="material-icons-round" style={{ fontSize: '1rem' }}>arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && createPortal(
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ background: 'var(--bg-base)', borderRadius: '22px', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-soft)' }}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <span className="material-icons-round">close</span>
            </button>
            
            <h2 style={{ fontSize: '1.75rem', marginBottom: '10px', fontFamily: 'var(--font-display)', color: 'var(--text-main)' }}>
              {selectedProject.title}
            </h2>
            
            <div className="chip-container" style={{ marginBottom: '24px' }}>
              {selectedProject.technologies.map((tech) => (
                <span key={tech} className="tech-chip">{tech}</span>
              ))}
            </div>
            
            <div className="project-modal-details" style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem' }}>
              {selectedProject.details}
            </div>
            
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Projects;
