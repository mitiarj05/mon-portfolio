import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaDownload, FaArrowRight, FaGraduationCap } from 'react-icons/fa';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { socialLinks } from '../../data/projects';

function Hero() {
  const roles = ["Étudiant en L3 Informatique", "", "Développeur Mobile", "Recherche Alternance"];
  const typingText = useTypingEffect(roles, 100, 50, 2000);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-left">
          <div className="hero-badge">
            <FaGraduationCap />
            Étudiant en L3 Informatique - 2025/2026
          </div>
          
          <h1>
            <span className="gradient-text">RAJEMISON Nantenaina Mitia</span>
          </h1>
          
          <div className="hero-subtitle">
            <span className="gradient-text">{typingText}</span>
            <span className="typing-cursor"></span>
          </div>
          
          <div className="hero-description">
            Passionné par le développement web et mobile, je suis à la recherche d'un stage ou d'une alternance 
            pour mettre en pratique mes compétences et continuer à apprendre.
          </div>
          
          <div className="hero-buttons">
            <Link to="/projets" className="btn btn-primary">
              Voir mes projets <FaArrowRight />
            </Link>
            <button className="btn btn-outline" onClick={() => {
              window.open('mailto:mitiarj05@gmail.com?subject=Demande%20de%20CV%20-%20Stage/Alternance');
            }}>
              <FaDownload /> Télécharger CV
            </button>
          </div>
          
          <div className="social-links">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
            <a href={`mailto:${socialLinks.email}`} className="social-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="hero-photo-wrapper">
            <div className="hero-photo-frame"></div>
            <div className="hero-photo">
              <img 
                src="/images/Mitia.png" 
                alt="RAJEMISON Nantenaina Mitia"
                onError={(e) => {
                  e.target.src = "https://github.com/mitiarj05.png";
                }}
              />
            </div>
            <div className="hero-photo-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;