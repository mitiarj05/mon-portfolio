import { FaBullseye, FaBriefcase, FaGraduationCap, FaRocket } from 'react-icons/fa';

function GoalsSection() {
  const goals = [
    {
      icon: <FaBriefcase />,
      title: "Stage / Alternance",
      description: "Trouver une opportunité de 2 à 6 mois pour mettre en pratique mes compétences",
      timeline: "2025-2026"
    },
    {
      icon: <FaGraduationCap />,
      title: "Obtenir ma Licence",
      description: "Valider ma L3 avec mention et poursuivre en Master",
      timeline: "2026"
    },
    {
      icon: <FaRocket />,
      title: "Développeur Full Stack",
      description: "Devenir un expert en développement web et logiciel",
      timeline: "Objectif carrière"
    }
  ];

  return (
    <section className="goals-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FaBullseye />
            Objectifs
          </div>
          <h2>Mes <span className="gradient-text">ambitions</span></h2>
          <p>Ce que je veux accomplir</p>
        </div>

        <div className="goals-grid">
          {goals.map((goal, index) => (
            <div key={index} className="goal-card">
              <div className="goal-icon">{goal.icon}</div>
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
              <span className="goal-timeline">{goal.timeline}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GoalsSection;