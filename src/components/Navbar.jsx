import  { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyWebsite</div>
      <div className={styles.navToggle} onClick={toggleMenu}>
        ☰
      </div>
      <ul
        className={`${styles.navLinks} ${isMenuOpen ? styles.mobileMenu : ""}`}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/education">Education</a>
        </li>
        <li>
          <a href="/services">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
