
import styles from "./Education.module.css";

const educationDetails = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Chitkara University",
    time: "2022 - 2026",
    cgpa: "9.58", 
  },
  {
    id: 2,
    degree: "West Bengal Council of Higher Secondary Education",
    institution: "Chhotakhelna Surendra Smriti Vidyamandir (H.S)",
    time: "2020 - 2022",
    percentage: "95%", 
  },
  {
    id: 3,
    degree: "West Bengal Board of Secondary Education",
    institution: "Balpai Pasupati Surendra Vidyapith (H.S)",
    time: "2019 - 2020",
    percentage: "85.85%", 
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
            {edu.cgpa && <p className={styles.detail}>CGPA: {edu.cgpa}</p>}
            {edu.percentage && <p className={styles.detail}>Percentage: {edu.percentage}</p>}
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Education;
