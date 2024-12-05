
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.leftSection}>
        <h2 className={styles.formTitle}>Contact Us</h2>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id=" name" placeholder="Enter your name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter your message" rows="5"></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
      <div className={styles.rightSection}>
        <h2 className={styles.contactTitle}>Get In Touch</h2>
        <p className={styles.contactText}>
          Feel free to reach out for collaborations, inquiries, or just to say hello!
        </p>
        <div className={styles.contactInfo}>
          <p>
            📧 <strong>Email:</strong> apanja234@gmail.com
          </p>
          <p>
            📱 <strong>Phone:</strong> +91 9647241462
          </p>
          <p>
            📍 <strong>Address:</strong> Kolkata, West Bengal, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
