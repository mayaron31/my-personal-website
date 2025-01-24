import React from "react";

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Contact Me</h2>
            <p className="contact-description">
                For more information and questions about me, please contact me via email or LinkedIn:
            </p>
            <div className="contact-buttons">
                <a href="mailto:mayaron31@gmail.com" className="contact-button">
                    <span>Email</span>
                    <span className="arrow">→</span>
                </a>
                <a href="https://www.linkedin.com/in/maya--ron/" target="_blank" rel="noopener noreferrer" className="contact-button">
                    <span>LinkedIn</span>
                    <span className="arrow">→</span>
                </a>
            </div>
        </section>
    );
}

export default Contact;
