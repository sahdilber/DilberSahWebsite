// src/components/BackgroundStars.js
import { useEffect, useRef } from 'react'
import styles from '../styles/BackgroundStars.module.css'

export default function BackgroundStars() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let stars = []

    const createStars = () => {
      stars = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random(),
        delta: Math.random() * 0.02,
        dx: (Math.random() - 0.5) * 0.05,
        dy: (Math.random() - 0.5) * 0.05
      }))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(star => {
        star.x += star.dx
        star.y += star.dy

        star.alpha += star.delta
        if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
        ctx.shadowBlur = 5
        ctx.shadowColor = 'white'
        ctx.fill()
      })
      requestAnimationFrame(animate)
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createStars()
    }

    resize()
    animate()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
}