import React from 'react';
import IMG from "../assets/IMG_0550.png"
// No specific CSS import needed here, as LandingPage.css will handle it
// but you could create HeroSection.css for specific styles if desired.

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span>Kalu Onuka Daniel</span></h1>
        <p className="hero-subtitle">A Passionate Full-Stack Web Developer <br />and a Graphic Designer</p>
        <p className="hero-description">
          Building engaging and responsive web applications with a focus on user experience.
        </p>
        <a href="#projects" className="hero-button">View My Work</a>
      </div>
      <div className="hero-image-placeholder">
        <img src={IMG} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;