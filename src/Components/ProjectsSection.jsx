import React from 'react';

const ProjectCard = ({ title, description, technologies, link }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-tech">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project
      </a>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-commerce Store',
      description: 'A full-stack e-commerce application with user authentication, product listings, and a shopping cart.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      link: 'https://github.com/yourusername/ecommerce-store'
    },
    {
      title: 'QR Code Component',
      description: 'A simple Qr code component, from Frontend mentor.',
      technologies: ['React', 'HTML', 'CSS Modules', 'Jvascript'],
      link: 'https://kdantechnies.github.io/QR-code-frontend-mentor/'
    },
    {
      title: 'Portfolio Website (This one!)',
      description: 'My personal portfolio showcasing various projects and skills.',
      technologies: ['React', 'CSS3', 'Responsive Design', 'JavaScript'],
      link: 'https://github.com/yourusername/my-portfolio'
    },
    {
      title: 'Transcriber App',
      description: 'A software tool that converts spoken words into written text. It allows users to upload audio or video files—or even record speech in real time—and automatically generates accurate transcripts. Such applications are widely used for meetings, interviews, lectures, podcasts, and content creation.',
      technologies: ['React', 'CSS3', 'Responsive Design', 'JavaScript', 'Python', 'FastAPI'],
      link: 'https://transcriber-app-sigma.vercel.app/'
    },
    {
      title: 'Casual Betplatform',
      description: 'An online system that enables users to place wagers on sports, games, events, or virtual activities in a secure and interactive environment. It provides a digital space where players can register, deposit funds, place bets, and track outcomes in real time.',
      technologies: ['React', '', 'CSS3', 'Javascript'],
      link: 'https://github.com/yourusername/my-portfolio'
    },
    {
      title: 'Ongoing School Website',
      description: 'A School Website serves as the official digital hub for students, parents, teachers, and the community. It provides easy access to essential information about the school, including academic programs, admission guidelines, events, news, and contact details.',
      technologies: ['React', 'CSS3', 'Python', 'Django', 'Responsive Design', 'JavaScript'],
      link: 'https://github.com/yourusername/my-portfolio'
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;