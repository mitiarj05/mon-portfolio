import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaCode, FaMobileAlt, FaDatabase, FaLaptopCode, FaSearch, FaRocket } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [animatedItems, setAnimatedItems] = useState([]);

  useEffect(() => {
    if (isVisible) {
      const timeouts = [];
      for (let i = 0; i < 6; i++) {
        const timeout = setTimeout(() => {
          setAnimatedItems(prev => [...prev, i]);
        }, i * 100);
        timeouts.push(timeout);
      }
      return () => timeouts.forEach(t => clearTimeout(t));
    }
  }, [isVisible]);

  const services = [
    {
      icon: <FaCode />,
      title: "Développement Web",
      description: "Création de sites web modernes et responsives avec React, HTML/CSS et JavaScript."
    },
    {
      icon: <FaMobileAlt />,
      title: "Applications Mobile",
      description: "Développement d'applications mobiles avec Flutter et Kotlin, du prototype au déploiement."
    },
    {
      icon: <FaDatabase />,
      title: "Base de données",
      description: "Conception et gestion de bases de données MySQL, PostgreSQL, MongoDB et Supabase."
    },
    {
      icon: <FaLaptopCode />,
      title: "Applications Desktop",
      description: "Développement d'applications Java avec JavaFX et Swing."
    },
    {
      icon: <FaSearch />,
      title: "Stage / Alternance",
      description: "À la recherche d'une opportunité pour mettre en pratique mes compétences."
    },
    {
      icon: <FaRocket />,
      title: "Veille technologique",
      description: "Toujours à jour des dernières technologies et bonnes pratiques."
    }
  ];

  return (
    <section className="services-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Ce que je peux faire
          </div>
          <h2>Mes <span className="gradient-text">compétences</span> clés</h2>
          <p>En tant qu'étudiant, je maîtrise ces technologies</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{
                opacity: animatedItems.includes(index) ? 1 : 0,
                transform: animatedItems.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;