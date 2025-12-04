import styles from '../styles/Hero.module.css'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'
import { FaArrowDown } from 'react-icons/fa'
import BackgroundStars from './BackgroundStars' // ⭐ Yıldızlar eklendi
import { FaGithub, FaLinkedin, FaTimes, FaFileAlt, FaDownload, FaEye } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <BackgroundStars />

      <div className={styles.container}>
  <h1 className={styles.title}>
    Merhaba, ben <span className={styles.highlight}>Dilber ŞAH</span>
  </h1>

  <h2 className={styles.subtitle}>
    <span className={styles.gradient}>
      iOS Developer & Frontend Developer
    </span>
  </h2>

  <p className={styles.type}>
    Mobil ve web için{' '}
    <span className={styles.typing}>
      <Typewriter
        words={[
          'modern arayüzler',
          'akıcı kullanıcı deneyimleri',
          'minimal tasarımlar',
          'SwiftUI & web frontend çözümler'
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
  SwiftUI ve web frontend teknolojileriyle modern arayüzler üretiyorum.
  </p>
        <div className={styles.socialIcons}>
          <a href="https://github.com/sahdilber" target="_blank"><FaGithub /></a>
          <a href="https://tr.linkedin.com/in/dilbersah" target="_blank"><FaLinkedin /></a>
          <a href="mailto:dilber-sah@hotmail.com"><FaEnvelope /></a>
        </div>

        <div className={styles.buttons}>
          <Link href="#projects" className={styles.primaryButton}>
            <FaEye /> <span>My Work</span>
          </Link>
          <Link href="/dilberSAH.pdf" download className={styles.outlineButton}>
            <FaFileAlt /> Resume
          </Link>
          <a href="/dilberSAH.pdf" download className={styles.iconButton}>
            <FaDownload />
          </a>
        </div>
        <div className={styles.downArrowWrapper}>
        <a href="#skills">
            <div className={styles.downArrow}>
            <FaArrowDown />
            </div>
        </a>
       </div>
      </div>
      
    </section>
  )
}