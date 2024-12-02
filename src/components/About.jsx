import React from 'react';
import styles from './About.module.css';
import profilePic from '../assets/pic.jpg';
const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.imageSection}>
        <img
          src={profilePic}
          alt="About Me"
          className={styles.profileImage}
        />
      </div>
      <div className={styles.textSection}>
        <h2>About Me</h2>
        <p>
          Hello! I'm [Your Name], a passionate [Your Profession, e.g., Web Developer]
          with a knack for creating beautiful, functional, and user-friendly web
          applications. With experience in [briefly mention skills or expertise],
          I thrive on turning ideas into reality.
        </p>
        <button className={styles.knowMoreButton}>Know More</button>
      </div>
    </div>
  );
};

export default About;
