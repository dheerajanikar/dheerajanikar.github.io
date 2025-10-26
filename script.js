// ===============================
// Dheeraj Anikar Portfolio Script
// ===============================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Fade page in on load (keeps page transitions smooth)
    document.body.style.opacity = 1;

    // 2. Animate sections in
    applyFadeInClasses();

    // 3. Mobile Navigation Toggle
    const navShell = document.querySelector('.nav-shell');
    const shellBurger = navShell ? navShell.querySelector('.burger') : null;
    const shellNavList = navShell ? navShell.querySelector('.nav-links') : null;
    const shellNavItems = navShell ? navShell.querySelectorAll('.nav-links li') : [];

    if (shellBurger && shellNavList) {
        shellBurger.setAttribute('aria-expanded', 'false');

        shellBurger.addEventListener('click', () => {
            const isActive = shellNavList.classList.toggle('nav-active');
            shellBurger.classList.toggle('toggle', isActive);
            shellBurger.setAttribute('aria-expanded', String(isActive));

            shellNavItems.forEach((item, index) => {
                if (isActive) {
                    item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                } else {
                    item.style.animation = '';
                }
            });
        });

        document.addEventListener('click', (event) => {
            const clickedInsideNav = shellNavList.contains(event.target);
            const clickedBurger = shellBurger.contains(event.target);

            if (!clickedInsideNav && !clickedBurger && shellNavList.classList.contains('nav-active')) {
                shellNavList.classList.remove('nav-active');
                shellBurger.classList.remove('toggle');
                shellBurger.setAttribute('aria-expanded', 'false');

                shellNavItems.forEach((item) => {
                    item.style.animation = '';
                });
            }
        });
    }

    const legacyNavbar = document.querySelector('.navbar');
    const legacyBurger = legacyNavbar ? legacyNavbar.querySelector('.burger') : null;

    if (legacyNavbar && legacyBurger) {
        legacyBurger.setAttribute('aria-expanded', 'false');

        legacyBurger.addEventListener('click', () => {
            const isOpen = legacyNavbar.classList.toggle('open');
            legacyBurger.setAttribute('aria-expanded', String(isOpen));
        });

        const legacyLinks = legacyNavbar.querySelectorAll('.nav-links a');
        legacyLinks.forEach((link) => {
            link.addEventListener('click', () => {
                legacyNavbar.classList.remove('open');
                legacyBurger.setAttribute('aria-expanded', 'false');
            });
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
