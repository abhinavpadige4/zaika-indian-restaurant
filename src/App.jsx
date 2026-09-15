import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AboutChefs from './components/AboutChefs';
import Testimonials from './components/Testimonials';
import BookingContact from './components/BookingContact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-hidden">
        <Navbar />
        <Hero />
        <Menu />
        <AboutChefs />
        <Testimonials />
        <BookingContact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;