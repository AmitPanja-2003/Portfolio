import React from "react";
import styles from "./About.module.css";
import profilePic from "../assets/pic.jpg";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Profile Image */}
      <div className={styles.imageSection}>
        <img src={profilePic} alt="About Me" className={styles.profileImage} />
      </div>

      {/* Text Content */}
      <div className={styles.textSection}>
        <h2>About Me</h2>
        <p>
          Hi, I'm Amit, a passionate Computer Science Engineer and aspiring
          Full-Stack Developer. I specialize in Java, React, and MongoDB,
          building efficient and user-friendly web applications. I enjoy
          solving complex problems, optimizing performance, and creating
          seamless user experiences. Currently, I'm exploring backend
          development, system design, and scalable applications. When I'm not
          coding, I love learning new frameworks and contributing to open-source
          projects. Let's connect and build something amazing together!
        </p>
        <button className={styles.knowMoreButton}>Know More</button>
      </div>
    </div>
  );
};

export default About;
