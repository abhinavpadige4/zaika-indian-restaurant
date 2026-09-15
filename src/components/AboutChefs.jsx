import React from 'react';
import chefsData from '../data/chefs.json';

const AboutChefs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Meet Our Master Chefs
        </h2>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {chefsData.map((chef) => (
            <div 
              key={chef.id} 
              className="card-hover bg-light rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={chef.image} 
                  alt={chef.name} 
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{chef.name}</h3>
                  <p className="text-sm text-secondary/80">{chef.experience} Experience</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4 line-clamp-3">{chef.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {chef.specialties.map((specialty, index) => (
                    <span 
                      key={index} 
                      className="bg-secondary/20 text-secondary px-3 py-1 rounded text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutChefs;