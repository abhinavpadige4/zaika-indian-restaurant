import React from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AboutChefs from './components/AboutChefs';
import Testimonials from './components/Testimonials';
import BookingContact from './components/BookingContact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Hero />
      <Menu />
      <AboutChefs />
      <Testimonials />
      <BookingContact />
      <Footer />
    </div>
  );
}

export default App;