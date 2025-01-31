import React, { useState } from "react";
import { Link } from "react-scroll";


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
                                    to="timeline"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    My Journey
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
                                    My Portfolio
                                </Link>
                            </li>


                            <li>
                                <Link
                                    to="posts"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    Latest Posts
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
                                    My Expertise
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
                                    Contact Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>


        </>
    );
}

export default Navbar;
