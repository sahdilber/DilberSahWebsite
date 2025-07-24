import { useEffect } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)
  
    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      // Sparkle trail (aynı kalacak)
      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle'
      sparkle.style.left = `${e.clientX}px`
      sparkle.style.top = `${e.clientY}px`
      sparkle.style.setProperty('--x', `${(Math.random() - 0.5) * 60}px`)
      sparkle.style.setProperty('--y', `${Math.random() * 60 + 20}px`)
      sparkle.style.opacity = Math.random() * 0.5 + 0.3
      sparkle.style.transform = `scale(${Math.random() * 0.5 + 0.7})`
      sparkle.style.backgroundColor = `hsl(${200 + Math.random() * 40}, 100%, 75%)`
      sparkle.style.filter = `blur(1.5px)`
      document.body.appendChild(sparkle)
      setTimeout(() => sparkle.remove(), 1000)
    }
  
    const buttons = document.querySelectorAll('.btn, .primaryButton, .outlineButton, .iconButton')
    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', () => cursor.classList.add('star'))
      btn.addEventListener('mouseleave', () => cursor.classList.remove('star'))
    })
  
    document.addEventListener('mousemove', move)
  
    return () => {
      document.removeEventListener('mousemove', move)
      document.body.removeChild(cursor)
      buttons.forEach((btn) => {
        btn.removeEventListener('mouseenter', () => cursor.classList.add('star'))
        btn.removeEventListener('mouseleave', () => cursor.classList.remove('star'))
      })
    }
  }, [])

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

export default MyApp