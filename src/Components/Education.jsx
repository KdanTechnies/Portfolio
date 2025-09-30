import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// We'll create this CSS file next

// Component for a single education entry
const EducationEntry = ({
  degree,
  institution,
  duration,
  description,
  index,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  // Variants for staggered animation
  const entryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.15, // Stagger effect
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="education-entry"
      variants={entryVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h3 className="education-degree">{degree}</h3>
      <p className="education-institution">{institution}</p>
      <p className="education-duration">{duration}</p>
      {description && <p className="education-description">{description}</p>}
    </motion.div>
  );
};

// Main Education Section component
const Education = () => {
  const educationData = [
    {
      degree: "Higher National Diploma in Computer Science",
      institution: "Abia State Polytechnic",
      duration: "September 2018 - May 2022 (Expected)",
      description:
        "Focused on advanced algorithms, machine learning, and distributed systems. Thesis project on real-time data processing, and object oriented programing.",
    },
    {
      degree: " BSc (Bachelor of Science) in Computer Science",
      institution: "Federal University of Technology Owerri",
      duration: "August 2025 - February 2027",
      description:
      "started my journey in Computer Science at the polytechnic, where I gained strong foundational knowledge in programming, databases, networking, and software development. Now, as a university student pursuing my BSc in Computer Science, I’m building on that foundation with deeper learning in areas like algorithms, data structures, web development, software engineering, and emerging technologies. This path is helping me strengthen both the practical and theoretical aspects of computing, preparing me for real-world problem solving and innovation in tech. "

    },
    {
      degree: "Diploma in Software Engineering",
      institution: "Jenga Tech Institute",
      duration: "December 2024 - Oct 2025",
      description:
        "I recently earned a Diploma in Software Engineering from Jenga Tech Institute in October 2025, where I delved deep to the core of modern software development. The program emphasized hands-on learning with tools such as JavaScript, React, HTML & CSS, Tailwind CSS, Python, Django and Git/GitHub, giving me the skills to build both front-end and back-end projects. Beyond coding, I also learned best practices in problem-solving, critical thinking, debugging, and version control, which helped me develop a strong foundation for collaborating on real-world projects and continuously improving as a developer.",
    },
    {
      degree: "Diploma in Cybercafe Operator",
      institution: "Amazing Grace Hub",
      duration: "June 2019 - August 2021",
      description:
        "Gained hands-on experience in computer operations, internet usage, and basic IT support. Developed skills in managing cybercafe services, including system maintenance, printing and scanning solutions, file management, and assisting clients with digital literacy. Built a strong foundation in troubleshooting hardware/software issues, ensuring smooth daily operations, and providing excellent customer service in a tech-driven environment.",
    },

  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">My Education</h2>
      <div className="education-timeline">
        {educationData.map((entry, index) => (
          <EducationEntry key={index} {...entry} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;
