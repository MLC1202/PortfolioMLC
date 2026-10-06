import React from 'react';
import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi';

const EMAIL = 'tecocardoso1@gmail.com';

const CONTACTS = [
  {
    id: 'email',
    icon: <MdEmail />,
    label: 'E-mail',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    id: 'linkedin',
    icon: <FaLinkedinIn />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/matheus-cardoso-74a44a268',
    href: 'https://www.linkedin.com/in/matheus-cardoso-74a44a268/',
  },
  {
    id: 'github',
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/MLC1202',
    href: 'https://github.com/MLC1202',
  },
  {
    id: 'whatsapp',
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: '(11) 99940-0892',
    href: 'https://wa.me/5511999400892',
  },
];

// Sem backend: o envio abre o app de e-mail do visitante com a mensagem já preenchida
function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);

  const subject = form.get('subject') || 'Contato pelo portfólio';
  const body = `${form.get('message')}\n\n${form.get('name')} — ${form.get('email')}`;

  window.location.href =
    `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  return (
    <section className="section">
      <div className="container contact">
        <div className="section-heading reveal">
          <span className="pill-label">Contato</span>
          <h2 className="section-title">Vamos trabalhar <span>juntos</span></h2>
        </div>

        <div className="contact-layout">
          <div className="card contact-info-card reveal">
            <h3 className="contact-card-title">Informações de contato</h3>

            <div className="contact-list">
              {CONTACTS.map((item) => (
                <a
                  key={item.id}
                  className="contact-item"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-icon" aria-hidden="true">{item.icon}</span>

                  <span className="contact-info">
                    <span className="card-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form className="card contact-form-card reveal" onSubmit={handleSubmit}>
            <h3 className="contact-card-title">Envie uma mensagem</h3>

            <div className="contact-form-row">
              <label className="contact-field">
                Seu nome
                <input type="text" name="name" required />
              </label>

              <label className="contact-field">
                Seu e-mail
                <input type="email" name="email" required />
              </label>
            </div>

            <label className="contact-field">
              Assunto
              <input type="text" name="subject" />
            </label>

            <label className="contact-field">
              Mensagem
              <textarea name="message" rows="6" required />
            </label>

            <button type="submit" className="btn-pill btn-primary contact-submit">
              Enviar mensagem
              <span className="btn-icon"><FiArrowUpRight aria-hidden="true" /></span>
            </button>
          </form>
        </div>

        <footer className="contact-footer">
          <p>© {new Date().getFullYear()} Matheus Cardoso. Todos os direitos reservados.</p>

          <a href="#home" className="contact-top">
            Voltar ao topo
            <span className="circle-link"><FiArrowUp aria-hidden="true" /></span>
          </a>
        </footer>
      </div>
    </section>
  );
}
