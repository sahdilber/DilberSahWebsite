import { useState } from 'react'
import styles from '../styles/Navbar.module.css'

const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#hero" onClick={closeMenu} aria-label="Dilber OS home">
        <span>Dilber OS</span>
      </a>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className={styles.mobileCv} href="/Dilber-Sah-CV.pdf" download>
          Download CV
        </a>
      </nav>

      <a className={styles.cvButton} href="/Dilber-Sah-CV.pdf" download>
        Download CV
      </a>

      <button
        className={styles.menuButton}
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}
