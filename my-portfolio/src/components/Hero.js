import React from "react";

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-container">
                <h1 className="main-title">Maya Ron</h1>
                <p className="body-text">Welcome to my personal portfolio</p>
                <a
                    href="./assets/CV.pdf"
                    download="Maya_Ron_CV"
                    className="btn cv-download-btn"
                >
                    Download My CV
                </a>
            </div>
        </section>
    );
};

export default Hero;
