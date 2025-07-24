import styles from '../styles/Skills.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact } from 'react-icons/fa'
import { SiSwift, SiCplusplus, SiNextdotjs } from 'react-icons/si'
import { FaArrowDown } from 'react-icons/fa'

export default function Skills() {
  return (
    
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.title}>Technologies I Work With</h2>
      <p className={styles.subtitle}>
        Cutting edge tools and frameworks for building the future
      </p>

      <div className={styles.grid}>
        <div className={styles.iconGroup}>
          <div className={styles.iconWrapper}>
            <FaHtml5 className={styles.icon} />
          </div>
          <span>HTML5</span>
        </div>

        <div className={styles.iconGroup}>
          <div className={styles.iconWrapper}>
            <FaCss3Alt className={styles.icon} />
          </div>
          <span>CSS3</span>
        </div>

        <div className={styles.iconGroup}>
          <div className={styles.iconWrapper}>
            <FaJs className={styles.icon} />
          </div>
          <span>JavaScript</span>
        </div>

        <div className={styles.iconGroup}>
          <div className={styles.iconWrapper}>
            <FaPython className={styles.icon} />
          </div>
          <span>Python</span>
        </div>

        <div className={styles.iconGroup}>
          <div className={styles.iconWrapper}>
            <SiSwift className={styles.icon} />
          </div>
          <span>Swift</span>
        </div>

        <div className={styles.iconGroup}>
          <div className={styles.iconWrapper}>
            <SiCplusplus className={styles.icon} />
          </div>
          <span>C++</span>
        </div>

        <div className={styles.iconGroup}>
          <div className={styles.iconWrapper}>
            <FaReact className={styles.icon} />
          </div>
          <span>React</span>
        </div>

        <div className={styles.iconGroup}>
          <div className={styles.iconWrapper}>
            <SiNextdotjs className={styles.icon} />
          </div>
          <span>Next.js</span>
        </div>
      </div>
      <div className={styles.downArrowWrapper}>
        <a href="#about">
            <div className={styles.downArrow}>
            <FaArrowDown />
            </div>
        </a>
       </div>
    </section>
    
  )
}