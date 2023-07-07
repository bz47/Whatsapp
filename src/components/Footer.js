import React from "react";
import styles from "../Styles/Footer.module.css";

function Footer() {
  return (
    <div id="footer">
      <div id="leftfoot">
        <div id="black"></div>
        <button className={styles.download2}>DOWNLOAD</button>
      </div>
      <div>
        <h3 className={styles.why}>What we do</h3>
        <p className={styles.white}>Features</p>
        <p className={styles.white}>Blog</p>
        <p className={styles.white}>Security</p>
        <p className={styles.white}>For Business</p>
      </div>
      <div>
        <h3 className={styles.why}>Who we are</h3>
        <p className={styles.white}>About Us</p>
        <p className={styles.white}>Careers</p>
        <p className={styles.white}>Brand Center</p>
        <p className={styles.white}>Privacy</p>
      </div>
      <div>
        <h3 className={styles.why}>Use WhatsApp</h3>
        <p className={styles.white}>Android</p>
        <p className={styles.white}>Iphone</p>
        <p className={styles.white}>Mac/PC</p>
        <p className={styles.white}>WhatsApp Web</p>
      </div>
      <div>
        <h3 className={styles.why}>Need Help?</h3>
        <p className={styles.white}>Contact Us</p>
        <p className={styles.white}>Help Center</p>
        <p className={styles.white}>Cya Later Virus</p>
        <p className={styles.white}>Security Advisories</p>
      </div>
    </div>
  );
}

export default Footer;
