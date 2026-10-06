import React from 'react';
import './Navbar.css';
import { FiChevronRight, FiArrowDown } from 'react-icons/fi';

const NAV_LINKS = [
  { id: 'about', label: 'Sobre' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projetos' },
  { id: 'contact', label: 'Contato' },
];

export default function Navbar({ activeSection, scrollToSection }) {
  return (
    <header className="navbar">
      <nav className="navbar-inner" aria-label="Principal">
        <button className="nav-brand" onClick={() => scrollToSection('home')}>
          <span className="nav-brand-mark" aria-hidden="true">
            <FiChevronRight />
          </span>
          MLC
        </button>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                aria-current={activeSection === link.id ? 'true' : undefined}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          className="nav-resume"
          href="Resume.pdf"
          download="Curriculo_Matheus_Cardoso.pdf"
        >
          Currículo <FiArrowDown aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
