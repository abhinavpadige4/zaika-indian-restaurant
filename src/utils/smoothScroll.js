// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Handle navigation link clicks
  const navLinks = document.querySelectorAll('a[data-scroll]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent default anchor click behavior
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Calculate target position accounting for fixed navbar
          const navbarHeight = document.querySelector('nav') ? document.querySelector('nav').offsetHeight : 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          // Smooth scroll to target
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          const mobileMenu = document.getElementById('mobile-menu');
          const mobileMenuButton = document.getElementById('mobile-menu-button');
          if (mobileMenu && mobileMenuButton) {
            mobileMenu.style.display = 'none';
            mobileMenuButton.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  });
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.style.display = isExpanded ? 'none' : 'block';
    });
  }
  
  // Highlight active nav link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('a[data-scroll]');
  
  function highlightNavLink() {
    let scrollPosition = window.scrollY + 100; // Account for navbar height
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavLink);
  // Call once on load to highlight current section
  highlightNavLink();
});