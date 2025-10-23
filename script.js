document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for the page
    document.body.style.opacity = 1;
    
    // Apply fade-in classes to elements
    applyFadeInClasses();
    
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    const metricsData = [
        { value: '35+', label: 'AI chat agents deployed' },
        { value: '20+', label: 'Credit unions served' },
        { value: '10×', label: 'Workflow acceleration' },
        { value: '∞', label: 'Curiosity for ethical AI' }
    ];

    const metricsContainer = document.querySelector('[data-metrics]');
    if (metricsContainer) {
        metricsContainer.innerHTML = '';
        metricsData.forEach(({ value, label }) => {
            const metric = document.createElement('div');
            metric.className = 'hero-metric';

            const metricValue = document.createElement('span');
            metricValue.className = 'metric-value';
            metricValue.textContent = value;

            const metricLabel = document.createElement('span');
            metricLabel.className = 'metric-label';
            metricLabel.textContent = label;

            metric.appendChild(metricValue);
            metric.appendChild(metricLabel);
            metricsContainer.appendChild(metric);
        });
    }

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
});

// Apply fade-in classes to content elements
function applyFadeInClasses() {
    // Apply to header elements
    const header = document.querySelector('header');
    if (header) {
        header.classList.add('fade-in', 'fade-in-delay-1');
    }
    
    // Apply to profile image if exists
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.classList.add('fade-in', 'fade-in-delay-2');
    }
    
    // Apply to social links
    const socialLinks = document.querySelector('.social-links');
    if (socialLinks) {
        socialLinks.classList.add('fade-in', 'fade-in-delay-3');
    }
    
    // Apply to neural network
    const neuralNetwork = document.querySelector('.neural-network');
    if (neuralNetwork) {
        neuralNetwork.classList.add('fade-in', 'fade-in-delay-4');
    }
    
    // Apply to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.classList.add('fade-in', `fade-in-delay-${index + 2}`);
    });
    
    // Apply to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('fade-in', `fade-in-delay-${index + 3}`);
    });
    
    // Apply to CV sections
    const cvSections = document.querySelectorAll('.cv-section');
    cvSections.forEach((section, index) => {
        section.classList.add('fade-in', `fade-in-delay-${index + 2}`);
    });
    
    // Apply to fun sections
    const funSections = document.querySelectorAll('.fun-section');
    funSections.forEach((section, index) => {
        section.classList.add('fade-in', `fade-in-delay-${index + 2}`);
    });
}

// Page transitions for links
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
