import React from 'react';

function Projects() {
    return (
        <section className="projects">
            <h2 className="section-title">My Projects</h2>
            <div className="section-body">
                <div className="project-item">
                    <h3>Project 1</h3>
                    <p>A brief description of Project 1</p>
                    <button className="btn">View More</button>
                </div>
                <div className="project-item">
                    <h3>Project 2</h3>
                    <p>A brief description of Project 2</p>
                    <button className="btn">View More</button>
                </div>
                <div className="project-item">
                    <h3>Project 3</h3>
                    <p>A brief description of Project 3</p>
                    <button className="btn">View More</button>
                </div>
            </div>
        </section>
    );
}

export default Projects;
