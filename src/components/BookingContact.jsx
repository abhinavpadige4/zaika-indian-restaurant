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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would send this to a backend or use a service like EmailJS/Formspree
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        partySize: '',
        specialRequests: ''
      });
    }, 1500);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Booking Form */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold gradient-text">Reserve Your Table</h2>
            <p className="text-gray-600 max-w-xl">
              Experience authentic Indian cuisine. Book your table in advance to ensure the best seating.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Party Size</label>
                  <select
                    name="partySize"
                    value={formData.partySize}
                    onChange={handleChange}
                    required
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
                <label className="block text-sm font-medium mb-2">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={isSubmitting 
                    ? 'w-full bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 opacity-70' 
                    : 'w-full bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 transform hover:scale-105'
                  }
                >
                  {isSubmitting ? 'Submitting...' : 'Book Now'}
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mt-4 text-green-600 text-center">
                  <p>Thank you! Your reservation request has been received. We'll contact you shortly to confirm your booking.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 text-red-600 text-center">
                  <p>Sorry, there was an error processing your request. Please try again.</p>
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold gradient-text">Contact Us</h2>
            <p className="text-gray-600">
              Have questions or need assistance? We're here to help!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.586a1 1 0 0 1 .707 1.707l-.707.707A2 2 0 0 0 6 9H17a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6.293l-.707-.707A1 1 0 0 1 5 10H3a2 2 0 0 1-2-2zm0 10a2 2 0 0 1 2-2h3.586a1 1 0 0 1 .707 1.707l-.707.707A2 2 0 0 0 6 17H17a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6.293l-.707-.707A1 1 0 0 1 5 18H3a2 2 0 0 1-2-2z" />
                </svg>
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-gray-500">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0 2-2H5a2 2 0 0 0 2-2H5a2 2 0 0 0 2 2v12z" />
                </svg>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-gray-500">info@zaikarestaurant.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 1 12 15.75a7.488 7.488 0 0 1-5.982 2.975M12 15.75h.007v.008H12v-.015zM12 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                </svg>
                <div>
                  <h3 className="text-lg font-medium">Address</h3>
                  <p className="text-gray-500">123 Spice Route, Mumbai, India</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3.393a6 6 0 0 0-4.703 2.121l-1.414 1.414A6 6 0 0 0 5 8v12a6 6 0 0 0 6 6h6a6 6 0 0 0 6 6v-3.393" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Map */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold gradient-text text-center mb-8">Find Us</h2>
          <div className="w-full h-96 rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.662445588402!2d72.8310704887111!3d19.07598378504102!2m3!1f0!2f0!3f0!3m2!1i0!2i0!3m3!1m12!1d3789.662445588402!2d72.8310704887111!3d19.07598378504102!3m2!1u0!2u0!3m4!2e0!3m3!1m12!1d3789.662445588402!2d72.8310704887111!3d19.07598378504102!3m2!1u0!2u0"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingContact;