import { FaCode, FaStar, FaUsers, FaClock } from 'react-icons/fa';
import { useProjects } from '../../contexts/ProjectsContext';

function ProjectStats() {
  const { projects, totalProjects } = useProjects();
  
  const stats = [
    { icon: <FaCode />, value: totalProjects, label: "Projets réalisés" },
    { icon: <FaStar />, value: "100%", label: "Satisfaction client" },
    { icon: <FaUsers />, value: "10+", label: "Clients satisfaits" },
    { icon: <FaClock />, value: "24/7", label: "Support disponible" }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem',
      padding: '2rem',
      background: 'var(--bg-card)',
      backdropFilter: 'blur(16px)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-lg)'
    }}>
      {stats.map((stat, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
            {stat.icon}
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>
            {stat.value}
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectStats;