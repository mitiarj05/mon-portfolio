import { FaCertificate, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

function CertificationsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      name: "Java Programming Masterclass",
      issuer: "Udemy",
      date: "2024",
      link: "#",
      skills: ["Java", "OOP", "JDBC"]
    },
    {
      name: "JavaScript - The Complete Guide",
      issuer: "OpenClassrooms",
      date: "2024",
      link: "#",
      skills: ["JavaScript", "ES6", "Node.js"]
    },
    {
      name: "MySQL Database Development",
      issuer: "Coursera",
      date: "2023",
      link: "#",
      skills: ["MySQL", "SQL", "Database Design"]
    }
  ];

  return (
    <section className="certifications-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FaCertificate />
            Certifications
          </div>
          <h2>Mes <span className="gradient-text">certifications</span></h2>
          <p>Formations complémentaires suivies</p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="cert-card"
              style={{ 
                animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              <div className="cert-icon">
                <FaCertificate />
              </div>
              <h3>{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer} • {cert.date}</p>
              <div className="cert-skills">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="cert-skill-tag">{skill}</span>
                ))}
              </div>
              <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                Voir la certification <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;