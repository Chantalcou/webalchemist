import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Luxury",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      title: "Education Platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      link: "#"
    },
    {
      title: "Corporate Dashboard",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="projects-section" id="projects" ref={ref}>
      <div className="background-wave"></div>
      
      <motion.div 
        className="projects-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="section-title">
          <span>Digital</span>
          <span>Experiences</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card"
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ 
                y: isInView ? 0 : 100,
                opacity: isInView ? 1 : 0
              }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2
              }}
            >
              <div className="card-inner">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-line"></div>
                  <a href={project.link} className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;