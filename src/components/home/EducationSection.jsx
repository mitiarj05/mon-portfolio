import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaCode } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  const educations = [
    {
      degree: "Licence 3 en Informatique (en cours)",
      school: "Ecole Nationale d'Informatique (ENI)",
      period: "2025 - 2026",
      location: "Fianarantsoa, Madagascar",
      description: "Parcours Développement Web et Logiciel - 3ème année",
      courses: ["Java EE", "Développement Mobile", "Cloud Computing", "Architecture Logicielle", "Projet de fin d'études"],
      status: "En cours"
    },
    {
      degree: "Stage - Développeur",
      school: "Entreprise à CODING.IO",
      period: "2025",
      location: "Madagascar",
      description: "Stage pratique en entreprise - Développement d'une application de gestion de bibliothèque",
      courses: ["Java Swing", "MySQL", "JDBC", "Gestion de projet", "Travail en équipe"],
      status: "Terminé"
    },
    {
      degree: "Licence 2 en Informatique",
      school: "Ecole Nationale d'Informatique (ENI)",
      period: "2024 - 2025",
      location: "Fianarantsoa, Madagascar",
      description: "Deuxième année - Spécialisation en développement",
      courses: ["POO", "Base de données avancées", "Développement Web", "Algorithmique", "Réseaux"],
      status: "Validé"
    },
    {
      degree: "Licence 1 en Informatique",
      school: "Ecole Nationale d'Informatique (ENI)",
      period: "2023 - 2024",
      location: "Fianarantsoa, Madagascar",
      description: "Première année - Initiation à l'informatique",
      courses: ["Programmation", "Algorithmique", "Systèmes d'exploitation", "Mathématiques", "Anglais technique"],
      status: "Validé"
    },
    {
      degree: "Baccalauréat Série Scientifique",
      school: "Lycée Privé Catholique Saint Paul Morondava",
      period: "2022 - 2023",
      location: "Morondava, Madagascar",
      description: "Mention Assez Bien",
      courses: ["Mathématiques", "Physique", "SVT", "Anglais", "Français"],
      status: "Obtenu"
    }
  ];

  // Filtrer pour n'afficher que certaines années (optionnel)
  const displayedEducations = educations; // ou educations.slice(0, 5) pour limiter

  return (
    <section className="education-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FaGraduationCap />
            Formation
          </div>
          <h2>Mon <span className="gradient-text">parcours</span> académique</h2>
          <p>Du Baccalauréat à la Licence 3</p>
        </div>

        <div className="timeline">
          {displayedEducations.map((edu, index) => (
            <div 
              key={index} 
              className={`timeline-item ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-title">
                    <h3>{edu.degree}</h3>
                    <span className={`timeline-status ${edu.status === 'En cours' ? 'ongoing' : 'completed'}`}>
                      {edu.status === 'En cours' ? 'En cours' : '✓ Validé'}
                    </span>
                  </div>
                  <div className="timeline-meta">
                    <span><FaCalendarAlt /> {edu.period}</span>
                    <span><FaMapMarkerAlt /> {edu.location}</span>
                    {edu.degree.includes('Stage') && <span><FaBriefcase /> Stage</span>}
                  </div>
                </div>
                <p className="timeline-school">{edu.school}</p>
                <p className="timeline-description">{edu.description}</p>
                <div className="timeline-courses">
                  {edu.courses.map((course, i) => (
                    <span key={i} className="course-tag">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;