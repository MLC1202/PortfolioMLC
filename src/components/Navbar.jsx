import React from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, scrollToSection }) {
  return (
    <nav className="navbar">
      <button className="nav-logo" onClick={() => scrollToSection('home')}>
        <span className="logo-arrow">&lt;/</span> MATHEUS <span className="logo-arrow">&gt;</span>
      </button>

      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <button
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
