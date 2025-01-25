import React from "react";
import "../styles/style.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Maya Ron</h1>
                <h2 className="hero-subtitle">Aspiring Software Engineer & Product Leader</h2>
                <p className="hero-description">
                    Highly motivated and independent Computer Science student with strong project
                    management and AI technology experience. Skilled in analyzing data, optimizing
                    AI-driven solutions, and leading teams under pressure.
                </p>
            </div>
            <div className="hero-image-container">
                <img
                    className="hero-image"
                    src="/images/Maya.jpg"
                    alt="Maya Ron"
                />
                <ul className="hero-points">
                    <li className="hero-point">
                        <span className="hero-point-icon">📍</span>
                        <span className="hero-point-text">Based in Tel Aviv, Israel</span>
                    </li>
                    <li className="hero-point">
                        <span className="hero-point-icon">📧</span>
                        <span className="hero-point-text">mayaron31@gmail.com</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Hero;
