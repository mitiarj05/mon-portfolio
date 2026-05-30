import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { 
  FaReact, FaNodeJs, FaDatabase, FaJava, FaJs, FaHtml5, 
  FaCss3Alt, FaGitAlt, FaCloud, FaCode, FaServer, FaDesktop,
  FaWindows
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiSpringboot, SiCplusplus } from 'react-icons/si';

function CategorizedSkills() {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      name: "Frontend",
      icon: <FaCode />,
      color: "#3b82f6",
      skills: [
        { name: "React", level: "Intermédiaire", progress: 65, icon: <FaReact /> },
        { name: "JavaScript", level: "Intermédiaire", progress: 70, icon: <FaJs /> },
        { name: "HTML5/CSS3", level: "Avancé", progress: 85, icon: <FaHtml5 /> }
      ]
    },
    {
      name: "Backend",
      icon: <FaServer />,
      color: "#10b981",
      skills: [
        { name: "Node.js", level: "Intermédiaire", progress: 65, icon: <FaNodeJs /> },
        { name: "Express.js", level: "Intermédiaire", progress: 60, icon: <SiExpress /> },
        { name: "Java", level: "Avancé", progress: 85, icon: <FaJava /> },
        { name: "Spring Boot", level: "Débutant", progress: 45, icon: <SiSpringboot /> }
      ]
    },
    {
      name: "Base de données",
      icon: <FaDatabase />,
      color: "#f59e0b",
      skills: [
        { name: "MySQL", level: "Avancé", progress: 80, icon: <SiMysql /> },
        { name: "MongoDB", level: "Intermédiaire", progress: 60, icon: <SiMongodb /> },
        { name: "PostgreSQL", level: "Intermédiaire", progress: 55, icon: <FaDatabase /> }
      ]
    },
    {
      name: "Outils & DevOps",
      icon: <FaCloud />,
      color: "#8b5cf6",
      skills: [
        { name: "Git/GitHub", level: "Avancé", progress: 80, icon: <FaGitAlt /> },
        { name: "Docker", level: "Débutant", progress: 40, icon: <FaCloud /> },
        { name: "Render", level: "Intermédiaire", progress: 65, icon: <FaCloud /> }
      ]
    },
    {
      name: "Desktop",
      icon: <FaDesktop />,
      color: "#ef4444",
      skills: [
        { name: "JavaFX", level: "Avancé", progress: 80, icon: <FaJava /> },
        { name: "Swing", level: "Avancé", progress: 75, icon: <FaJava /> },
        { name: "C#/.NET", level: "Débutant", progress: 50, icon: <FaWindows /> }
      ]
    }
  ];

  return (
    <section className="categorized-skills-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FaCode />
            Stack Technique
          </div>
          <h2>Mes <span className="gradient-text">compétences</span> par catégorie</h2>
          <p>Frontend • Backend • Base de données • Outils • Desktop</p>
        </div>

        <div className="skills-categories-grid">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className="skill-category-card"
              style={{ 
                animation: isVisible ? 'fadeInUp 0.6s ease forwards' : 'none',
                animationDelay: `${catIndex * 0.1}s`,
                opacity: 0
              }}
            >
              <div className="category-header" style={{ borderBottomColor: category.color }}>
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3>{category.name}</h3>
              </div>
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="category-skill-item">
                    <div className="skill-info">
                      <div className="skill-icon-small" style={{ color: category.color }}>
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level-badge ${skill.level.toLowerCase()}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="skill-progress-cat">
                      <div 
                        className="skill-progress-bar-cat" 
                        style={{ 
                          width: isVisible ? `${skill.progress}%` : '0%',
                          backgroundColor: category.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorizedSkills;