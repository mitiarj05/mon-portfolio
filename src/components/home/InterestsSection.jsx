import { FaCode, FaGamepad, FaMusic, FaBook, FaCoffee, FaGlobe } from 'react-icons/fa';

function InterestsSection() {
  const interests = [
    { icon: <FaCode />, name: "Open Source", description: "Contribution à des projets open source" },
    { icon: <FaGamepad />, name: "Jeux vidéo", description: "Passionné par l'univers gaming" },
    { icon: <FaMusic />, name: "Musique", description: "Guitare et production musicale" },
    { icon: <FaBook />, name: "Lecture", description: "Romans scientifiques et tech" },
  ];

  return (
    <section className="interests-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Centres d'intérêt
          </div>
          <h2>Au-delà du <span className="gradient-text">code</span></h2>
          <p>Ce qui me motive et m'inspire au quotidien</p>
        </div>

        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-card">
              <div className="interest-icon">{interest.icon}</div>
              <h3>{interest.name}</h3>
              <p>{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InterestsSection;