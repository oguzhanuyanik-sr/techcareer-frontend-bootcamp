// Mobile navigation
const mobileButton = document.querySelector('.header__mobile-button');
const navContainer = document.querySelector('.header__nav');

mobileButton.addEventListener("click", () => {
    navContainer.classList.toggle('visible');
});


// Navbar sticky style
const stickyNav = document.querySelector('.header__wrapper');

window.addEventListener('scroll', () => {
    window.scrollY > 200 ? stickyNav.classList.add("header__sticky") : stickyNav.classList.remove("header__sticky");
});


// Form submit event
const contact = document.querySelector('.contact__form');

contact.addEventListener('submit', (e) => {
    alert('The form has been sent.');

    e.target.reset();

    e.preventDefault();
});


// Anchor link url hash(#) fix
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(function (anchorLink) {
    anchorLink.addEventListener('click', function (e) {
        e.preventDefault();

        window.location.hash = anchorLink.getAttribute('href');

        history.replaceState(null, null, ' ');
    });
});


// Anchor link active style
window.addEventListener('DOMContentLoaded', () => {
    updateActiveLink();

    window.addEventListener('scroll', () => {
        updateActiveLink();
    });

    function updateActiveLink() {
        const scrollPosition = window.scrollY;

        anchorLinks.forEach(link => {
            const sectionId = link.getAttribute('href').substring(1);

            if (sectionId !== 'homepage') {
                const section = document.getElementById(sectionId);

                if (section.offsetTop - 150 <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    document.querySelector('.header__nav-link--active').classList.remove('header__nav-link--active');

                    link.classList.add('header__nav-link--active');
                } else if (sectionId === 'portfolio') {
                    link.classList.add('header__nav-link--active');
                } else {
                    link.classList.remove('header__nav-link--active');
                }
            }
        });
    }
});