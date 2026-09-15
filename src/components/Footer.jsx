import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
          {/* Logo/Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Zaika
            </h3>
            <p className="text-sm">
              Authentic Indian Flavors<br/>
              Crafted with Passion
            </p>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-bold mb-2 text-white">Navigate</h4>
            <nav className="space-y-2">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Home
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Menu
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                About
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold mb-2 text-white">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Reservations
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Catering
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Events
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Gift Cards
              </a>
            </nav>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-bold mb-2 text-white">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15V9a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3H7a3 3 0 01-3-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Border and Copyright */}
        <div className="border-t border-secondary/20 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2024 Zaika Indian Restaurant. All rights reserved.</p>
          <p className="mt-1">
            <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-300">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;