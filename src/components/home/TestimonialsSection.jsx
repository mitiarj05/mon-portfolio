import { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Jean Rakoto",
    position: "CEO, Tech Solutions",
    content: "Un développeur exceptionnel ! Le travail fourni dépasse nos attentes. Je recommande vivement.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Marie Randria",
    position: "CTO, Innovate Corp",
    content: "Professionnalisme et réactivité au rendez-vous. Une collaboration parfaite !",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Tiana Andrianaivo",
    position: "Product Owner, Digital Agency",
    content: "Une maîtrise technique impressionnante et une grande capacité d'adaptation.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Témoignages
          </div>
          <h2>Ce que disent mes <span className="gradient-text">clients</span></h2>
          <p>Ils m'ont fait confiance et recommandent mes services</p>
        </div>

        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={prev}>
            <FaChevronLeft />
          </button>
          
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <div className="testimonial-content">
              <p>{testimonials[currentIndex].content}</p>
            </div>
            <div className="testimonial-author">
              <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
              <div>
                <h4>{testimonials[currentIndex].name}</h4>
                <p>{testimonials[currentIndex].position}</p>
              </div>
            </div>
            <div className="testimonial-rating">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
          
          <button className="carousel-btn next" onClick={next}>
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;