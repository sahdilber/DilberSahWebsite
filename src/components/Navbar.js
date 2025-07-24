import styles from '../styles/Navbar.module.css'
import { FaHome, FaUser, FaLaptopCode } from 'react-icons/fa'
import { MdContactMail } from 'react-icons/md'
import { GiSkills } from 'react-icons/gi'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>D</div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><a href="#hero"><FaHome /> Home</a></li>
          <li><a href="#skills"><GiSkills /> Skills</a></li>
          <li><a href="#about"><FaUser /> About Me</a></li>
          <li><a href="#projects"><FaLaptopCode /> Projects</a></li>
        </ul>
      </nav>
      <a href="#contact" className={styles.contactBtn}><MdContactMail /> Contact</a>
    </header>
  )
}