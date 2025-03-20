document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideNav = nav.contains(event.target);
        const isClickInsideBurger = burger.contains(event.target);
        
        if (!isClickInsideNav && !isClickInsideBurger && nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            
            navLinks.forEach((link) => {
                link.style.animation = '';
            });
        }
    });
    
    // Add animation keyframe
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes navLinkFade {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// Simple page transitions
const anchors = document.querySelectorAll('a:not([target="_blank"])');

anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's an external link or has no href
        if (!href || href.startsWith('http') || href.startsWith('mailto:')) {
            return;
        }
        
        e.preventDefault();
        
        // Fade out
        document.body.style.opacity = 0;
        
        // Navigate after transition
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

// Fade in on page load
document.body.style.transition = 'opacity 0.3s ease';
document.body.style.opacity = 1;
