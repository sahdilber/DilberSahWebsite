// src/pages/index.js
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </>
  )
}