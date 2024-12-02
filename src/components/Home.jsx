import styles from './Home.module.css';
import profilePic from '../assets/pic.jpg'; // Place your image in the "assets" folder
// Place your image in the "assets" folder
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Social media icons
import { HiDownload } from 'react-icons/hi'; // Download icon

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.name}>Hi, I'm Amit Panja</h1>
        <p className={styles.summary}>
          I am a passionate Fullstack developer with expertise in [Your Skills]. I love creating meaningful
          and impactful solutions for real-world problems. Let's connect!
        </p>

        {/* Social Media Links */}
        <div className={styles.socialLinks}>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.icon} />
          </a>
        </div>

        {/* Download CV Button */}
        <a href="/path-to-your-cv.pdf" download className={styles.cvButton}>
          <HiDownload className={styles.downloadIcon} /> Download CV
        </a>
      </div>

      <div className={styles.imageSection}>
        <img src={profilePic} alt="Profile" className={styles.profileImage} />
      </div>
    </div>
  );
};

export default Home;
