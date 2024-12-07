// Redirect to project links
document.querySelectorAll('.project-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

// Timeline Interactive Effect
document.querySelectorAll('.timeline-item').forEach((item) => {
    item.addEventListener('click', () => {
        alert(`You clicked on: ${item.innerText}`);
    });
});

// Download CV
document.querySelector('#download-cv').addEventListener('click', () => {
    const cvPath = '../assets/cv/Maya_Ron_CV.pdf';
    window.open(cvPath, '_blank');
});
