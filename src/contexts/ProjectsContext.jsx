import React, { createContext, useContext, useState, useMemo } from 'react';
import { projects as initialProjects } from '../data/projects';

const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
  const [projects] = useState(initialProjects);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Log pour déboguer
  console.log("Tous les projets:", projects);
  console.log("Filtre actuel:", filter);
  console.log("Recherche:", searchTerm);

  const filteredProjects = useMemo(() => {
    let filtered = [...projects];
    
    console.log("Avant filtrage:", filtered.length);
    
    // Filtre par technologie
    if (filter !== 'all') {
      filtered = filtered.filter(project => 
        project.tech.some(tech => tech.toLowerCase() === filter.toLowerCase())
      );
      console.log("Après filtre tech:", filtered.length);
    }
    
    // Filtre par recherche
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(term) ||
        project.shortDesc.toLowerCase().includes(term) ||
        project.tech.some(tech => tech.toLowerCase().includes(term))
      );
      console.log("Après filtre recherche:", filtered.length);
    }
    
    console.log("Projets filtrés finaux:", filtered);
    return filtered;
  }, [projects, filter, searchTerm]);

  const allTechs = useMemo(() => {
    const techs = new Set();
    projects.forEach(project => {
      project.tech.forEach(tech => techs.add(tech));
    });
    return ['all', ...Array.from(techs)];
  }, [projects]);

  return (
    <ProjectsContext.Provider value={{
      projects: filteredProjects,
      allTechs,
      filter,
      setFilter,
      searchTerm,
      setSearchTerm,
      totalProjects: projects.length
    }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
}