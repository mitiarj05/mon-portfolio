import { FaLanguage } from 'react-icons/fa';

function LanguagesSection() {
  const languages = [
    { name: "Malgache", level: "Langue maternelle", proficiency: 100, flag: "🇲🇬" },
    { name: "Français", level: "Courant", proficiency: 85, flag: "🇫🇷", certification: "DELF B2" },
    { name: "Anglais", level: "Intermédiaire", proficiency: 65, flag: "🇬🇧", certification: "TOEIC en cours" }
  ];

  return (
    <section className="languages-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FaLanguage />
            Langues
          </div>
          <h2>Mes <span className="gradient-text">compétences</span> linguistiques</h2>
          <p>Un atout pour communiquer et collaborer</p>
        </div>

        <div className="languages-grid">
          {languages.map((lang, index) => (
            <div key={index} className="language-card">
              <div className="language-flag">{lang.flag}</div>
              <h3>{lang.name}</h3>
              <p className="language-level">{lang.level}</p>
              {lang.certification && (
                <span className="language-cert">{lang.certification}</span>
              )}
              <div className="language-progress">
                <div 
                  className="language-progress-bar" 
                  style={{ width: `${lang.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LanguagesSection;