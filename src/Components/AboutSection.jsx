import React from 'react';
import enoughpx from "../assets/Al.png";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Don't forget to import the styles!


const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>

        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000} // Adjust as needed
          transitionTime={500} // Adjust as needed
          stopOnHover={true} // Stop autoPlay when mouse is over
        >
          {/* Slide 1: Personal Photo and Introduction */}
          <div>
            <img src={enoughpx} alt="Your Profile" className="carousel-image" />
            <div className="legend">
              <p className="about-text-legend">
                Hello! I'm Kalu Onuka Daniel, a software developer with [4 years] of experience in building modern web applications.
              </p>
            </div>
          </div>

          {/* Slide 2: Expertise and Passion */}
          <div>
            <div className="carousel-text-slide">
              <p className="about-text">
              I am a fervent Software Engineer with 4 years of experience and a robust fixation in designing, building, and 
              delivering innovative software solutions.
              My expertise spans [ Web Development, Mobile Apps, AI ] etc. I thrive on solving complex problems, crafting efficient code, and collaborating to bring ideas to life. 
              Let's connect and explore how technology can drive impact!
              </p>
            </div>
          </div>

          {/* Slide 3: Skills List */}
          <div>
            <div className="carousel-text-slide">
              <h3 className="legend-title">My Skills:</h3>
              <ul className="skills-list legend-list">
                <li>ReactJs</li>
                <li>JavaScript (ES6+)</li>
                <li>Python</li>
                <li>HTML & CSS</li>
                <li>Django</li>
                <li>MongoDB</li>
                <li>Git</li>
                <li>Photoshop</li>
                <li>Corel Draw</li>
                <li>Canva</li>
              </ul>
            </div>
          </div>

          {/* Slide 4: Hobbies/Personal Touch */}
          <div>
            <div className="carousel-text-slide">
              <p className="about-text">
              To craft solutions that positively impact people's 
              lives, simplify complex problems, and open doors to
               new possibilities. I strive to stay at the forefront
                of technology, pushing boubdaries and exploring new 
                frontiers to create software that makes a difference.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default AboutSection;