import React, { useState, useEffect } from 'react';
import menuData from '../data/menu.json';

const Menu = () => {
  const [filter, setFilter] = useState('all');
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    setDishes(menuData);
  }, []);

  const filteredDishes = filter === 'all' 
    ? dishes 
    : dishes.filter(dish => 
        filter === 'special' ? dish.special : dish.category === filter
      );

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Our Exquisite Menu
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`${filter === 'all' 
              ? 'bg-primary text-white' 
              : 'bg-secondary/20 text-secondary border border-secondary/30'
            } px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('veg')}
            className={`${filter === 'veg' 
              ? 'bg-primary text-white' 
              : 'bg-secondary/20 text-secondary border border-secondary/30'
            } px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary`}
          >
            Veg
          </button>
          <button
            onClick={() => setFilter('non-veg')}
            className={`${filter === 'non-veg' 
              ? 'bg-primary text-white' 
              : 'bg-secondary/20 text-secondary border border-secondary/30'
            } px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary`}
          >
            Non-Veg
          </button>
          <button
            onClick={() => setFilter('special')}
            className={`${filter === 'special' 
              ? 'bg-primary text-white' 
              : 'bg-secondary/20 text-secondary border border-secondary/30'
            } px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary`}
          >
            Chef's Specials
          </button>
        </div>
        
        {/* Menu Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDishes.map((dish) => (
            <div 
              key={dish.id} 
              className="card-hover bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">${dish.price}</span>
                  {dish.special && (
                    <span className="bg-secondary/20 text-secondary px-3 py-1 rounded text-sm font-medium">
                      Special
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Empty state */}
          {filteredDishes.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No dishes found for this category</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;