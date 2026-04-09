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
    value: '+55 11 99940-0892',
    href: 'https://wa.me/5511999400892',
  },
];

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-background">
        <div className="contact-glow contact-glow-1"></div>
        <div className="contact-glow contact-glow-2"></div>
      </div>

      <div className="contact-container">
        <div className="contact-heading">
          <h2 className="contact-title">Contact</h2>
          <span className="contact-title-line"></span>
        </div>

        <div className="contact-layout">
          <div className="contact-info-card card">
            <h3 className="contact-info-title">Contact Information</h3>

            <div className="contact-list">
              {CONTACTS.map((item) => (
                <a
                  key={item.id}
                  className="contact-item"
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
          </div>

          <div className="contact-form-card card">
            <h3 className="contact-form-title">Send Me a Message</h3>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your Message" rows="6"></textarea>

              <button type="submit" className="contact-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <footer className="contact-footer">
          <p>© {new Date().getFullYear()} Matheus Cardoso. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}