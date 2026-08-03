import { Link } from 'react-router-dom';
import { FaGithub, FaArrowRight, FaCodeBranch, FaCheckCircle, FaExternalLinkAlt, FaBriefcase, FaGraduationCap, FaUsers, FaTrophy, FaHourglassHalf } from 'react-icons/fa';
import { useState } from 'react';
import { getProjectIcon } from '../icons/ProjectIcons';

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!project) return null;

  // Fonction pour obtenir le style du badge type
  const getTypeBadgeStyle = (type) => {
    switch (type) {
      case 'Stage':
        return { background: '#8b5cf6', icon: <FaBriefcase />, label: 'Stage' };
      case 'Collaboratif':
        return { background: '#f59e0b', icon: <FaUsers />, label: 'Collaboratif' };
      case 'Compétition':
        return { background: '#ec4899', icon: <FaTrophy />, label: 'Compétition' };
      default:
        return { background: '#10b981', icon: <FaGraduationCap />, label: 'Académique' };
    }
  };

  const typeStyle = getTypeBadgeStyle(project.type);

  return (
    <div 
      className="project-card-modern"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-glow" style={{ opacity: isHovered ? 1 : 0 }}></div>
      
      {/* Image du projet */}
      <div className="project-image-container">
        {!imageError && project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="project-image"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="project-image-placeholder">
            {getProjectIcon(project.category)}
          </div>
        )}
        <div className="project-image-overlay">
          <div className="project-banner">
            <div className="project-banner-left">
              <span className="project-category-badge">{project.category || 'Projet'}</span>
              <span className="project-type-badge" style={{ background: typeStyle.background }}>
                {typeStyle.icon}
                {typeStyle.label}
              </span>
            </div>
            <span className="project-year">{project.year || '2024'}</span>
          </div>
        </div>
      </div>
      
      <div className="project-content-modern">
        <h3 className="project-title-modern">{project.title}</h3>
        <p className="project-description-modern">{project.shortDesc}</p>
        
        <div className="project-tech-modern">
          {project.tech && project.tech.slice(0, 4).map((tech, i) => (
            <span key={i} className="tech-tag-modern">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-stats">
          <div className="stat">
            <FaCodeBranch />
            <span>Public</span>
          </div>
          <div className="stat">
            {project.status === 'En cours' ? <FaHourglassHalf /> : <FaCheckCircle />}
            <span>{project.status || 'Terminé'}</span>
          </div>
        </div>
        
        <div className="project-footer-modern">
          <div className="project-links-group">
            <Link to={`/projet/${project.id}`} className="project-link-modern">
              Détails <FaArrowRight className="link-icon" />
            </Link>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="demo-link-modern"
              >
                <FaExternalLinkAlt />
                <span>Démo</span>
              </a>
            )}
          </div>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-link-modern"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;