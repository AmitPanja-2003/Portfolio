
import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dw6wucdmw/image/upload/v1743681036/Screenshot_2025-04-03_170954_bmbprd.png",
    name: "JobHunt",
    liveLink: "https://jobhunt-p.web.app",
    githubLink: "https://github.com/AmitPanja-2003/JobHunt",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dw6wucdmw/image/upload/v1743681027/Screenshot_2025-04-03_171103_ott01p.png",
    name: "Api-Test-github_profile",
    liveLink: "https://amitpanja-2003.github.io",
    githubLink: "https://github.com/AmitPanja-2003/AmitPanja-2003.github.io",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dw6wucdmw/image/upload/v1743681017/Screenshot_2025-04-03_171429_jp8gn9.png",
    name: "Crop-Recomendation System",
    liveLink: "https://project1-96ot.onrender.com",
    githubLink: "https://github.com/AmitPanja-2003/Crop-Recomendation",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dw6wucdmw/image/upload/v1743683135/Screenshot_2025-04-03_174853_o5fw2l.png",
    name: "LinkUp",
    liveLink: "https://github.com/AmitPanja-2003",
    githubLink: "https://github.com/AmitPanja-2003",
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
