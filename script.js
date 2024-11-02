// Scroll Indicator
window.onscroll = () => {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollIndicator.style.width = `${progress}%`;

    // Highlight navbar links based on scroll position
    highlightNavLink();
    animateSections();
};

// Highlight Navbar Links
function highlightNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active-link');
        }
    });
}

// Animasi Fade-in saat di-scroll
function animateSections() {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 50) {
            section.classList.add('active');
        }
    });
}

// Memuat animasi saat pertama kali dibuka
document.addEventListener('DOMContentLoaded', animateSections);
