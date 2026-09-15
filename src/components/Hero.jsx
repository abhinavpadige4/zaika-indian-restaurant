import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] bg-[url('/assets/hero-bg.jpg')] bg-center bg-cover flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 fade-in">
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
          Authentic Indian Flavors
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl">
          Crafted with Passion, Served with Love
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            className="btn-hover-effect bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            Book Your Table
          </button>
          <button 
            className="btn-hover-effect bg-secondary/20 text-secondary px-8 py-3 rounded-lg font-semibold border border-secondary/50 hover:bg-secondary/30 hover:text-dark transition-all duration-300 transform hover:scale-105"
          >
            View Our Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;