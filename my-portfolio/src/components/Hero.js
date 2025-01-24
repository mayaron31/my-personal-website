import React from "react";
import mainPagePhoto from "../assets/images/main-page-photo.jpg";

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-text">
                <h1 className="hero-title">Maya Ron</h1>
                <h2 className="hero-subtitle">CS & Entrepreneurship Student</h2>
                <p className="hero-description">
                    With a strong background in leading teams and solving challenges, I am excited to start my journey in development or product management. I bring a passion for innovation and a solid foundation in Computer Science and Entrepreneurship.
                </p>
                <button className="hero-button">Download My CV</button>
            </div>
        </section>
    );
};

export default Hero;
