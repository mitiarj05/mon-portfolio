import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import CategorizedSkills from '../components/home/CategorizedSkills';
import FeaturedProjects from '../components/home/FeaturedProjects';
import EducationSection from '../components/home/EducationSection';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import ToolsSection from '../components/home/ToolsSection';
import LanguagesSection from '../components/home/LanguagesSection';
import GoalsSection from '../components/home/GoalsSection';
import CertificationsSection from '../components/home/CertificationsSection';
import InterestsSection from '../components/home/InterestsSection';
import SocialLinksSection from '../components/home/SocialLinksSection';
import ContactCTA from '../components/home/ContactCTA';

function HomePage() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      
      <div className="page-intro">
        <div className="container">
          <p className="intro-text">
            Étudiant en L3 Informatique à l'ENI Fianarantsoa, je transforme les idées en solutions 
            digitales innovantes. Passionné par le développement web et logiciel, je suis constamment 
            à la recherche de nouveaux défis pour apprendre et progresser.
          </p>
        </div>
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <StatsSection />
      
      <div id="stack">
        <CategorizedSkills />  {/* Nouvelle section classée par catégorie */}
        <ToolsSection />
        <LanguagesSection />
      </div>
      
      <div id="projects">
        <FeaturedProjects />
      </div>
      
      <div id="parcours">
        <EducationSection />
        <GoalsSection />
        <CertificationsSection />
      </div>
      
      <div id="services">
        <ServicesSection />
      </div>
      
      <InterestsSection />
      <SocialLinksSection />
      
      <div id="contact">
        <ContactCTA />
      </div>
    </>
  );
}

export default HomePage;