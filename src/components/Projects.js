import Link from 'next/link'
import styles from '../styles/Projects.module.css'

const projects = [
  {
    title: 'ArtifyAI',
    description:
      'Fotoğrafları Van Gogh, Picasso ve Kandinsky gibi sanatçıların stiline dönüştüren yapay zeka destekli iOS uygulaması.',
    tech: ['Swift', 'SwiftUI', 'CoreML', 'iOS'],
    detail: '/artifyai',
    github: 'https://github.com/sahdilber/ArtifyAI-',
    image: '/projects/artifyai/artifyai-cover.jpeg'
  },
  {
    title: 'Moodiary',
    description:
      'Ruh halini kaydetme, hedef belirleme, grafik-takvim istatistikleri ve Firebase destekli modern bir mood tracking iOS uygulaması.',
    tech: ['Swift', 'SwiftUI', 'Firebase', 'Firestore'],
    detail: '/moodiary',
    github: 'https://github.com/sahdilber/Mood-journal',
    image: '/projects/moodiary/moodiary-cover.jpeg'
    // Eğer görünmüyorsa: public/projects/moodiary klasöründeki dosya adını
    // aynen buna göre kontrol et (.jpeg / .jpg / .png farkına bak)
  }
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>Projects</h2>
      <p className={styles.subtitle}>Highlighted works from my journey</p>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            {/* GÖRSEL */}
            <div className={styles.header}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  borderRadius: '14px'
                }}
              />
              <h3 className={styles.cardTitle}>{project.title}</h3>
            </div>

            {/* TEKNOLOJİLER */}
            <div className={styles.tags}>
              {project.tech.map((tag, i) => (
                <span key={i} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            {/* AÇIKLAMA */}
            <p className={styles.description}>{project.description}</p>

            {/* BUTONLAR */}
            <div className={styles.buttons}>
              {/* PROJEYİ İNCELE → Next.js Link */}
              <Link href={project.detail} className={styles.demoBtn}>
                Projeyi İncele
              </Link>

              {/* GITHUB */}
              <a
                href={project.github}
                className={styles.githubBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}