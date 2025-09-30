import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import Education from "./Education";
import Contact from "./Contact";
import FooterSection from "./FooterSection";

import "./LandingPage.css"; // Import the main stylesheet

const LandingPage = () => {
  return (
    <div className="portfolio-landing-page">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Education />
      <Contact />
      <FooterSection />

      {/* You can add more sections like Contact, Skills, etc. */}
    </div>
  );
};

export default LandingPage;
