import { FaGitAlt, FaCode, FaDatabase, FaTrello } from 'react-icons/fa';
import { SiPostman, SiRender, SiDocker, SiFigma } from 'react-icons/si';

function ToolsSection() {
  const tools = [
    { icon: <FaGitAlt />, name: "Git & GitHub", category: "Versioning" },
    { icon: <FaCode />, name: "VS Code", category: "IDE" },
    { icon: <FaDatabase />, name: "MySQL Workbench", category: "Base de données" },
    { icon: <SiPostman />, name: "Postman", category: "API" },
    { icon: <SiRender />, name: "Render", category: "Déploiement" },
    { icon: <SiDocker />, name: "Docker", category: "Conteneurisation" },
    { icon: <SiFigma />, name: "Figma", category: "Design" },
    { icon: <FaTrello />, name: "Trello", category: "Gestion de projet" }
  ];

  return (
    <section className="tools-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 7h-4.18A3 3 0 0 0 16 5.18V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1.18A3 3 0 0 0 8.18 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Outils
          </div>
          <h2>Outils et <span className="gradient-text">environnements</span></h2>
          <p>Ma boîte à outils quotidienne</p>
        </div>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-icon">{tool.icon}</div>
              <div className="tool-info">
                <h4>{tool.name}</h4>
                <span className="tool-category">{tool.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsSection;