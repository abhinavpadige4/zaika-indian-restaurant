import React, { useState } from 'react';
import testimonialsData from '../data/testimonials.json';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const testimonial = testimonialsData[currentIndex];

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          What Our Guests Say
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center fade-in">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <span 
                  key={star} 
                  className={`text-secondary/50 ${star <= testimonial.rating ? 'text-secondary' : ''}`}
                >
                  ⭐
                </span>
              ))}
            </div>
            
            <p className="text-lg italic text-gray-700 mb-6 max-w-xl mx-auto line-clamp-4">
              "{testimonial.text}"
            </p>
            
            <div className="flex flex-col items-center">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-secondary"
              />
              <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.date}</p>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary/90 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary transition-all duration-300 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary/90 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary transition-all duration-300 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${index === currentIndex 
                ? 'w-3 h-3 bg-primary rounded-full' 
                : 'w-3 h-3 bg-secondary/30 rounded-full hover:bg-secondary/50'
              } transition-all duration-300"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;