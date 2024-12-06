import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© 2024 Amit Panja. All rights.</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
