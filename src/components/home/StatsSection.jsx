import { useEffect, useState, useRef } from 'react';
import { FaCode, FaProjectDiagram, FaGithub, FaGraduationCap, FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import { projects } from '../../data/projects';

function Counter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
}

function StatsSection() {
  const totalProjects = projects.length;
  const totalTechs = [...new Set(projects.flatMap(p => p.tech))].length;
  const totalStars = 25;

  const stats = [
    { icon: <FaProjectDiagram />, value: totalProjects, label: "Projets réalisés", description: "Tous disponibles sur GitHub", color: "#6366f1" },
    { icon: <FaCode />, value: totalTechs, label: "Technologies", description: "Java, JavaScript, Python, PHP, etc.", color: "#10b981" },
    { icon: <FaGithub />, value: totalStars, suffix: "+", label: "Stars GitHub", description: "Sur mes dépôts publics", color: "#f59e0b" },
    { icon: <FaGraduationCap />, value: 3, label: "Années d'études", description: "Licence Informatique", color: "#ef4444" },
    { icon: <FaBriefcase />, value: 1, label: "Stage réalisé", description: "Expérience professionnelle", color: "#8b5cf6" },
    { icon: <FaLaptopCode />, value: 6, suffix: "+", label: "Mois d'expérience", description: "En développement", color: "#06b6d4" }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Mon parcours en chiffres
          </div>
          <h2>Mon parcours en <span className="gradient-text">chiffres</span></h2>
          <p>Ce que j'ai accompli durant ma formation</p>
        </div>

        <div className="stats-grid stats-grid-6">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-number">
                <Counter end={stat.value} suffix={stat.suffix || ''} />
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;