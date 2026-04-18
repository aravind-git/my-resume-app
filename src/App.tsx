import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsSidePanel from './components/SkillsSidePanel';
import HireMeModal from './components/HireMeModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="ambient-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <Navbar onHireMeClick={() => setIsModalOpen(true)} />

      <main className="wrapper">
        <Hero />

        <div className="bento-grid">
          <div className="bento-col experience-col animate-fade-up stagger-2">
            <Experience />
            <Projects />
          </div>

          <SkillsSidePanel />
        </div>
      </main>

      <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;
