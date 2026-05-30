import { useProjects } from '../../contexts/ProjectsContext';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function ProjectFilters() {
  const { allTechs, filter, setFilter, searchTerm, setSearchTerm } = useProjects();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Noms d'affichage pour les filtres
  const getDisplayName = (tech) => {
    if (tech === 'all') return 'Tous les projets';
    return tech;
  };

  return (
    <div className="filters-modern">
      {/* Filtres par technologie */}
      <div className="filters-tabs">
        {allTechs.map(tech => (
          <button
            key={tech}
            className={`filter-tab ${filter === tech ? 'active' : ''}`}
            onClick={() => setFilter(tech)}
          >
            {getDisplayName(tech)}
          </button>
        ))}
      </div>
      
      {/* Barre de recherche améliorée */}
      <div className="search-wrapper">
        <div className={`search-container ${isSearchOpen || searchTerm ? 'expanded' : ''}`}>
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher un projet par titre, description ou technologie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            onFocus={() => setIsSearchOpen(true)}
            onBlur={() => setIsSearchOpen(false)}
          />
          {searchTerm && (
            <button className="search-clear" onClick={() => setSearchTerm('')}>
              <FaTimes />
            </button>
          )}
        </div>
      </div>
      
      {/* Afficher le nombre de résultats */}
      <div className="search-info">
        {searchTerm && (
          <span>Résultats pour : "{searchTerm}"</span>
        )}
      </div>
    </div>
  );
}

export default ProjectFilters;