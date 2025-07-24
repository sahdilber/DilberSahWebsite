// src/components/AboutMe.js
import styles from '../styles/About.module.css'
// import avatar from '../assets/avatar.png' ← bunu sil

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.description}>
            I'm Dilber Şah, a passionate Front-End and iOS Developer with a background in Computer Engineering. I enjoy building clean, functional, and user-centric applications that merge creativity with logic.
          </p>
          <p className={styles.description}>
            With experience in technologies like HTML, CSS, React, Swift, and Python, I love crafting interactive interfaces and exploring new tools that push the boundaries of modern development.
          </p>
        </div>
        <div className={styles.avatarContainer}>
        <img src="/avatar.png" alt="Avatar" className={styles.avatar} />
        </div>
      </div>
    </section>
  )
}