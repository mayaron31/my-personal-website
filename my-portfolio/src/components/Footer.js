import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p>Developed by Maya Ron</p>
                </div>
                <div className="footer-center">
                    <p>Copyright © 2025</p>
                </div>
                <div className="footer-right">
                    <a href="https://github.com/mayaron31" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="footer-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/maya--ron/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="footer-icon" />
                    </a>
                    <a href="https://www.instagram.com/maya.ron" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="footer-icon" />
                    </a>
                    <a href="mailto:mayaron31@gmail.com">
                        <FaEnvelope className="footer-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
