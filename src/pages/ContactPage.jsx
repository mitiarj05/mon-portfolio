import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';

function ContactPage() {
  return (
    <section className="contact-section">
      <div className="container">
        {/* Phrase d'introduction professionnelle */}
        <div className="page-intro">
          <p className="intro-text">
            Vous avez un projet en tête ou une opportunité de stage/alternance à me proposer ? 
            N'hésitez pas à me contacter. Je serai ravi d'échanger avec vous et de discuter 
            de la manière dont je peux contribuer à votre équipe.
          </p>
        </div>

        <div className="section-header">
          <h2>Contactez-moi</h2>
          <div className="section-subtitle">Parlons de votre projet</div>
        </div>
        
        <div className="contact-grid">
          <ContactForm />
          <div>
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;