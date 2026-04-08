import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

const SECTIONS = ['home', 'about', 'projects', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef({});

  // Scroll suave para a seção
  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Detectar qual seção está visível durante o scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((section) => {
      const element = sectionRefs.current[section];
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="main-content">
        <div
          id="home"
          ref={(el) => (sectionRefs.current.home = el)}
          className="section-wrapper"
        >
          <Home scrollToSection={scrollToSection} />
        </div>
        <div
          id="about"
          ref={(el) => (sectionRefs.current.about = el)}
          className="section-wrapper"
        >
          <About />
        </div>
        <div
          id="projects"
          ref={(el) => (sectionRefs.current.projects = el)}
          className="section-wrapper"
        >
          <Projects />
        </div>
        <div
          id="contact"
          ref={(el) => (sectionRefs.current.contact = el)}
          className="section-wrapper"
        >
          <Contact />
        </div>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Matheus Cardoso. All rights reserved.</p>
      </footer>
    </div>
  );
}
