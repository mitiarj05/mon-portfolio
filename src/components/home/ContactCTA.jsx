import { Link } from 'react-router-dom';
import { FaArrowRight, FaEnvelope, FaBriefcase } from 'react-icons/fa';

function ContactCTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-badge">
            <FaBriefcase />
            À la recherche d'un stage ou d'une alternance
          </div>
          <h2>Vous avez un <span className="gradient-text">projet</span> ou une <span className="gradient-text">opportunité</span> ?</h2>
          <p>Je suis disponible pour des stages, alternances ou collaborations sur des projets intéressants</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Me contacter <FaArrowRight />
            </Link>
            <a href="mailto:mitiarj05@gmail.com" className="btn btn-outline">
              <FaEnvelope /> mitiarj05@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;