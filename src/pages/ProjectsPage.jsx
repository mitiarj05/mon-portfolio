import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaArrowRight, FaSearch, FaLaptopCode, FaChartLine, FaUsers, FaRocket } from 'react-icons/fa';
import { projects as allProjects } from '../data/projects';
import { getProjectIcon } from '../components/icons/ProjectIcons';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Récupérer toutes les technologies uniques
  const allTechs = ['all', ...new Set(allProjects.flatMap(p => p.tech))];

  useEffect(() => {
    setProjects(allProjects);
  }, []);

  useEffect(() => {
    let filtered = [...allProjects];
    
    // Filtrer par technologie
    if (filter !== 'all') {
      filtered = filtered.filter(project =>
        project.tech.some(tech => tech === filter)
      );
    }
    
    // Filtrer par recherche
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

  return (
    <section style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="container">
        {/* Phrase d'introduction professionnelle */}
        <div className="page-intro">
          <p className="intro-text">
            Découvrez l'ensemble de mes réalisations académiques et personnelles. Chaque projet 
            représenté ici est le fruit de ma passion pour le développement et mon engagement 
            à fournir des solutions de qualité.
          </p>
        </div>

        {/* Hero section */}
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
          <p style={{ color: '#a1a1aa', maxWidth: '600px', margin: '0 auto' }}>
            Des solutions innovantes pour des défis uniques
          </p>
        </div>

        {/* Statistiques */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              background: 'rgba(18, 18, 24, 0.8)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '1rem',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem', color: stat.color }}>
                {stat.icon}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#71717a' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filtres */}
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
                style={{
                  padding: '0.6rem 1.5rem',
                  background: filter === tech ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'transparent',
                  border: filter === tech ? 'none' : '1px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: '50px',
                  color: filter === tech ? 'white' : '#a1a1aa',
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

          {/* Barre de recherche */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '60px',
              padding: '0.5rem 1rem',
              width: '100%',
              maxWidth: '400px'
            }}>
              <FaSearch style={{ color: '#71717a', marginRight: '0.75rem' }} />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
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
                    color: '#71717a',
                    cursor: 'pointer'
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Résultats */}
        {filteredProjects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', background: 'rgba(18, 18, 24, 0.8)', borderRadius: '1rem' }}>
            <FaSearch size={48} style={{ color: '#71717a', marginBottom: '1rem' }} />
            <p>Aucun projet trouvé</p>
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
            <div style={{ textAlign: 'center', marginBottom: '2rem', color: '#71717a' }}>
              {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
              gap: '2rem'
            }}>
              {filteredProjects.map(project => (
                <div key={project.id} style={{
                  background: 'rgba(18, 18, 24, 0.8)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = '#6366f1';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  {/* Bandeau */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '1rem 1.5rem',
                    background: 'rgba(0,0,0,0.3)',
                    borderBottom: '1px solid rgba(99, 102, 241, 0.2)'
                  }}>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(99, 102, 241, 0.2)',
                      borderRadius: '50px',
                      fontSize: '0.7rem',
                      color: '#6366f1'
                    }}>
                      {project.category || 'Projet'}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#71717a' }}>{project.year || '2024'}</span>
                  </div>

                  {/* Icône professionnelle par catégorie */}
                  <div style={{
                    padding: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05))'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      borderRadius: '25px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6366f1',
                      transition: 'all 0.3s ease'
                    }}>
                      {getProjectIcon(project.category)}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      marginBottom: '0.5rem',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}>
                      {project.title}
                    </h3>
                    <p style={{ color: '#a1a1aa', fontSize: '0.85rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                      {project.shortDesc}
                    </p>

                    {/* Technologies */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {project.tech.map((tech, i) => (
                        <span key={i} style={{
                          padding: '0.2rem 0.7rem',
                          background: 'rgba(99, 102, 241, 0.15)',
                          borderRadius: '50px',
                          fontSize: '0.7rem',
                          color: '#6366f1'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Link to={`/projet/${project.id}`} style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: 'rgba(99, 102, 241, 0.1)',
                        borderRadius: '50px',
                        color: '#6366f1',
                        textDecoration: 'none',
                        fontSize: '0.85rem'
                      }}>
                        Détails <FaArrowRight size={12} />
                      </Link>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: 'transparent',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        borderRadius: '50px',
                        color: '#a1a1aa',
                        textDecoration: 'none',
                        fontSize: '0.85rem'
                      }}>
                        <FaGithub /> Code
                      </a>
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