import React from "react";

function Projects() {
    const projects = [
        {
            title: "Exchange Travel Blog",
            description:
                "A travel blog documenting my experiences during a student exchange program. The platform allows users to explore various travel destinations and personal insights.",
            technologies: ["React", "CSS", "JavaScript", "Firebase"],
            image: "https://via.placeholder.com/300", // Replace with actual image URL
            github: "https://github.com/mayaron31/Exchange-Travel-Blog",
        },
        {
            title: "Memorial Page",
            description:
                "A platform to honor fallen soldiers and civilians from the Iron Swords War. Designed to be managed and updated by friends and families as a tribute.",
            technologies: ["React", "Node.js", "MongoDB", "CSS"],
            image: "https://via.placeholder.com/300", // Replace with actual image URL
            github: "https://github.com/mayaron31/MemorialPage",
        },
        {
            title: "Your Future Project",
            description: "Add your next project details here!",
            technologies: ["TBD"],
            image: "https://via.placeholder.com/300", // Replace with actual image URL
            github: "#", // Replace with the actual GitHub link
        },
    ];

    return (
        <section className="projects">
            <h2 className="section-title">My Portfolio</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img
                            src={project.image}
                            alt={`${project.title} Screenshot`}
                            className="project-image"
                        />
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <p className="project-technologies">
                                <strong>Technologies:</strong> {project.technologies.join(", ")}
                            </p>
                            <a
                                href={project.github}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
