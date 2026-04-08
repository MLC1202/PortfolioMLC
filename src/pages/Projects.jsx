import React, { useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Kahoot Clone',
    emoji: '🎮',
    image: null, /* 👇 Ex: '/images/kahoot.png' */
    status: 'Done',
    statusType: 'done',
    shortDesc: 'A simple and interactive multiplayer quiz platform inspired by Kahoot, fully developed in Java.',
    fullDesc:
      'This system allows a teacher to create quizzes and students to participate live by answering questions through a desktop application. ' +
      'Each participant receives points based on speed and accuracy. At the end, the results are displayed in a ranking. ' +
      'Our focus is to develop a simple and interactive multiplayer system, bringing an experience similar to Kahoot, but entirely built in Java.',
    techs: ['Java', 'MySQL'],
    github: 'https://github.com/MLC1202/ProjetoFinal_LP.git',
    demo: null,
  },
  {
    id: 2,
    title: 'AUventura Park Website',
    emoji: '🐾',
    image: null, /* 👇 Ex: '/images/petdaycare.png' */
    status: 'Work in Progress',
    statusType: 'wip',
    shortDesc: 'A pet daycare management platform focused on providing a practical, organized, and reliable experience for both pet owners and staff.',
    fullDesc:
      'This project is a web platform designed for a pet daycare service, created to provide pet owners with a practical and trustworthy way to connect with daily care services for their pets.' + 'The idea is to combine organization, accessibility, and a user-friendly experience in a solution that supports both the business and its customers.' +
      'The platform was developed with a focus on structuring the service digitally, making it easier to manage information, present the business, and improve communication with pet owners. Beyond the technical side, the project also reflects a business-oriented approach by connecting software development with a real market need. ',
      
    techs: ['React', 'Node.js', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/veloy25/Projeto-1-Semestre---ECM516-ECM252.git', 
    demo: null,
  },
  {
    id: 3,
    title: 'Vagas Inteligentes',
    emoji: '🚗',
    image: null, /* 👇 Ex: '/images/smartparking.png' */
    status: 'Work in Progress',
    statusType: 'wip',
    shortDesc: 'A smart parking system designed to optimize parking space usage and enhance user convenience through real-time monitoring and management.',
    fullDesc:
      'This project is a smart parking system developed to optimize the use of parking spaces and enhance user convenience through real-time monitoring and management. The system utilizes sensors to detect the occupancy of parking spaces, providing users with up-to-date information on available spots. ' +
      'The platform includes a user-friendly interface that allows drivers to easily find and reserve parking spaces, while also offering features for parking lot administrators to efficiently manage their facilities. ' +
      'By leveraging technology, this solution aims to reduce traffic congestion, save time for drivers, and improve the overall parking experience.',

    techs: ['C', 'Raspberry Pi Pico', 'Sensors', 'RFID'],
    github: 'https://github.com/MLC1202/Projeto_Vagas_Inteligentes',
    demo: null,
  }
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="projects">
      <div className="section-header">
        <h2>Projects</h2>
        <p className="section-sub">// a selection of projects i’ve built and explored</p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map(p => (
          <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

/* ── Card do projeto ── */
function ProjectCard({ project, onClick }) {
  const { title, emoji, image, status, statusType, shortDesc, techs } = project;

  return (
    <div className="project-card card" onClick={onClick} role="button" tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}>

      {/* Imagem ou placeholder */}
      <div className="project-thumb">
        {image
          ? <img src={image} alt={title} className="project-img" />
          : <span className="project-emoji">{emoji}</span>
        }
      </div>

      <div className="project-body">
        <div className="project-title-row">
          <h3>{title}</h3>
          <span className={`badge ${statusType === 'done' ? 'badge-green' : 'badge-yellow'}`}>
            {status}
          </span>
        </div>
        <p className="project-desc">{shortDesc}</p>
        <div className="project-tags">
          {techs.map(t => <span key={t} className="tech-tag">{t}</span>)}
        </div>
        <span className="project-hint">Click to see more →</span>
      </div>
    </div>
  );
}

/* ── Modal de detalhes ── */
function ProjectModal({ project, onClose }) {
  const { title, emoji, image, status, statusType, fullDesc, techs, github, demo } = project;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">✕</button>

        <div className="modal-thumb">
          {image
            ? <img src={image} alt={title} className="modal-img" />
            : <span className="modal-emoji">{emoji}</span>
          }
        </div>

        <div className="modal-content">
          <div className="modal-title-row">
            <h3>{title}</h3>
            <span className={`badge ${statusType === 'done' ? 'badge-green' : 'badge-yellow'}`}>
              {status}
            </span>
          </div>

          <p className="modal-desc">{fullDesc}</p>

          <div className="modal-tags">
            {techs.map(t => <span key={t} className="tech-tag">{t}</span>)}
          </div>

          <div className="modal-links">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="btn btn-outline">
                GitHub
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                Ver demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
