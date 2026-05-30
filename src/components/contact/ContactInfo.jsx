import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { contactInfo, socialLinks } from '../../data/projects';

function ContactInfo() {
  return (
    <div className="contact-info">
      <h3>Informations</h3>
      <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
        N'hésitez pas à me contacter pour discuter de vos projets
      </p>
      
      <div className="contact-info-item">
        <div className="contact-info-icon">
          <FaEnvelope />
        </div>
        <div>
          <strong>Email</strong><br />
          <a href={`mailto:${contactInfo.email}`} style={{ color: 'var(--accent)' }}>
            {contactInfo.email}
          </a>
        </div>
      </div>
      
      <div className="contact-info-item">
        <div className="contact-info-icon">
          <FaPhone />
        </div>
        <div>
          <strong>Téléphone</strong><br />
          <a href={`tel:${contactInfo.phone[0].number}`} style={{ color: 'var(--accent)' }}>
            {contactInfo.phone[0].number} ({contactInfo.phone[0].provider})
          </a><br />
          <a href={`tel:${contactInfo.phone[1].number}`} style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>
            {contactInfo.phone[1].number} ({contactInfo.phone[1].provider})
          </a>
        </div>
      </div>
      
      <div className="contact-info-item">
        <div className="contact-info-icon">
          <FaWhatsapp />
        </div>
        <div>
          <strong>WhatsApp</strong><br />
          <a href={`https://wa.me/261${contactInfo.phone[0].number.substring(1)}`} target="_blank" style={{ color: '#25D366' }}>
            {contactInfo.phone[0].number} (Envoyer un message)
          </a>
        </div>
      </div>
      
      <div className="contact-info-item">
        <div className="contact-info-icon">
          <FaGithub />
        </div>
        <div>
          <strong>GitHub</strong><br />
          <a href={socialLinks.github} target="_blank" style={{ color: 'var(--accent)' }}>
            github.com/mitiarj05
          </a>
        </div>
      </div>
      
      <div className="contact-info-item">
        <div className="contact-info-icon">
          <FaMapMarkerAlt />
        </div>
        <div>
          <strong>Localisation</strong><br />
          {contactInfo.location}
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;