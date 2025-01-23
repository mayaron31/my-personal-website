import React, { useState } from "react";
import { Link } from "react-scroll";
import mainPagePhoto from "../assets/images/main-page-photo.jpg";

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    return (
        <>
            <header>
                <nav className={`navbar ${navActive ? "active" : ""}`}>
                    <div className="navbar-container">
                        {/* Logo */}
                        <div className="navbar-logo">
                            <a href="#home">Maya Ron</a>
                        </div>

                        {/* Hamburger Menu */}
                        <div
                            className={`navbar-hamburger ${navActive ? "active" : ""}`}
                            onClick={toggleNav}
                        >
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>

                        {/* Navbar Links */}
                        <ul className={`navbar-links ${navActive ? "active" : ""}`}>
                            <li>
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="timeline"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    Timeline
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Main Image */}
            <div>
                <img src={mainPagePhoto} alt="Main Page" className="hero-image" />
            </div>
        </>
    );
}

export default Navbar;
