import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import ProjectCard from '../projects/ProjectCard';

function FeaturedProjects() {
  const allProjects = projects;

  // Afficher directement sans animation conditionnelle
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Portfolio
          </div>
          <h2>Mes <span className="gradient-text">projets</span></h2>
          <p>Découvrez mes réalisations académiques, stages et projets collaboratifs</p>
        </div>
        
        <div className="projects-grid">
          {allProjects.map((project) => (
            <div key={project.id} style={{ display: 'block' }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/projets" className="btn btn-outline">
            Voir tous les projets →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;