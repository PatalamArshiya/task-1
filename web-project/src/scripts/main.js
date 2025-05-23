document.addEventListener('DOMContentLoaded', function() {
    // Initialize the navigation menu
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    // Change navigation style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Add hover effects to navigation links
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            link.classList.add('hover');
        });

        link.addEventListener('mouseleave', function() {
            link.classList.remove('hover');
        });
    });
});