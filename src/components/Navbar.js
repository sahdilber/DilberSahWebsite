import styles from '../styles/Navbar.module.css'
import { MdContactMail } from 'react-icons/md'
import { LuUser } from 'react-icons/lu'
import { PiBrainBold } from 'react-icons/pi'
import { FiCode } from 'react-icons/fi'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [bubbleKey, setBubbleKey] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogoClick = () => {
    setBubbleKey(prev => prev + 1)
  }

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const generateRandomPosition = () => ({
    x: (Math.random() - 0.5) * 150,
    y: (Math.random() - 0.5) * 150,
  })

  const icons = ['📷', '🐘', '💙', '💜', '✨', '🔮', '💭']

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={handleLogoClick}>
        Dilber Şah
        <AnimatePresence mode="wait">
          <div className={styles.bubbleContainer} key={bubbleKey}>
            {[...Array(10)].map((_, i) => {
              const { x, y } = generateRandomPosition()
              const icon = icons[i % icons.length]
              return (
                <motion.span
                  key={i}
                  className={styles.bubble}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0.7 }}
                  animate={{ x, y, opacity: 0, scale: 1.3 }}
                  transition={{ duration: 1.8, delay: i * 0.05 }}
                  exit={{ opacity: 0 }}
                >
                  {icon}
                </motion.span>
              )
            })}
          </div>
        </AnimatePresence>
      </div>
     <div className={styles.center}>
    <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
      <ul className={styles.menu}>
        <li><a onClick={closeMenu} href="#hero"><LuUser />Home</a></li>
        <li><a onClick={closeMenu} href="#skills"><PiBrainBold />Skills</a></li>
        <li><a onClick={closeMenu} href="#about"><LuUser />About Me</a></li>
        <li><a onClick={closeMenu} href="#projects"><FiCode />Projects</a></li>
        <li className={styles.mobileContact}><a onClick={closeMenu} href="#contact"><MdContactMail />Contact</a></li>
      </ul>
    </nav>
  </div>

  <a href="#contact" className={styles.contactBtn}><MdContactMail/>Contact</a>
  
  <button className={`${styles.lensButton} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
    <div className={styles.lensCircle}>
      <span className={styles.lensLine}></span>
      <span className={styles.lensLine}></span>
      <span className={styles.lensLine}></span>
    </div>
  </button>
</header>
  )
}