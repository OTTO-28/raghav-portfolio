document.addEventListener('DOMContentLoaded', function() {

    // Mobile menu (hamburger) functionality
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // Smooth scrolling for anchor links is handled by CSS `scroll-behavior: smooth;`
    // but this JS can be used for more complex scenarios or fallbacks.
    
    // Optional: Change navbar style on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        } else {
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });

});