import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <section id="contact" className={styles.contactSection}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.subtitle}>
          I’m always open to exciting opportunities and collaborations. Let’s build something awesome together.
        </p>

        <div className={styles.icons}>
          <a href="mailto:dilber-sah@hotmail.com" className={styles.iconWrapper} data-tooltip="Mail Me!">
            <MdEmail className={styles.icon} />
          </a>
          <a href="https://github.com/sahdilber" className={styles.iconWrapper} target="_blank" rel="noopener noreferrer" data-tooltip="See my code!">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/dilbersah/" className={styles.iconWrapper} target="_blank" rel="noopener noreferrer" data-tooltip="Connect on LinkedIn">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/dilbersah/" className={styles.iconWrapper} target="_blank" rel="noopener noreferrer" data-tooltip="Follow on Instagram">
            <FaInstagram className={styles.icon} />
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
  <div className={styles.footerLine} />
  <p className={styles.footerText}>
    © 2025 Dilber Şah. Designed & Built with <span className={styles.heart}>💜</span>
  </p>
</footer>
    </div>
  );
}