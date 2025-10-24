// Form endpoint - Replace with your actual Formspree endpoint
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const heroBackground = document.getElementById('hero-background');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    initializeHeroBackground();
    initializeFormHandling();
    initializeAnimations();
    initializeAccessibility();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', updateActiveNavLink);
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

// Scroll effects
function initializeScrollEffects() {
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(11, 15, 20, 0.95)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(11, 15, 20, 0.8)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
    
    // Back to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Hero background animation
function initializeHeroBackground() {
    if (!heroBackground) return;
    
    // Create animated dots background
    createAnimatedBackground();
}

function createAnimatedBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.6';
    
    heroBackground.appendChild(canvas);
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = heroBackground.offsetWidth;
        canvas.height = heroBackground.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Dots configuration
    const dots = [];
    const numDots = 50;
    
    // Create dots
    for (let i = 0; i < numDots; i++) {
        dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        dots.forEach(dot => {
            // Update position
            dot.x += dot.vx;
            dot.y += dot.vy;
            
            // Wrap around edges
            if (dot.x < 0) dot.x = canvas.width;
            if (dot.x > canvas.width) dot.x = 0;
            if (dot.y < 0) dot.y = canvas.height;
            if (dot.y > canvas.height) dot.y = 0;
            
            // Draw dot
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(37, 99, 235, ${dot.opacity})`;
            ctx.fill();
        });
        
        // Draw connections between nearby dots
        dots.forEach((dot, i) => {
            dots.slice(i + 1).forEach(otherDot => {
                const dx = dot.x - otherDot.x;
                const dy = dot.y - otherDot.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(dot.x, dot.y);
                    ctx.lineTo(otherDot.x, otherDot.y);
                    ctx.strokeStyle = `rgba(37, 99, 235, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    // Start animation only if user hasn't requested reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animate();
    }
}

// Form handling
function initializeFormHandling() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitButton = contactForm.querySelector('.form-submit');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Submit to Formspree
    fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            showToast('Message sent successfully!', 'success');
            contactForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showToast('Failed to send message. Please try again.', 'error');
    })
    .finally(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
}

// Toast notifications
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Intersection Observer for animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll('section, .skill-card, .project-card, .achievement-card, .education-item');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// Accessibility features
function initializeAccessibility() {
    // Keyboard navigation for mobile menu
    hamburger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMobileMenu();
        }
    });
    
    // Focus management for mobile menu
    navMenu.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
            hamburger.focus();
        }
    });
    
    // Skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Focus visible styles for better keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const debouncedScrollHandler = debounce(function() {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Lazy loading for images (if any are added later)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if there are lazy images
initializeLazyLoading();

// Console welcome message
console.log('%c👋 Welcome to Omprakash Indla\'s Portfolio!', 'color: #2563eb; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with HTML5, CSS3, and Vanilla JavaScript', 'color: #60a5fa; font-size: 12px;');
