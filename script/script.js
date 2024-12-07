// JavaScript for Portfolio Website

// ========== TIMELINE INTERACTIVITY ==========
document.querySelectorAll('.timeline-item').forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });

    item.addEventListener('click', () => {
        alert(`Clicked on: ${item.textContent}`);
    });
});

// ========== DOWNLOAD CV ==========
document.querySelector('#download-cv').addEventListener('click', () => {
    const cvPath = 'images/cv/Maya_Ron_CV.pdf';
    window.open(cvPath, '_blank');
});

// ========== SOCIAL LINKS ==========
const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/maya--ron/',
    instagram: 'https://www.instagram.com/maya.ron/',
    facebook: 'https://www.facebook.com/maya.ron.31',
    github: 'https://github.com/mayaron31',
};

document.querySelector('#linkedin-link').addEventListener('click', () => {
    window.open(socialLinks.linkedin, '_blank');
});

document.querySelector('#instagram-link').addEventListener('click', () => {
    window.open(socialLinks.instagram, '_blank');
});

document.querySelector('#facebook-link').addEventListener('click', () => {
    window.open(socialLinks.facebook, '_blank');
});

document.querySelector('#github-link').addEventListener('click', () => {
    window.open(socialLinks.github, '_blank');
});

// ========== BACK TO TOP BUTTON ==========
const backToTopButton = document.querySelector('#btn-back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// ========== PROJECT LINKS ==========
document.querySelectorAll('.project-link').forEach((project) => {
    project.addEventListener('click', (e) => {
        e.preventDefault();
        const projectUrl = project.getAttribute('data-url');
        window.open(projectUrl, '_blank');
    });
});
