import  { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>AMIT</div>
      <div className={styles.navToggle} onClick={toggleMenu}>
        ☰
      </div>
      <ul
        className={`${styles.navLinks} ${isMenuOpen ? styles.mobileMenu : ""}`}
      >
        <li>
          <NavLink  to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/education">Education</NavLink>
        </li>
        <li>
          <NavLink to="/services">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
