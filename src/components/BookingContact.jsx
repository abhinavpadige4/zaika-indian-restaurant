import React, { useState } from 'react';

const BookingContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '',
    specialRequests: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.partySize) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Submit to Formspree
    fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        partySize: formData.partySize,
        specialRequests: formData.specialRequests
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok');
    })
    .then(data => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setShowThankYou(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        partySize: '',
        specialRequests: ''
      });
    })
    .catch(error => {
      console.error('Error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
    });
  };

  if (showThankYou) {
    return (
      <section id="booking" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold gradient-text mb-6">Thank You!</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Your booking request has been received. We'll contact you shortly to confirm your reservation.
          </p>
          <button 
            onClick={() => setShowThankYou(false)}
            className="btn-primary mt-8 px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            Make Another Booking
          </button>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="booking"
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Booking Form */}
          <div className="space-y-8">
            <h2 
              className="text-3xl font-bold gradient-text"
              aria-label="Reserve your table at Zaika Indian Restaurant"
            >
              Reserve Your Table
            </h2>
            <p 
              className="text-gray-600 max-w-xl"
              aria-label="Experience authentic Indian cuisine. Book your table in advance to ensure the best seating."
            >
              Experience authentic Indian cuisine. Book your table in advance to ensure the best seating.
            </p>
            
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              aria-label="Booking form"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label 
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-label="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    aria-label="Your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="date"
                    className="block text-sm font-medium mb-2"
                  >
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    aria-label="Preferred date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="time"
                    className="block text-sm font-medium mb-2"
                  >
                    Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    aria-label="Preferred time"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="partySize"
                    className="block text-sm font-medium mb-2"
                  >
                    Party Size
                  </label>
                  <select
                    id="partySize"
                    name="partySize"
                    value={formData.partySize}
                    onChange={handleChange}
                    required
                    aria-label="Number of guests"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Party Size</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5">5+ Persons</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label 
                  htmlFor="specialRequests"
                  className="block text-sm font-medium mb-2"
                >
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="4"
                  aria-label="Any special requests or dietary requirements"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                  aria-label={isSubmitting ? 'Submitting...' : 'Submit booking request'}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Booking'}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="text-green-600 mt-4">Booking submitted successfully!</p>
                )}
                
                {submitStatus === 'error' && (
                  <p className="text-red-600 mt-4">Failed to submit. Please try again.</p>
                )}
              </div>
            </form>
          </div>
          
          {/* Contact Info / Image */}
          <div className="hidden md:block text-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark mb-4">Contact Us</h3>
              <p className="text-gray-600">
                Have questions? We're here to help!
              </p>
              <div className="space-y-3">
                <p className="flex items-center space-x-3 text-gray-700">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 01-5.516 0l-2.257-1.13a1 1 0 01-.502-1.21l1.498-4.493a1 1 0 01.948-.684h3.28a2 2 0 012 2zM12 15a3 3 0 110-6 3 3 0 010 6z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </p>
                <p className="flex items-center space-x-3 text-gray-700">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@zaikaindian.com</span>
                </p>
                <p className="flex items-center space-x-3 text-gray-700">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>123 Spice Route, Mumbai</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingContact;