import React from "react";

const Hero = () => {
    return (
        <section id="home">
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Welcome to My Portfolio</h1>
                    <p>Discover my projects, skills, and journey</p>
                    <button
                        id="download-cv"
                        className="btn"
                        onClick={() => window.open("/assets/CV/cv.pdf", "_blank")}
                    >
                        Download My CV
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
