import styles from '../styles/Hero.module.css'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'
import BackgroundStars from './BackgroundStars' // ⭐ Yıldızlar eklendi
import { FaGithub, FaLinkedin, FaTimes, FaFileAlt, FaDownload, FaEye } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <BackgroundStars />

      <div className={styles.container}>
        <h1 className={styles.title}>Hi, I&apos;m <span className={styles.highlight}>Dilber Şah</span></h1>

        <h2 className={styles.subtitle}>
          <span className={styles.gradient}>I build AI-powered full stack experiences</span>
        </h2>

        <p className={styles.type}>
          I craft{' '}
          <span className={styles.typing}>
            <Typewriter
              words={[
                'intelligent apps',
                'beautiful UIs',
                'scalable APIs',
                'mobile + web solutions'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </p>

        <p className={styles.description}>
          Full Stack Developer with a passion for AI and emotionally intuitive design.
        </p>

        <div className={styles.socialIcons}>
          <a href="https://github.com/sahdilber" target="_blank"><FaGithub /></a>
          <a href="https://linkedin.com/in/sahdilber" target="_blank"><FaLinkedin /></a>
          <a href="#"><FaTimes /></a>
        </div>

        <div className={styles.buttons}>
          <Link href="#projects" className={styles.primaryButton}>
            <FaEye /> <span>My Work</span>
          </Link>
          <Link href="/cv.pdf" download className={styles.outlineButton}>
            <FaFileAlt /> Resume
          </Link>
          <a href="/cv.pdf" download className={styles.iconButton}>
            <FaDownload />
          </a>
        </div>

        <div className={styles.downArrowWrapper}>
          <a href="#skills">
            <div className={styles.downArrowCircle}>
              <span className={styles.downArrowIcon}>↓</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}