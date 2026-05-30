import { Link } from 'react-router-dom';
import { 
  FaGithub, FaEnvelope, FaHeart, FaPhone, FaWhatsapp, 
  FaLinkedin, FaFacebook, FaMapMarkerAlt, FaClock, 
  FaArrowUp, FaCode
} from 'react-icons/fa';
import { contactInfo, socialLinks } from '../../data/projects';
import { useState, useEffect } from 'react';

function Footer() {
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Accueil', path: '/', hash: 'home' },
    { name: 'À propos', path: '/', hash: 'about' },
    { name: 'Stack', path: '/', hash: 'stack' },
    { name: 'Projets', path: '/projets' },
    { name: 'Parcours', path: '/', hash: 'parcours' },
    { name: 'Services', path: '/', hash: 'services' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = (item) => {
    if (item.path === '/projets' || item.path === '/contact') {
      window.location.href = item.path;
    } else if (item.hash) {
      if (window.location.pathname === '/') {
        const element = document.getElementById(item.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = `/#${item.hash}`;
      }
    }
  };

  return (
    <footer className="footer-professional">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo logo-bold">
              Mitia RJ
            </div>
            <p className="footer-description">
              Étudiant en L3 Informatique passionné par le développement web et logiciel. 
              À la recherche d'un stage ou d'une alternance pour mettre en pratique mes compétences.
            </p>
            <div className="footer-status">
              <span className="status-dot"></span>
              Disponible pour opportunités
            </div>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              {footerLinks.map((link, index) => (
                <li key={index}>
                  {link.path === '/projets' || link.path === '/contact' ? (
                    <Link to={link.path} onClick={() => window.scrollTo(0, 0)}>
                      {link.name}
                    </Link>
                  ) : (
                    <button onClick={() => handleLinkClick(link)}>
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="footer-contact-items">
              <a href={`tel:${contactInfo.phone[0].number}`} className="footer-contact-item">
                <FaPhone /> {contactInfo.phone[0].number}
                <span className="contact-provider">{contactInfo.phone[0].provider}</span>
              </a>
              <a href={`tel:${contactInfo.phone[1].number}`} className="footer-contact-item">
                <FaPhone /> {contactInfo.phone[1].number}
                <span className="contact-provider">{contactInfo.phone[1].provider}</span>
              </a>
              <a href={`https://wa.me/261${contactInfo.phone[0].number.substring(1)}`} target="_blank" rel="noopener noreferrer" className="footer-contact-item whatsapp">
                <FaWhatsapp /> WhatsApp
              </a>
              <a href={`mailto:${contactInfo.email}`} className="footer-contact-item">
                <FaEnvelope /> {contactInfo.email}
              </a>
              <div className="footer-contact-item location">
                <FaMapMarkerAlt /> {contactInfo.location}
              </div>
              <div className="footer-contact-item timezone">
                <FaClock /> GMT+3
              </div>
            </div>
          </div>

          <div className="footer-social">
            <h4>Réseaux sociaux</h4>
            <div className="footer-social-icons">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-icon-link github">
                <FaGithub className="social-icon-svg" />
                <span>GitHub</span>
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-link linkedin">
                <FaLinkedin className="social-icon-svg" />
                <span>LinkedIn</span>
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-link facebook">
                <FaFacebook className="social-icon-svg" />
                <span>Facebook</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="social-icon-link email">
                <FaEnvelope className="social-icon-svg" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {year} Mitia RJ. Tous droits réservés.</p>
          </div>
          <div className="footer-credits">
            <p>
              Fait avec <FaHeart className="heart-icon" /> et 
              <span className="tech-stack">
                <FaCode /> React
              </span>
            </p>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button className="footer-scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}

export default Footer;