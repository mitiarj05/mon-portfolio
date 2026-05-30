import { useState } from 'react';
import { toast } from 'react-toastify';

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nom requis';
    if (!formData.email) newErrors.email = 'Email requis';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.message.trim()) newErrors.message = 'Message requis';
    if (formData.message.length < 10) newErrors.message = 'Message trop court (min 10 caractères)';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Veuillez corriger les erreurs dans le formulaire');
      return;
    }

    setIsSubmitting(true);
    
    // Simuler l'envoi (remplacez par EmailJS)
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message envoyé avec succès ! Je vous répondrai rapidement.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1500);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nom complet</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{ borderColor: errors.name ? '#ef4444' : undefined }}
          placeholder="Votre nom"
        />
        {errors.name && <small style={{ color: '#ef4444', fontSize: '0.7rem' }}>{errors.name}</small>}
      </div>
      
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{ borderColor: errors.email ? '#ef4444' : undefined }}
          placeholder="votre@email.com"
        />
        {errors.email && <small style={{ color: '#ef4444', fontSize: '0.7rem' }}>{errors.email}</small>}
      </div>
      
      <div className="form-group">
        <label>Sujet</label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="Sujet de votre message"
        />
      </div>
      
      <div className="form-group">
        <label>Message</label>
        <textarea
          rows="5"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{ borderColor: errors.message ? '#ef4444' : undefined }}
          placeholder="Votre message..."
        ></textarea>
        {errors.message && <small style={{ color: '#ef4444', fontSize: '0.7rem' }}>{errors.message}</small>}
      </div>
      
      <button 
        type="submit" 
        className="btn btn-primary" 
        disabled={isSubmitting}
        style={{ width: '100%', justifyContent: 'center' }}
      >
        <SendIcon /> {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>
    </form>
  );
}

export default ContactForm;