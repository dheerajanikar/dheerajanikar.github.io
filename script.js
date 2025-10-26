// ===============================
// Dheeraj Anikar Portfolio Script
// ===============================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Fade page in on load (only if body was initially hidden in CSS)
    document.body.style.opacity = 1;

    // 2. Animate sections in
    applyFadeInClasses();

    // 3. Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-shell .nav-links'); // <ul>
    const navItems = document.querySelectorAll('.nav-shell .nav-links li'); // <li> children

    if (burger && navList) {
        // aria setup for a11y
        burger.setAttribute('aria-expanded', 'false');

        burger.addEventListener('click', () => {
            const isActive = navList.classList.toggle('nav-active'); // toggle dropdown menu visibility
            burger.classList.toggle('toggle', isActive);             // animate burger lines
            burger.setAttribute('aria-expanded', String(isActive));

            // animate each nav item sliding in
            navItems.forEach((item, index) => {
                if (isActive) {
                    item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                } else {
                    item.style.animation = '';
                }
            });
        });

        // click outside to close on mobile
        document.addEventListener('click', (event) => {
            const clickedInsideNav = navList.contains(event.target);
            const clickedBurger = burger.contains(event.target);

            if (!clickedInsideNav && !clickedBurger && navList.classList.contains('nav-active')) {
                navList.classList.remove('nav-active');
                burger.classList.remove('toggle');
                burger.setAttribute('aria-expanded', 'false');

                navItems.forEach((item) => {
                    item.style.animation = '';
                });
            }
        });
    }

    // 4. Smooth fade-out transition on internal nav links
    setupPageTransitions();
});


// ===============================
// Fade-in staging for sections
// ===============================
function applyFadeInClasses() {
    // Hero wrapper
    const heroShell = document.querySelector('.hero-shell');
    if (heroShell) {
        heroShell.classList.add('fade-in', 'fade-in-delay-1');
    }

    // Left hero card
    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
        heroCard.classList.add('fade-in', 'fade-in-delay-2');
    }

    // Right hero visual
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        heroVisual.classList.add('fade-in', 'fade-in-delay-3');
    }

    // Social block in hero
    const heroSocial = document.querySelector('.hero-social');
    if (heroSocial) {
        heroSocial.classList.add('fade-in', 'fade-in-delay-3');
    }

    // Focus cards ("What I Do in the Field")
    const focusCards = document.querySelectorAll('.focus-card');
    focusCards.forEach((card, index) => {
        card.classList.add('fade-in', `fade-in-delay-${index + 3}`);
    });

    // About grid block
    const aboutGrid = document.querySelector('.about-grid');
    if (aboutGrid) {
        aboutGrid.classList.add('fade-in', 'fade-in-delay-4');
    }

    // ---- Legacy / other pages support ----
    // header in pages that aren't using .site-bg body
    const legacyHeader = document.querySelector('body:not(.site-bg) header');
    if (legacyHeader) {
        legacyHeader.classList.add('fade-in', 'fade-in-delay-1');
    }

    // project cards (projects.html)
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('fade-in', `fade-in-delay-${index + 3}`);
    });

    // cv sections (cv.html)
    const cvSections = document.querySelectorAll('.cv-section');
    cvSections.forEach((section, index) => {
        section.classList.add('fade-in', `fade-in-delay-${index + 2}`);
    });

    // fun-me sections (fun-me.html)
    // note: you called them .personal-section in CSS, but here you were targeting .fun-section.
    // We'll support both for safety.
    const funSections = document.querySelectorAll('.fun-section, .personal-section');
    funSections.forEach((section, index) => {
        section.classList.add('fade-in', `fade-in-delay-${index + 2}`);
    });
}


// ===============================
// Page fade-out transitions
// ===============================
function setupPageTransitions() {
    const anchors = document.querySelectorAll('a:not([target="_blank"])');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Ignore:
            // - empty href
            // - in-page anchors (#)
            // - external links
            // - mailto:
            // - javascript:void(...)
            const isExternal = href &&
                (href.startsWith('http') ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:') ||
                href.startsWith('javascript:'));

            if (!href || href.startsWith('#') || isExternal) {
                return;
            }

            e.preventDefault();

            // Fade out page, then navigate
            document.body.style.opacity = 0;

            setTimeout(() => {
                window.location.href = href;
            }, 300); // this should match the CSS transition on body.opacity if you keep it
        });
    });
}
