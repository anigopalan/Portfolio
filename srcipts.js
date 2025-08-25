// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio site loaded successfully!');
    
    // Initialize smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Initialize fade-in animations
    initScrollAnimations();
    
    // Add interactive hover effects
    initInteractiveEffects();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Fade-in animations on scroll
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Add fade-in effect to sections
    const sections = document.querySelectorAll('.about-section, .section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Interactive effects
function initInteractiveEffects() {
    // Add subtle hover effect to profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        profileImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Add typing effect to wave decoration (optional fun feature)
    const waveDecoration = document.querySelector('.wave-decoration');
    if (waveDecoration) {
        const waves = ['~~~~', '~~~', '~~', '~', '~~', '~~~', '~~~~'];
        let currentIndex = 0;
        
        setInterval(() => {
            waveDecoration.textContent = waves[currentIndex];
            currentIndex = (currentIndex + 1) % waves.length;
        }, 1000);
    }
}

// Utility function to detect if user prefers reduced motion
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Disable animations if user prefers reduced motion
if (prefersReducedMotion()) {
    document.documentElement.style.setProperty('--animation-duration', '0s');
}