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
    
    // Submit to Formspree - NOTE: Replace 'your-form-id' with actual Formspree form ID
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
                    <option value="">Select party size</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                    <option value="6">6 people</option>
                    <option value="7">7+ people</option>
                  </select>
                </div>
                
                <div className="col-span-2">
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
                    aria-label="Special requests or dietary requirements"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Booking...</span>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                  </>
                ) : (
                  'Book Table'
                )}
              </button>
            </form>
          </div>
          
          {/* Booking Info/Image */}
          <div className="hidden md:block">
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/assets/hero-bg.jpg" 
                alt="Zaika Indian Restaurant dining area" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/50"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
                <h3 className="text-2xl font-bold mb-4">Experience Authentic Indian Cuisine</h3>
                <p className="text-lg max-w-md">
                  Join us for a culinary journey through the rich flavors of India. Our restaurant offers traditional dishes made with fresh, authentic ingredients and time-honored cooking techniques.
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