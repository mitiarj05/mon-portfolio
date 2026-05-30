import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../../data/projects';

function SocialLinksSection() {
  const socials = [
    { icon: <FaGithub />, name: "GitHub", url: socialLinks.github, color: "#333" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: socialLinks.linkedin, color: "#0077b5" },
    { icon: <FaFacebook />, name: "Facebook", url: socialLinks.facebook, color: "#1877f2" },
    { icon: <FaEnvelope />, name: "Email", url: `mailto:${socialLinks.email}`, color: "#ea4335" }
  ];

  return (
    <section className="social-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Me suivre
          </div>
          <h2>Retrouvez-moi sur <span className="gradient-text">les réseaux</span></h2>
          <p>Restons connectés pour échanger sur vos projets</p>
        </div>

        <div className="social-grid">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              style={{ '--social-color': social.color }}
            >
              <div className="social-card-icon" style={{ color: social.color }}>
                {social.icon}
              </div>
              <h3>{social.name}</h3>
              <span className="social-card-link">Visiter le profil →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialLinksSection;