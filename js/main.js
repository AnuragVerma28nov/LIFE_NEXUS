// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbar = document.querySelector('.navbar');
  
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      hamburger.innerHTML = navbarMenu.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
  
    // Handle navbar background change on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navbarMenu.classList.contains('active') &&
          !navbar.contains(e.target)) {
        navbarMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  
    // Close mobile menu when clicking on menu items
    const menuLinks = navbarMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navbarMenu.classList.remove('active');
          hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
      });
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
  
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input').value;
      
      if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        newsletterForm.reset();
      }
    });
  
    // Scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.feature-card, .step, .testimonial-card');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
  
    // Set initial state for elements
    const elements = document.querySelectorAll('.feature-card, .step, .testimonial-card');
    elements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
  
    // Run animations on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Button click handlers
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const cardTitle = this.closest('.card').querySelector('h2').textContent;
            
            if (cardTitle === "Eco Tips") {
                alert("Explore more eco-friendly tips in our resources section!");
            } 
            else if (cardTitle === "Community Drives") {
                alert("Redirecting you to our community drives calendar...");
                // window.location.href = "/drives";
            }
            else if (cardTitle === "Eco Footprint Calculator") {
                alert("Launching the Eco Footprint Calculator...");
                // window.location.href = "/calculator";
            }
        });
    });

    // Animation on scroll
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form data
          const formData = new FormData(contactForm);
          const data = Object.fromEntries(formData);
          
          // Here you would typically send the data to a server
          console.log('Form submitted:', data);
          
          // Show success message
          alert('Thank you for your message! We will get back to you soon.');
          
          // Reset form
          contactForm.reset();
          
       
      });
  }
});