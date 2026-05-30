import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  const educations = [
    {
      degree: "Licence 3 en Informatique",
      school: "Ecole Nationale d'Informatique (ENI)",
      period: "2023 - 2026",
      location: "Madagascar",
      description: "Parcours Développement Web et Logiciel",
      courses: ["Java", "Base de données", "Génie logiciel", "Développement web", "Algorithmique"]
    },
    {
      degree: "Baccalauréat Série Scientifique",
      school: "Lycée Privé Catholique Saint Paul Morondava",
      period: "2022 - 2023",
      location: "Madagascar",
      description: "Mention Assez Bien",
      courses: ["Mathématiques", "Physique", "SVT"]
    }
  ];

  return (
    <section className="education-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FaGraduationCap />
            Formation
          </div>
          <h2>Mon <span className="gradient-text">parcours</span> académique</h2>
          <p>Mon parcours pour devenir développeur</p>
        </div>

        <div className="timeline">
          {educations.map((edu, index) => (
            <div 
              key={index} 
              className={`timeline-item ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{edu.degree}</h3>
                  <div className="timeline-meta">
                    <span><FaCalendarAlt /> {edu.period}</span>
                    <span><FaMapMarkerAlt /> {edu.location}</span>
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