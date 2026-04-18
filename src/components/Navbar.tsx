import React from 'react';

interface NavbarProps {
  onHireMeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHireMeClick }) => {
  return (
    <nav className="glass-nav">
      <div className="nav-container">
        <div className="brand">AS<span>.</span></div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <button onClick={onHireMeClick} className="btn-primary" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem' }}>Hire Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
