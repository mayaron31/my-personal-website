// Redirect to project links
document.querySelectorAll('.project-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

// Download CV
document.querySelector('#download-cv').addEventListener('click', () => {
    const cvPath = '../assets/cv/Maya_Ron_CV.pdf';
    window.open(cvPath, '_blank');
});

const timelineItems = document.querySelectorAll('.timeline-item');
const timelineContent = document.getElementById('timeline-content');

// Content for each year
const timelineData = {
    2012: {
        img: "../images/theater.jpg",
        text: "I studied at 'Hakfar Hayarok' high school, specializing in theater and biology. I volunteered at AMCHA and Latet.",
    },
    2018: {
        img: "../images/hm.JPG",
        text: "I joined the military as an Operations Sergeant in the infantry, later promoted to Officer. My service included leadership roles during key operations.",
    },
    2022: {
        img: "../images/reichman.jpg",
        text: "I started my studies at Reichman University in Computer Science & Entrepreneurship, participating in multiple clubs and projects.",
    },
    2024: {
        img: "../images/paradox.JPG",
        text: "I joined Paradox.AI as a Data Intern and later became an employee, focusing on product validation and data analysis.",
    },
};

// Function to display content
function displayContent(year) {
    const { img, text } = timelineData[year];
    timelineContent.innerHTML = `
        <div class="content-wrapper">
            <img src="${img}" alt="${year} Image" class="responsive-img">
            <p>${text}</p>
        </div>
    `;
    timelineContent.style.display = 'block';
}

// Add event listeners to timeline items
timelineItems.forEach(item => {
    item.addEventListener('click', () => {
        const year = item.getAttribute('data-year');

        if (timelineContent.getAttribute('data-visible-year') === year) {
            // Close the content if it's already displayed
            timelineContent.style.display = 'none';
            timelineContent.setAttribute('data-visible-year', '');
            item.style.transform = ''; // Reset the transform effect
        } else {
            // Display the new content
            displayContent(year);
            timelineContent.setAttribute('data-visible-year', year);

            // Highlight selected item and scroll
            timelineItems.forEach(i => i.style.transform = '');
            item.style.transform = 'translateY(-20px)';
        }
    });
});

// Ensure images are responsive
window.addEventListener('resize', () => {
    const images = document.querySelectorAll('.responsive-img');
    images.forEach(img => {
        img.style.width = '100%';
        img.style.height = 'auto';
    });
});

document.querySelectorAll(".timeline-item").forEach(item => {
    item.addEventListener("click", () => {
        const year = item.getAttribute("data-year");
        const content = document.querySelector(`.timeline-content[data-year="${year}"]`);

        // Toggle visibility
        const isVisible = content.style.display === "block";
        document.querySelectorAll(".timeline-content").forEach(c => (c.style.display = "none"));
        content.style.display = isVisible ? "none" : "block";

        // Adjust the active item
        document.querySelectorAll(".timeline-item").forEach(i => i.classList.remove("active"));
        if (!isVisible) item.classList.add("active");
    });
});
