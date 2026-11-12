import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { PROJECTS } from '../data/projects';

const DELIVERED_COUNT = PROJECTS.filter((project) => project.done).length;

export default function Home({ scrollToSection }) {
  return (
    <section className="home">
      <div className="container home-layout">
        <div className="home-content reveal">
          <span className="pill-label">Engenheiro da Computação</span>

          <h1 className="home-title">
            <span className="home-greeting">Olá, eu sou</span>
            <span className="home-name">Matheus<br />Cardoso</span>
          </h1>

          <p className="home-description">
            Desenvolvedor focado em construir soluções de qualidade, unindo raciocínio lógico,
            atenção aos detalhes e compromisso com código limpo e fácil de manter.
          </p>

          <div className="home-actions">
            <button
              className="btn-pill btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              Ver projetos
              <span className="btn-icon"><FiArrowUpRight aria-hidden="true" /></span>
            </button>

            <button
              className="btn-pill btn-outline"
              onClick={() => scrollToSection('contact')}
            >
              Fale comigo
            </button>
          </div>

          <div className="home-socials">
            <a
              className="circle-link"
              href="https://github.com/MLC1202"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              className="circle-link"
              href="https://www.linkedin.com/in/matheus-cardoso-74a44a268/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a className="circle-link" href="mailto:tecocardoso1@gmail.com" aria-label="E-mail">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="home-glass reveal">
          <div className="glass-light glass-light-accent" aria-hidden="true" />
          <div className="glass-light glass-light-teal" aria-hidden="true" />

          <div className="glass-lens-wrap float-slow" aria-hidden="true">
            <div className="glass-lens" />
          </div>

          <div className="glass-terminal-wrap float">
            <div className="glass glass-terminal">
              <div className="glass-terminal-dots" aria-hidden="true">
                <span /><span /><span />
              </div>
              <span className="glass-terminal-muted">~ $ whoami</span>
              <span>Matheus Cardoso</span>
              <span className="glass-terminal-muted">Engenharia da Computação · IMT</span>
              <span>8º semestre <span className="glass-caret" aria-hidden="true" /></span>
            </div>
          </div>

          <div className="glass-pill-wrap float-slow">
            <span className="glass glass-pill">
              <span className="glass-dot" aria-hidden="true" />
              Barueri, SP
            </span>
          </div>

          <div className="glass-card-wrap float">
            <button className="glass glass-card" onClick={() => scrollToSection('projects')}>
              <span className="glass-card-number">{String(DELIVERED_COUNT).padStart(2, '0')}</span>
              <span className="glass-card-label">Projetos entregues</span>
              <span className="glass-card-icon"><FiArrowUpRight aria-hidden="true" /></span>
            </button>
          </div>
        </div>
      </div>

      <button
        className="scroll-indicator"
        onClick={() => scrollToSection('about')}
        aria-label="Rolar até a seção Sobre"
      >
        <span className="scroll-indicator-wheel" />
      </button>
    </section>
  );
}
