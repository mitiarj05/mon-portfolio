import { FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contactez-moi</h2>
        <p className="contact-subtitle">
        </p>
        
        <div className="contact-buttons">
          <a href="https://github.com/mitiarj05" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaGithub /> GitHub
          </a>
          <a href="mailto:mitiarj05@gmail.com" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaEnvelope /> mitiarj05@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;