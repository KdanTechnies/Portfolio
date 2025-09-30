import React from 'react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <p>
            We are a passionate team dedicated to building amazing web experiences.
            Connect with us to bring your ideas to life!
          </p>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://github.com/KdanTechnies" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github">🐙</i>
            </a>
            <a href="www.linkedin.com/in/kaluonukadaniel133" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin">🔗</i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Synapse : Dev & Design</p>
      </div>
    </footer>
  );
};

export default Footer;