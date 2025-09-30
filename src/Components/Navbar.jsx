import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#hero" className="navbar-logo">Synapse: Dev & Design</a>
                <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={isOpen ? "nav-menu active" : "nav-menu"}> {/* Apply 'active' class when open */}
                    <li className="nav-item">
                        <a href="#about" className="nav-links" onClick={toggleMenu}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-links" onClick={toggleMenu}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#education" className="nav-links" onClick={toggleMenu}>Education</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-links" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;