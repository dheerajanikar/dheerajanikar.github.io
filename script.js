document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for the page
    document.body.style.opacity = 1;

    // Apply fade-in classes to elements
    applyFadeInClasses();

    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            const isActive = nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle', isActive);
            burger.setAttribute('aria-expanded', String(isActive));

            navLinks.forEach((link, index) => {
                if (isActive) {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                } else {
                    link.style.animation = '';
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInsideNav = nav.contains(event.target);
            const isClickInsideBurger = burger.contains(event.target);

            if (!isClickInsideNav && !isClickInsideBurger && nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                burger.setAttribute('aria-expanded', 'false');

                navLinks.forEach((link) => {
                    link.style.animation = '';
                });
            }
        });
    }
});

// Apply fade-in classes to content elements
function applyFadeInClasses() {
    const heroShell = document.querySelector('.hero-shell');
    if (heroShell) {
        heroShell.classList.add('fade-in', 'fade-in-delay-1');
    }

    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
        heroCard.classList.add('fade-in', 'fade-in-delay-2');
    }

    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        heroVisual.classList.add('fade-in', 'fade-in-delay-3');
    }

    const heroSocial = document.querySelector('.hero-social');
    if (heroSocial) {
        heroSocial.classList.add('fade-in', 'fade-in-delay-3');
    }

    const focusCards = document.querySelectorAll('.focus-card');
    focusCards.forEach((card, index) => {
        card.classList.add('fade-in', `fade-in-delay-${index + 3}`);
    });

    const aboutGrid = document.querySelector('.about-grid');
    if (aboutGrid) {
        aboutGrid.classList.add('fade-in', 'fade-in-delay-4');
    }

    // Legacy pages
    const legacyHeader = document.querySelector('body:not(.site-bg) header');
    if (legacyHeader) {
        legacyHeader.classList.add('fade-in', 'fade-in-delay-1');
    }

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('fade-in', `fade-in-delay-${index + 3}`);
    });

    const cvSections = document.querySelectorAll('.cv-section');
    cvSections.forEach((section, index) => {
        section.classList.add('fade-in', `fade-in-delay-${index + 2}`);
    });

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
