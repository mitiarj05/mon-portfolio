import { FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp } from 'react-icons/fa';
import { contactInfo } from '../../data/projects';

function ContactMap() {
  return (
    <div className="contact-info-item" style={{ marginTop: '2rem' }}>
      <div style={{ width: '100%' }}>
        <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FaMapMarkerAlt className="contact-info-icon" style={{ width: 'auto', height: 'auto', padding: '0.5rem' }} />
          Localisation
        </h4>
        <div style={{ 
          background: 'rgba(99, 102, 241, 0.1)', 
          borderRadius: 'var(--radius)', 
          padding: '1rem',
          textAlign: 'center'
        }}>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>{contactInfo.location}</strong>
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Disponible pour des missions à distance dans le monde entier
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <FaClock style={{ color: 'var(--accent)', marginBottom: '0.3rem' }} />
              <p style={{ fontSize: '0.75rem' }}>GMT+3</p>
            </div>
            <div>
              <FaPhone style={{ color: 'var(--accent)', marginBottom: '0.3rem' }} />
              <p style={{ fontSize: '0.75rem' }}>{contactInfo.phone[0].number}</p>
              <p style={{ fontSize: '0.65rem' }}>{contactInfo.phone[1].number}</p>
            </div>
            <div>
              <FaWhatsapp style={{ color: '#25D366', marginBottom: '0.3rem' }} />
              <p style={{ fontSize: '0.75rem' }}>
                <a href={`https://wa.me/261${contactInfo.phone[0].number.substring(1)}`} target="_blank" style={{ color: '#25D366' }}>
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMap;