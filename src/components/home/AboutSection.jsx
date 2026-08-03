import { FaUserGraduate, FaCode, FaHeart, FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaGraduationCap, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { contactInfo, socialLinks } from '../../data/projects';

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FaUserGraduate />
            Qui suis-je ?
          </div>
          <h2>À <span className="gradient-text">propos</span></h2>
          <p>Découvrez mon parcours et ma personnalité</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>RAJEMISON Nantenaina Mitia</h3>
            <p className="about-bio">
              Étudiant en <strong>L3 Informatique</strong> à l'<strong>Ecole Nationale d'Informatique (ENI) de Fianarantsoa</strong>,
              je suis passionné par le développement d'applications web et mobiles depuis 3 ans.
            </p>
            <p>
              Curieux et autodidacte, j'aime apprendre de nouvelles technologies et les mettre en pratique
              à travers des projets concrets. Mon objectif est de devenir un développeur Web & Mobile accompli.
            </p>
            <div className="about-info-grid">
              <div className="about-info-item">
                <FaGraduationCap />
                <div>
                  <strong>Formation</strong>
                  <p>Licence 3 Informatique - ENI Fianarantsoa</p>
                </div>
              </div>
              <div className="about-info-item">
                <FaMapMarkerAlt />
                <div>
                  <strong>Localisation</strong>
                  <p>Fianarantsoa, Madagascar</p>
                </div>
              </div>
              <div className="about-info-item">
                <FaCode />
                <div>
                  <strong>Disponibilité</strong>
                  <p>Stage / Alternance dès maintenant</p>
                </div>
              </div>
              <div className="about-info-item">
                <FaHeart />
                <div>
                  <strong>Passions</strong>
                  <p>Code, Innovation, Open Source</p>
                </div>
              </div>
              <div className="about-info-item">
                <FaPhone />
                <div>
                  <strong>Téléphone</strong>
                  <p>{contactInfo.phone[0].number} ({contactInfo.phone[0].provider})</p>
                  <p style={{ fontSize: '0.7rem' }}>{contactInfo.phone[1].number} ({contactInfo.phone[1].provider})</p>
                </div>
              </div>
              <div className="about-info-item">
                <FaWhatsapp />
                <div>
                  <strong>WhatsApp</strong>
                  <a href={`https://wa.me/261${contactInfo.phone[0].number.substring(1)}`} target="_blank" style={{ color: '#25D366' }}>
                    Cliquez pour envoyer un message
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-contact-card">
            <h4>Me contacter directement</h4>
            <div className="about-contact-links">
              <a href={`tel:${contactInfo.phone[0].number}`} className="about-contact-link">
                <FaPhone /> {contactInfo.phone[0].number}
              </a>
              <a href={`tel:${contactInfo.phone[1].number}`} className="about-contact-link">
                <FaPhone /> {contactInfo.phone[1].number}
              </a>
              <a href={`https://wa.me/261${contactInfo.phone[0].number.substring(1)}`} target="_blank" className="about-contact-link" style={{ color: '#25D366' }}>
                <FaWhatsapp /> WhatsApp
              </a>
              <a href={`mailto:${contactInfo.email}`} className="about-contact-link">
                <FaEnvelope /> {contactInfo.email}
              </a>
              <a href={socialLinks.github} target="_blank" className="about-contact-link">
                <FaGithub /> GitHub
              </a>
              <a href={socialLinks.linkedin} target="_blank" className="about-contact-link">
                <FaLinkedin /> LinkedIn
              </a>
              <a href={socialLinks.facebook} target="_blank" className="about-contact-link">
                <FaFacebook /> Facebook
              </a>
            </div>
            <div className="about-cv">
              <a
                href="/cv/CV_RAJEMISON_Nantenaina_Mitia.pdf"
                download="CV_RAJEMISON_Nantenaina_Mitia.pdf"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                📄 Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;