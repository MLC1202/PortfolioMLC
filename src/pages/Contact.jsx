import React from 'react';
import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';

const CONTACTS = [
  {
    id: 'email',
    icon: <MdEmail />,
    label: 'Email',
    value: 'tecocardoso1@gmail.com',
    href: 'mailto:tecocardoso1@gmail.com',
  },
  {
    id: 'linkedin',
    icon: <FaLinkedinIn />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/matheus-cardoso',
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
    value: '+55 11 99940-0892',
    href: 'https://wa.me/5511999400892',
  },
];

export default function Contact() {
  return (
    <section className="contact">
      <div className="section-header">
        <h2>Contact</h2>
        <p className="section-sub">// let’s connect</p>
      </div>

      <div className="contact-layout">
        <div className="contact-list">
          {CONTACTS.map((item) => (
            <a
              key={item.id}
              className="contact-card card"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon">{item.icon}</div>

              <div className="contact-info">
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="contact-image card">
          <img src="/images/contact.jpg" alt="Contact visual" />
        </div>
      </div>

      
    </section>
  );
}