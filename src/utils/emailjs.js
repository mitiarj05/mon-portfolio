import emailjs from '@emailjs/browser';

// Initialisez avec vos credentials EmailJS
// Inscrivez-vous sur https://www.emailjs.com/ pour obtenir ces valeurs
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY'
};

export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Mitia',
      reply_to: formData.email
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error };
  }
};