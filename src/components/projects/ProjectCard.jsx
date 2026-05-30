import { Link } from 'react-router-dom';
import { FaGithub, FaArrowRight, FaCodeBranch, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';
import { getProjectIcon } from '../icons/ProjectIcons';

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  if (!project) return null;

  return (
    <div 
      className="project-card-modern"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-glow" style={{ opacity: isHovered ? 1 : 0 }}></div>
      
      <div className="project-banner">
        <span className="project-category-badge">{project.category || 'Projet'}</span>
        <span className="project-year">{project.year || '2024'}</span>
      </div>
      
      <div className="project-icon-modern">
        <div className="icon-pulse" style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}>
          {getProjectIcon(project.category)}
        </div>
      </div>
      
      <div className="project-content-modern">
        <h3 className="project-title-modern">{project.title}</h3>
        <p className="project-description-modern">{project.shortDesc}</p>
        
        <div className="project-tech-modern">
          {project.tech && project.tech.map((tech, i) => (
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
            <FaCheckCircle />
            <span>Terminé</span>
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