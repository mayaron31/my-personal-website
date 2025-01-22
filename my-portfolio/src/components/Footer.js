import React from "react";
import { Link } from "react-scroll";

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-links">
                <div className="footer-logo">
                    <img src="/assets/logo.svg" alt="Maya Ron Logo" />
                </div>
                <div className="footer-items">
                    <ul>
                        <li>
                            <Link to="home" smooth={true} offset={-70} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} offset={-70} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} offset={-70} duration={500}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="timeline" smooth={true} offset={-70} duration={500}>
                                Timeline
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} offset={-70} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-social-icons">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/maya--ron/" target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/maya.ron/" target="_blank" rel="noreferrer">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/maya.ron.31" target="_blank" rel="noreferrer">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/mayaron31" target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="footer-divider" />
            <div className="footer-content">
                <p>© 2024 Maya Ron. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
