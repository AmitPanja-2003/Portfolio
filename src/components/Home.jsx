import React from "react";
import styles from "./Home.module.css";
import profilePic from "../assets/pic.jpg"; 
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Social icons
import { HiDownload } from "react-icons/hi"; // Download icon

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Right Image Section */}
     

      {/* Left Content Section */}
      <div className={styles.textSection}>
        <h1 className={styles.name}>Hi, I'm Amit Panja</h1>
        <p className={styles.summary}>
          A passionate Full-Stack Developer with expertise in Java, React, and
          MongoDB. I love building dynamic and user-friendly web applications
          that solve real-world problems. Let's connect and create something
          amazing together!
        </p>

        {/* Social Media Links */}
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/AmitPanja-2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/amit-panja-310518252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className={styles.icon} />
          </a>
        </div>

        {/* Download CV Button */}
        <a
          href="https://res.cloudinary.com/dw6wucdmw/image/upload/v1743682889/Amit_Panja_1_scbfko.pdf"
          download
          className={styles.cvButton}
        >
          <HiDownload className={styles.downloadIcon} /> Download Resume
        </a>
      </div>
      <div className={styles.imageSection}>
        <img src={profilePic} alt="Amit Panja" className={styles.profileImage} />
      </div>
    </div>
  );
};

export default Home;
