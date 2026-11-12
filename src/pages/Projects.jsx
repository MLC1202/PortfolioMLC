import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { FiArrowUpRight, FiX } from 'react-icons/fi';
import { PROJECTS } from '../data/projects';

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section-alt">
      <div className="container">
        <div className="projects-heading reveal">
          <div className="projects-heading-title">
            <span className="pill-label">Projetos</span>
            <h2 className="section-title">O que eu <span>construí</span></h2>
          </div>
          <p className="projects-heading-text">
            De microcontroladores e sensores a plataformas web e apps desktop.
            Abra um projeto para ver os detalhes.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setSelected(project)} />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function ProjectImage({ project, large = false }) {
  if (!project.image) {
    return <QuizIllustration large={large} />;
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      className={large ? 'project-img' : 'project-img flow'}
      style={{ objectPosition: project.imagePosition }}
    />
  );
}

function StatusBadge({ project }) {
  return (
    <span className={`status-badge ${project.done ? 'status-done' : 'status-wip'}`}>
      {project.status}
    </span>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className="card project-card reveal">
      <div className="project-thumb">
        <ProjectImage project={project} />
      </div>

      <div className="project-body">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <StatusBadge project={project} />
        </div>

        <p className="project-desc">{project.shortDesc}</p>

        <div className="project-tags">
          {project.techs.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        <button className="project-open" onClick={onOpen}>
          Ver detalhes
          <span className="project-open-icon"><FiArrowUpRight aria-hidden="true" /></span>
        </button>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar"
        >
          <FiX aria-hidden="true" />
        </button>

        <div className="modal-thumb">
          <ProjectImage project={project} large />
        </div>

        <div className="modal-content">
          <div className="modal-title-row">
            <h3 id="project-modal-title">{project.title}</h3>
            <StatusBadge project={project} />
          </div>

          <p className="modal-desc">{project.fullDesc}</p>

          <ul className="modal-highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="project-tags">
            {project.techs.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-pill btn-primary modal-github"
            >
              Ver no GitHub
              <span className="btn-icon"><FiArrowUpRight aria-hidden="true" /></span>
            </a>
          )}

          {project.site && (
            <a
              href={project.site}
              target="_blank"
              rel="noreferrer"
              className="btn-pill btn-outline"
            >
              {project.siteLabel}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Ilustração própria no lugar de um print do Kahoot, que é marca de terceiros
function QuizIllustration({ large }) {
  return (
    <div className={`quiz ${large ? 'quiz-large' : ''}`} aria-hidden="true">
      <div className="quiz-top">
        <span>Pergunta 3 / 10</span>
        <span className="quiz-timer">12</span>
      </div>
      <div className="quiz-question">Qual palavra-chave cria um objeto em Java?</div>
      <div className="quiz-answers">
        <span className="quiz-answer quiz-a">A · class</span>
        <span className="quiz-answer quiz-b">B · new</span>
        <span className="quiz-answer quiz-c">C · this</span>
        <span className="quiz-answer quiz-d">D · static</span>
      </div>
    </div>
  );
}
