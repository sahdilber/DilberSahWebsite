import styles from '../styles/Projects.module.css'

const projects = [
  {
    title: 'TripGo',
    description: 'Yerli ve yabancı turistlere gizli kalmış sokak lezzetlerini ve kültürel noktaları tanıtan bir mobil uygulama.',
    tech: ['React Native', 'Firebase', 'Google Maps API'],
    demo: '#',
    github: '#',
    image: '/projects/tripgo.png'
  },
  {
    title: 'AritfIA',
    description: 'Yapay zeka destekli üretkenlik uygulaması. Swift ile iOS platformunda geliştirildi.',
    tech: ['Swift', 'CoreML', 'UX/UI'],
    demo: '#',
    github: '#',
    image: '/projects/aritfya.png'
  },
  {
    title: 'ERP Debug',
    description: 'Dorasoft stajı süresince kurumsal bir ERP sisteminde hata ayıklama ve işlevsellik artırımı sağlandı.',
    tech: ['SQL', 'Debugging', 'Team Workflow'],
    demo: '#',
    github: '#',
    image: '/projects/erp.png'
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
            <div className={styles.header}>
              <img src={project.image} alt={project.title} className={styles.image} />
              <h3 className={styles.cardTitle}>{project.title}</h3>
            </div>
            <div className={styles.tags}>
              {project.tech.map((tag, i) => (
                <span key={i} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.buttons}>
              <a href={project.demo} className={styles.demoBtn}>Live Demo</a>
              <a href={project.github} className={styles.githubBtn}>GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}