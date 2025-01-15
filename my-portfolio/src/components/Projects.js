import React from "react";

const projects = [
    {
        title: "Project 1",
        description: "A brief description of Project 1",
        url: "https://github.com/mayaron31/project1",
    },
    {
        title: "Project 2",
        description: "A brief description of Project 2",
        url: "https://github.com/mayaron31/project2",
    },
    {
        title: "Project 3",
        description: "A brief description of Project 3",
        url: "https://github.com/mayaron31/project3",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="fade-in">
            <h2>My Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <button className="project-btn" onClick={() => window.open(project.url, "_blank")}>
                            View More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
