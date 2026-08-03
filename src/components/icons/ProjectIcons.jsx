// Icônes professionnelles pour chaque catégorie de projet
export const HealthcareIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9-4-18-3 9H2" stroke="currentColor"/>
    <path d="M12 8v8" stroke="currentColor"/>
    <path d="M8 12h8" stroke="currentColor"/>
  </svg>
);

export const EducationIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor"/>
    <path d="M6 12v5c3 2 6 2 9 0v-5" stroke="currentColor"/>
    <path d="M4 10v4" stroke="currentColor"/>
  </svg>
);

export const HRIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor"/>
    <circle cx="12" cy="7" r="4" stroke="currentColor"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.85" stroke="currentColor"/>
  </svg>
);

export const EcommerceIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" stroke="currentColor"/>
    <circle cx="20" cy="21" r="1" stroke="currentColor"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor"/>
    <path d="M6 10h16" stroke="currentColor"/>
  </svg>
);

export const PortfolioIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor"/>
    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor"/>
    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor"/>
    <path d="M6 3v2" stroke="currentColor"/>
    <path d="M18 3v2" stroke="currentColor"/>
  </svg>
);

// Ajoutez cette icône pour la catégorie Automobile
export const AutomobileIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.5 11.5 1 12.2 1 13v3c0 .6.4 1 1 1h2" stroke="currentColor"/>
    <circle cx="7" cy="17" r="2" stroke="currentColor"/>
    <circle cx="17" cy="17" r="2" stroke="currentColor"/>
    <path d="M5 12h14" stroke="currentColor"/>
  </svg>
);

export const WebIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" stroke="currentColor"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor"/>
  </svg>
);

export const DatabaseIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="currentColor"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="currentColor"/>
    <path d="M3 12v7" stroke="currentColor"/>
    <path d="M21 12v7" stroke="currentColor"/>
  </svg>
);

export const MobileIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor"/>
    <line x1="11" y1="18" x2="13" y2="18" stroke="currentColor"/>
  </svg>
);

// Icône par défaut
export const DefaultIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor"/>
    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor"/>
    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor"/>
  </svg>
);

// Fonction pour obtenir l'icône selon la catégorie
export const getProjectIcon = (category) => {
  switch (category) {
    case 'Healthcare':
      return <HealthcareIcon />;
    case 'Education':
      return <EducationIcon />;
    case 'HR Tech':
      return <HRIcon />;
    case 'E-commerce':
      return <EcommerceIcon />;
     case 'Portfolio':
      return <PortfolioIcon />;
     case 'Automobile':
      return <AutomobileIcon />;
    case 'Mobile':
      return <MobileIcon />;
    default:
      return <DefaultIcon />;
  }
};