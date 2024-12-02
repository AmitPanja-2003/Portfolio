import React from "react";
import styles from "./Education.module.css";

const educationDetails = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "XYZ University",
    time: "2018 - 2022",
  },
  {
    id: 2,
    degree: "High School Diploma",
    institution: "ABC High School",
    time: "2016 - 2018",
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    institution: "DEF Secondary School",
    time: "2014 - 2016",
  },
];

const Education = () => {
  return (
    <div className={styles.educationContainer}>
      <h2 className={styles.sectionTitle}>Education</h2>
      <div className={styles.educationList}>
        {educationDetails.map((edu) => (
          <div key={edu.id} className={styles.educationCard}>
            <h3 className={styles.degree}>{edu.degree}</h3>
            <p className={styles.institution}>{edu.institution}</p>
            <p className={styles.time}>{edu.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
