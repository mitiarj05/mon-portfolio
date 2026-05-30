import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FaGithub, FaArrowLeft, FaCalendar, FaTag, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import { getProjectIcon } from '../components/icons/ProjectIcons';

function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Projet non trouvé</h2>
        <Link to="/projets" className="btn btn-primary">Retour aux projets</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        {/* Phrase d'introduction professionnelle */}
        <div className="page-intro page-intro-detail">
          <p className="intro-text">
            Voici en détail le projet <strong>{project.title}</strong>. Découvrez les technologies utilisées,
            les fonctionnalités implémentées et le lien vers le code source.
          </p>
        </div>

        <Link to="/projets" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--accent)' }}>
          <FaArrowLeft /> Retour aux projets
        </Link>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div>
            <div style={{ 
              background: 'var(--bg-secondary)', 
              borderRadius: 'var(--radius)', 
              padding: '2rem', 
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '300px'
            }}>
              <div style={{ width: '120px', height: '120px', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {getProjectIcon(project.category)}
              </div>
            </div>
          </div>
          
          <div>
            <h1>{project.title}</h1>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(99, 102, 241, 0.15)', padding: '0.2rem 0.8rem', borderRadius: '50px', fontSize: '0.8rem' }}>
                <FaCalendar style={{ marginRight: '0.3rem' }} /> {project.year}
              </span>
              <span style={{ background: 'rgba(99, 102, 241, 0.15)', padding: '0.2rem 0.8rem', borderRadius: '50px', fontSize: '0.8rem' }}>
                <FaTag style={{ marginRight: '0.3rem' }} /> {project.category}
              </span>
              <span style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '0.2rem 0.8rem', borderRadius: '50px', fontSize: '0.8rem', color: '#10b981' }}>
                <FaCheckCircle style={{ marginRight: '0.3rem' }} /> Terminé
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              {project.longDesc || project.shortDesc}
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Technologies utilisées</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map((tech, i) => (
                  <span key={i} style={{ background: 'rgba(99, 102, 241, 0.15)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.features && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Fonctionnalités clés</h3>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                  {project.features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaGithub /> Voir sur GitHub
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <FaExternalLinkAlt /> Voir la démo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;