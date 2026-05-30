import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, FaTimes, FaSun, FaMoon, FaUser, FaCode, 
  FaProjectDiagram, FaGraduationCap, FaServicestack, 
  FaEnvelope, FaBars, FaExternalLinkAlt 
} from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/', hash: 'home', icon: <FaHome />, description: 'Page d\'accueil' },
    { name: 'À propos', path: '/', hash: 'about', icon: <FaUser />, description: 'Qui suis-je' },
    { name: 'Stack', path: '/', hash: 'stack', icon: <FaCode />, description: 'Technologies maîtrisées' },
    { name: 'Projets', path: '/projets', hash: 'projects', icon: <FaProjectDiagram />, description: 'Mes réalisations' },
    { name: 'Parcours', path: '/', hash: 'parcours', icon: <FaGraduationCap />, description: 'Formation et expériences' },
    { name: 'Services', path: '/', hash: 'services', icon: <FaServicestack />, description: 'Ce que je propose' },
    { name: 'Contact', path: '/contact', hash: 'contact', icon: <FaEnvelope />, description: 'Me contacter' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleScrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleLinkClick = (item) => {
    if (item.path === '/projets' || item.path === '/contact') {
      setIsMenuOpen(false);
    } else {
      handleScrollToSection(item.hash);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (item) => {
    if (item.path === '/') {
      if (item.hash === 'home') return location.pathname === '/' && !location.hash;
      return location.pathname === '/' && location.hash === `#${item.hash}`;
    }
    return location.pathname === item.path;
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="logo logo-bold" onClick={closeMenu}>
            Mitia RJ
          </Link>
          
          <div className="nav-right">
            <button className="theme-toggle-desktop" onClick={toggleTheme} aria-label="Changer de thème">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            
            <button className="menu-trigger" onClick={openMenu}>
              <span className="menu-trigger-text">Menu</span>
              <div className="menu-trigger-icon">
                <FaBars />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu latéral */}
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <div className="side-menu-logo logo-bold">
            Mitia RJ
          </div>
          <button className="close-menu-btn" onClick={closeMenu} aria-label="Fermer le menu">
            <FaTimes />
          </button>
        </div>
        
        <div className="side-menu-content">
          <div className="side-menu-intro">
            <p className="side-menu-greeting">NAVIGATION</p>
            <h4>Explorer le portfolio</h4>
          </div>
          
          <ul className="side-menu-links">
            {navItems.map(item => (
              <li key={item.name}>
                {item.path === '/projets' || item.path === '/contact' ? (
                  <Link 
                    to={item.path} 
                    className={`side-link ${isActive(item) ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    <span className="side-link-icon">{item.icon}</span>
                    <div className="side-link-content">
                      <span className="side-link-name">{item.name}</span>
                      <span className="side-link-desc">{item.description}</span>
                    </div>
                  </Link>
                ) : (
                  <button 
                    className={`side-link ${isActive(item) ? 'active' : ''}`}
                    onClick={() => handleScrollToSection(item.hash)}
                  >
                    <span className="side-link-icon">{item.icon}</span>
                    <div className="side-link-content">
                      <span className="side-link-name">{item.name}</span>
                      <span className="side-link-desc">{item.description}</span>
                    </div>
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="side-menu-footer">
            <div className="side-menu-divider"></div>
            
            <div className="side-menu-actions">
              <button className="side-theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
                <span>{theme === 'light' ? ' Mode sombre' : ' Mode clair'}</span>
              </button>
              
              <Link to="/contact" className="side-hire-btn" onClick={closeMenu}>
                <FaExternalLinkAlt /> Me contacter
              </Link>
            </div>
            
            <div className="side-menu-status">
              <span className="status-dot"></span>
              Disponible pour stage / alternance
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;