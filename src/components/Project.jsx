import React from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "Project One",
    liveLink: "https://live-demo-link.com",
    githubLink: "https://github.com/username/project-one",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    name: "Project Two",
    liveLink: "https://live-demo-link.com",
    githubLink: "https://github.com/username/project-two",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    name: "Project Three",
    liveLink: "https://live-demo-link.com",
    githubLink: "https://github.com/username/project-three",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    name: "Project Three",
    liveLink: "https://live-demo-link.com",
    githubLink: "https://github.com/username/project-three",
  },
];

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.sectionTitle}>My Projects</h2>
      <div className={styles.cardsWrapper}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <img
              src={project.image}
              alt={project.name}
              className={styles.projectImage}
            />
            <h3 className={styles.projectName}>{project.name}</h3>
            <div className={styles.buttons}>
              <a
                href={project.liveLink}
                className={styles.liveButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                className={styles.githubButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
