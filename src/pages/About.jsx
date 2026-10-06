import React from 'react';
import './About.css';

const INFO = [
  { label: 'Nome', value: 'Matheus Cardoso' },
  { label: 'E-mail', value: 'tecocardoso1@gmail.com' },
  { label: 'Localização', value: 'Barueri, SP' },
  { label: 'Formação', value: 'Eng. da Computação · IMT (conclusão 12/2027)' },
];

const LANGUAGES = [
  { name: 'Português', level: 'Nativo', percent: 100 },
  { name: 'Inglês', level: 'Avançado', percent: 80 },
  { name: 'Libras', level: 'Básico', percent: 35 },
];

const CERTIFICATIONS = [
  { name: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services' },
  { name: 'Introdução à Cibersegurança', issuer: 'Cisco Networking Academy' },
  { name: 'Hardware Embarcado com Microcontroladores', issuer: 'IMT' },
  { name: 'Excel VBA Aplicado à Engenharia', issuer: 'IMT' },
];

export default function About() {
  return (
    <section className="section-alt">
      <div className="container about">
        <div className="about-intro reveal">
          <span className="pill-label">Sobre mim</span>
          <h2 className="section-title">Lógica, detalhe <span>&amp; visão prática</span></h2>

          <p className="about-text">
            Sou estudante de Engenharia da Computação no 8º semestre do IMT – Instituto Mauá de
            Tecnologia, em busca de estágio em Desenvolvimento de Software, Cloud Computing,
            Cibersegurança e Dados. Desenvolvo aplicações fullstack com React, Node.js e MySQL, e
            tenho vivência com Java, Python, SQL e automação com microcontroladores (Arduino,
            Raspberry Pi Pico).
          </p>
        </div>

        <div className="about-grid">
          {INFO.map((item) => (
            <div className="card about-info reveal" key={item.label}>
              <span className="card-label">{item.label}</span>
              <span className="about-info-value">{item.value}</span>
            </div>
          ))}
        </div>

        <article className="card about-block reveal">
          <div className="about-block-head">
            <span className="card-label">Experiência</span>
            <span className="about-period">08/2023 – 03/2024</span>
          </div>
          <h3 className="about-block-title">Eco Mauá</h3>
          <p className="about-block-text">
            Projeto multidisciplinar de engenharia estudantil que desenvolve um veículo de alta
            eficiência energética para competições. Atuei por 8 meses combinando gestão de pessoas
            com contribuições técnicas no desenvolvimento de protótipos.
          </p>
          <p className="about-block-text">
            O maior desafio foi uma mudança nas regras do campeonato que alterou as dimensões
            permitidas para o carro: trocamos a carcaça por um modelo alternativo já disponível na
            equipe, readequamos todos os componentes técnicos sob prazo reduzido e coordenei a
            comunicação da equipe durante a transição.
          </p>
        </article>

        <div className="about-columns">
          <div className="card about-block reveal">
            <span className="card-label">Certificações</span>
            <ul className="about-cert-list">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.name}>
                  <span className="about-cert-name">{cert.name}</span>
                  <span className="about-cert-issuer">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card about-block reveal">
            <span className="card-label">Idiomas</span>
            <div className="about-languages">
              {LANGUAGES.map((lang) => (
                <div className="about-language" key={lang.name}>
                  <div className="about-language-top">
                    <span className="about-language-name">{lang.name}</span>
                    <span className="about-language-level">{lang.level}</span>
                  </div>
                  <div className="level-bar">
                    <span style={{ width: `${lang.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
