import React from 'react';
import './Skills.css';

const LEVEL_PERCENT = {
  Avançado: 85,
  Intermediário: 60,
};

const SKILLS = [
  { name: 'Java', level: 'Avançado' },
  { name: 'JavaScript', level: 'Avançado' },
  { name: 'SQL', level: 'Avançado' },
  { name: 'Git / GitHub', level: 'Avançado' },
  { name: 'Excel', level: 'Avançado' },
  { name: 'React', level: 'Intermediário' },
  { name: 'Node.js', level: 'Intermediário' },
  { name: 'Python', level: 'Intermediário' },
  { name: 'HTML/CSS', level: 'Intermediário' },
  { name: 'TypeScript', level: 'Intermediário' },
  { name: 'PL/SQL', level: 'Intermediário' },
  { name: 'Oracle APEX', level: 'Intermediário' },
  { name: 'Docker', level: 'Intermediário' },
  { name: 'Kubernetes', level: 'Intermediário' },
];

export default function Skills() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="pill-label">Skills</span>
          <h2 className="section-title">Ferramentas <span>que eu uso</span></h2>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, index) => (
            <div className="card skill-card reveal" key={skill.name}>
              <div className="skill-top">
                <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="card-label">{skill.level}</span>
              </div>

              <span className="skill-name">{skill.name}</span>

              <div className="level-bar">
                <span style={{ width: `${LEVEL_PERCENT[skill.level]}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
