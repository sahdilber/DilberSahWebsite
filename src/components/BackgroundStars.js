import { useEffect, useRef } from 'react'

export default function BackgroundStars() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random()
    }))

    let meteors = []

    function drawMeteors() {
      if (Math.random() < 0.03) {
        meteors.push({
          x: Math.random() * width,
          y: -10,
          dx: Math.random() * 4 + 2,
          dy: Math.random() * 1.5 + 1,
          length: Math.random() * 80 + 50,
          opacity: 0.6
        })
      }

      meteors = meteors.filter(m => m.y < height + 100)

      meteors.forEach(m => {
        ctx.beginPath()
        ctx.moveTo(m.x, m.y)
        ctx.lineTo(m.x - m.length, m.y - m.length / 2)
        ctx.strokeStyle = `rgba(255,255,255,${m.opacity})`
        ctx.lineWidth = 2
        ctx.stroke()

        m.x += m.dx
        m.y += m.dy
        m.opacity -= 0.01
      })
    }

    function animate() {
      ctx.clearRect(0, 0, width, height)

      // Background
      ctx.fillStyle = '#0a1a2f'
      ctx.fillRect(0, 0, width, height)

      // Stars
      for (let s of stars) {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI)
        ctx.fillStyle = `rgba(91, 167, 255, ${s.alpha})`
        ctx.fill()

        s.x += s.dx
        s.y += s.dy
        s.alpha += (Math.random() - 0.5) * 0.02
        s.alpha = Math.min(Math.max(s.alpha, 0.2), 0.9)

        if (s.x < 0) s.x = width
        if (s.x > width) s.x = 0
        if (s.y < 0) s.y = height
        if (s.y > height) s.y = 0
      }

      drawMeteors()

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    })
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at top left, #0a1a2f, #0d1117)'
      }}
    />
  )
}