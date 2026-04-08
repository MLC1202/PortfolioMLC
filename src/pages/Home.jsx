import React from 'react';
import './Home.css';

const TECHS = [
  { name: 'Java', cls: 'java' },
  { name: 'JavaScript', cls: 'javascript' },
  { name: 'Python', cls: 'python' },
  { name: 'HTML & CSS', cls: 'html' },
  { name: 'MySQL', cls: 'mysql' },
  { name: 'Git', cls: 'git' },
  { name: 'React', cls: 'react' },
  { name: 'Node.js', cls: 'node' },
];

export default function Home({ scrollToSection }) {
  return (
    <section className="home">
      <p className="home-greeting">
        <span role="img" aria-label="aceno">👋</span> Hello! My name is Matheus Cardoso!
      </p>
      <h1 className="home-course">
        Computer Engineer <br /> IMT
      </h1>
      <p className="home-desc">
        Developer focused on building high-quality solutions, combining logical thinking, attention to detail, and a commitment to clean, maintainable code.
      </p>
      <div className="home-cta">
        <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>Contact me</button>
        <a className="btn btn-outline" href="https://github.com/MLC1202" target="_blank" rel="noreferrer">GitHub</a>
        <a
          className="home-resume"
          href="/Resume.pdf"
          download
        >
          My Resume
        </a>
      </div>
      <div className="home-tech-section">
        <p className="tech-label">Technologies and Tools</p>
        <div className="tech-track-wrapper">
          <div className="tech-track">
            {[...TECHS, ...TECHS].map((t, i) => (
              <span key={i} className={`tech-badge-large ${t.cls}`}>{t.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
