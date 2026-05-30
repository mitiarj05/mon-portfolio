import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaArrowRight, FaSearch, FaLaptopCode, FaChartLine, FaUsers, FaRocket, FaBriefcase, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';
import { projects as allProjects } from '../data/projects';
import { getProjectIcon } from '../components/icons/ProjectIcons';

function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [imageErrors, setImageErrors] = useState({});

  const allTechs = ['all', ...new Set(allProjects.flatMap(p => p.tech))];

  useEffect(() => {
    let filtered = [...allProjects];
    
    if (filter !== 'all') {
      filtered = filtered.filter(project =>
        project.tech.some(tech => tech === filter)
      );
    }
    
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(term) ||
        project.shortDesc.toLowerCase().includes(term) ||
        project.tech.some(tech => tech.toLowerCase().includes(term))
      );
    }
    
    setFilteredProjects(filtered);
  }, [filter, searchTerm]);

  const stats = [
    { icon: <FaLaptopCode />, value: allProjects.length, label: "Projets réalisés", color: "#6366f1" },
    { icon: <FaChartLine />, value: "100%", label: "Satisfaction client", color: "#10b981" },
    { icon: <FaUsers />, value: "10+", label: "Clients satisfaits", color: "#f59e0b" },
    { icon: <FaRocket />, value: "24/7", label: "Support disponible", color: "#ef4444" }
  ];

  const resetFilters = () => {
    setFilter('all');
    setSearchTerm('');
  };

  const handleImageError = (projectId) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <section style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="container">
        <div className="page-intro">
          <p className="intro-text">
            Découvrez l'ensemble de mes réalisations académiques et personnelles. Chaque projet 
            représenté ici est le fruit de ma passion pour le développement et mon engagement 
            à fournir des solutions de qualité.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            borderRadius: '50px',
            fontSize: '0.85rem',
            color: '#6366f1',
            marginBottom: '1rem'
          }}>
            Mon Portfolio
          </span>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Découvrez mes <span className="gradient-text">réalisations</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Des solutions innovantes pour des défis uniques
          </p>
        </div>

        <div className="projects-stats-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-card-modern" style={{
              background: 'var(--bg-card)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem', color: stat.color }}>
                {stat.icon}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            {allTechs.map(tech => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`filter-tab ${filter === tech ? 'active' : ''}`}
                style={{
                  padding: '0.6rem 1.5rem',
                  background: filter === tech ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'transparent',
                  border: filter === tech ? 'none' : '1px solid var(--border)',
                  borderRadius: '50px',
                  color: filter === tech ? 'white' : 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {tech === 'all' ? 'Tous les projets' : tech}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border)',
              borderRadius: '60px',
              padding: '0.5rem 1rem',
              width: '100%',
              maxWidth: '400px',
              transition: 'all 0.3s'
            }}>
              <FaSearch style={{ color: 'var(--text-muted)', marginRight: '0.75rem' }} />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer'
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--bg-card)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
            <FaSearch size={48} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
            <p style={{ color: 'var(--text-secondary)' }}>Aucun projet trouvé</p>
            <button
              onClick={resetFilters}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1.5rem',
                background: '#6366f1',
                border: 'none',
                borderRadius: '50px',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)' }}>
              {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
              gap: '2rem'
            }}>
              {filteredProjects.map(project => (
                <div key={project.id} className="project-card-modern" style={{
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid var(--border)',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = '#6366f1';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  {/* IMAGE DU PROJET */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '200px',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.08))'
                  }}>
                    {!imageErrors[project.id] && project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }}
                        onError={() => handleImageError(project.id)}
                      />
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {getProjectIcon(project.category)}
                      </div>
                    )}
                    
                    {/* BADGES CORRIGÉS - COULEURS LISIBLES */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)',
                      padding: '12px 16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {/* Groupe de badges à gauche */}
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {/* Badge Catégorie */}
                        <span style={{
                          padding: '4px 12px',
                          background: '#6366f1',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: '600',
                          color: 'white',
                          letterSpacing: '0.3px',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                        }}>
                          {project.category || 'Projet'}
                        </span>
                        
                        {/* Badge Type */}
                        <span style={{
                          padding: '4px 12px',
                          background: project.type === 'Stage' ? '#8b5cf6' : '#10b981',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: '600',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: 'white',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                        }}>
                          {project.type === 'Stage' ? <FaBriefcase size={10} /> : <FaGraduationCap size={10} />}
                          {project.type || 'Académique'}
                        </span>
                      </div>
                      
                      {/* Badge Année à droite */}
                      <span style={{
                        padding: '4px 12px',
                        background: 'rgba(0, 0, 0, 0.75)',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#f0f0f0',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                      }}>
                        {project.year || '2024'}
                      </span>
                    </div>
                  </div>

                  {/* Contenu de la carte */}
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      fontSize: '1.1rem',
                      marginBottom: '8px',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px', lineHeight: '1.5' }}>
                      {project.shortDesc}
                    </p>

                    {/* Technologies */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span key={i} style={{
                          padding: '4px 10px',
                          background: 'rgba(99, 102, 241, 0.12)',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: '500',
                          color: '#6366f1'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats du projet */}
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid var(--border)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-muted)' }}>
                        <FaGithub size={12} /> <span>Public</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-muted)' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Terminé</span>
                      </div>
                    </div>

                    {/* Liens d'action */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                      <Link to={`/projet/${project.id}`} style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 14px',
                        background: 'rgba(99, 102, 241, 0.1)',
                        borderRadius: '30px',
                        color: '#6366f1',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        transition: 'all 0.3s'
                      }}>
                        Détails <FaArrowRight size={11} />
                      </Link>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '6px 12px',
                            background: 'transparent',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                            borderRadius: '30px',
                            color: '#10b981',
                            textDecoration: 'none',
                            fontSize: '0.75rem',
                            transition: 'all 0.3s'
                          }}>
                            <FaExternalLinkAlt size={10} /> Démo
                          </a>
                        )}
                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 12px',
                          background: 'transparent',
                          border: '1px solid var(--border)',
                          borderRadius: '30px',
                          color: 'var(--text-secondary)',
                          textDecoration: 'none',
                          fontSize: '0.75rem',
                          transition: 'all 0.3s'
                        }}>
                          <FaGithub size={11} /> Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ProjectsPage;