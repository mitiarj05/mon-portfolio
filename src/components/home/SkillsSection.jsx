import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skills } from '../../data/projects';
import { useEffect, useState } from 'react';

function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [animatedItems, setAnimatedItems] = useState([]);

  useEffect(() => {
    if (isVisible) {
      const timeouts = [];
      skills.forEach((_, i) => {
        const timeout = setTimeout(() => {
          setAnimatedItems(prev => [...prev, i]);
        }, i * 80);
        timeouts.push(timeout);
      });
      return () => timeouts.forEach(t => clearTimeout(t));
    }
  }, [isVisible]);

  return (
    <section className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M8 3H6C4.9 3 4 3.9 4 5V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V5C20 3.9 19.1 3 18 3H16" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 7H15" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 11H13" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Core Competencies
          </div>
          <h2>Technical Mastery</h2>
          <p>Technologies I work with daily</p>
        </div>
        
        <div className="skills-grid" ref={ref}>
          {skills.map((skill, index) => (
            <SkillCard 
              key={index} 
              skill={skill} 
              isVisible={animatedItems.includes(index)}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, isVisible, delay }) {
  const getLevelColor = (level) => {
    if (level === 'Advanced') return '#10b981';
    if (level === 'Intermediate') return '#f59e0b';
    if (level === 'Beginner') return '#ef4444';
    return '#6366f1';
  };

  const getLevelClass = (level) => {
    if (level === 'Advanced') return 'advanced';
    if (level === 'Intermediate') return 'intermediate';
    if (level === 'Beginner') return 'beginner';
    return '';
  };

  return (
    <div 
      className="skill-card" 
      style={{
        transition: 'all 0.3s ease',
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="skill-icon-wrapper">
        <div className="skill-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor"/>
            <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor"/>
            <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor"/>
          </svg>
        </div>
      </div>
      <div className="skill-name">{skill.name}</div>
      <div className={`skill-level ${getLevelClass(skill.level)}`}>
        {skill.level}
      </div>
      <div className="skill-progress">
        <div 
          className="skill-progress-bar" 
          style={{ 
            width: isVisible ? `${skill.progress}%` : '0%', 
            transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: `${delay + 100}ms`,
            background: getLevelColor(skill.level)
          }}
        ></div>
      </div>
    </div>
  );
}

export default SkillsSection;