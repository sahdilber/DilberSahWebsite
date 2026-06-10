import Head from 'next/head'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const sectionReveal = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.24 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  variants: fadeUp,
}

const buildCards = [
  {
    title: 'Mobile Apps',
    body: 'SwiftUI, Firebase, MVVM, App Store-ready mobile experiences.',
  },
  {
    title: 'Web Products',
    body: 'Responsive websites and modern front-end interfaces using React, HTML, CSS, and JavaScript.',
  },
  {
    title: 'Product Design',
    body: 'User flows, interface design, UX/UI improvements, and product thinking.',
  },
]

const pluggyFeatures = [
  'Map-based station search',
  'Operator filtering',
  'Favorites',
  'Charging point exploration',
  'Modern UX/UI design',
  'App Store release',
]

const products = [
  {
    name: 'Moodiary',
    label: 'Calm habit system',
    description:
      'Mood tracking app built with SwiftUI and Firebase, featuring mood tracking, statistics, goal management, offline support, and dark mode.',
    tone: 'moodiary',
    image: '/projects/moodiary/moodiary-9-main.PNG',
  },
  {
    name: 'ArtifyAI',
    label: 'Creative image engine',
    description:
      'AI-powered iOS application using CoreML and SwiftUI to transform photos into artistic styles with real-time image processing and a simple, intuitive user interface.',
    tone: 'artify',
    image: '/projects/artifyai/artifyai-3-before-after-picasso.PNG',
  },
  {
    name: 'TripGo',
    label: 'Travel discovery concept',
    description:
      'Travel discovery application concept focused on local attractions, cultural destinations, and food recommendations.',
    tone: 'tripgo',
  },
]

const reasons = [
  {
    title: 'Published Products',
    body: 'Experience building real mobile products and App Store-ready applications.',
  },
  {
    title: 'Design-Driven Development',
    body: 'I care about interface quality, user experience, and clean product flows.',
  },
  {
    title: 'Mobile & Web',
    body: 'I can work across iOS applications and responsive front-end websites.',
  },
  {
    title: 'Product Thinking',
    body: 'I focus on turning ideas into usable, polished digital products.',
  },
]

const timeline = [
  {
    period: '2025 - Present',
    company: 'KargoLab',
    role: 'iOS & Front-End Developer',
    body: 'Developed iOS interfaces using SwiftUI and MVVM architecture. Built responsive web interfaces using React, HTML, CSS, and JavaScript. Contributed to UX/UI improvements and feature implementation across mobile and web projects.',
  },
  {
    period: 'Jul 2025 - Sep 2025',
    company: 'Eterna Teknoloji',
    role: 'iOS Developer Intern',
    body: 'Developed user-focused iOS interfaces using SwiftUI. Worked with MVVM architecture and reusable UI components. Contributed to UI improvements and product development.',
  },
  {
    period: 'Jul 2025 - Aug 2025',
    company: 'Dorasoft',
    role: 'Software Engineering Intern',
    body: 'Supported development and debugging of an SQL-based ERP system. Helped improve data processing performance and participated in technical problem-solving.',
  },
  {
    period: '2023',
    company: 'Teknofest / TripGo',
    role: 'Product Concept',
    body: 'Developed a travel discovery application concept focused on local places and food recommendations.',
  },
]

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Swift', 'JavaScript', 'Python', 'C++'],
  },
  {
    title: 'Technologies & Tools',
    items: ['SwiftUI', 'Firebase', 'React', 'HTML', 'CSS', 'Git', 'GitHub', 'Xcode', 'VS Code'],
  },
  {
    title: 'Concepts',
    items: ['MVVM', 'REST APIs', 'JSON', 'Responsive Design', 'UI/UX Design'],
  },
]

function PhoneMockup({ children, className = '', label = 'iPhone product preview' }) {
  return (
    <div className={`${styles.phone} ${className}`} aria-label={label}>
      <div className={styles.phoneButton} />
      <div className={styles.phoneScreen}>{children}</div>
    </div>
  )
}

function PluggyScreen() {
  return (
    <div className={styles.pluggyScreen}>
      <div className={styles.statusBar}>
        <span>9:41</span>
        <span>100%</span>
      </div>
      <div className={styles.mapGrid}>
        <span className={styles.mapLineOne} />
        <span className={styles.mapLineTwo} />
        <span className={styles.routeLine} />
        <span className={`${styles.pin} ${styles.pinOne}`} />
        <span className={`${styles.pin} ${styles.pinTwo}`} />
        <span className={`${styles.pin} ${styles.pinThree}`} />
      </div>
      <div className={styles.pluggyPanel}>
        <div>
          <span className={styles.appEyebrow}>Pluggy nearby</span>
          <strong>12 stations</strong>
        </div>
        <div className={styles.stationCard}>
          <span className={styles.stationIcon}>P</span>
          <div>
            <strong>Fast Charge</strong>
            <p>4 min away • 6 sockets</p>
          </div>
        </div>
        <div className={styles.stationFilters}>
          <span>AC</span>
          <span>DC</span>
          <span>Available</span>
        </div>
      </div>
    </div>
  )
}

function TripGoVisual() {
  return (
    <div className={styles.tripVisual} aria-label="TripGo app concept preview">
      <div className={styles.tripSky} />
      <div className={styles.tripCard}>
        <span>Istanbul route</span>
        <strong>Culture, food, local gems.</strong>
      </div>
      <div className={styles.tripTiles}>
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Dilber Şah — iOS & Front-End Developer</title>
        <meta
          name="description"
          content="Portfolio of Dilber Şah, an iOS and Front-End Developer building mobile applications, responsive websites, and product-focused digital experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.page}>
        <section id="hero" className={`${styles.section} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <motion.p {...sectionReveal} className={styles.kicker}>
              Dilber OS • Istanbul, Turkey
            </motion.p>
            <motion.h1 {...sectionReveal} transition={{ ...sectionReveal.transition, delay: 0.05 }}>
              Building products,
              <br />
              not just apps.
            </motion.h1>
            <motion.p {...sectionReveal} transition={{ ...sectionReveal.transition, delay: 0.1 }} className={styles.heroRole}>
              iOS Developer • Front-End Developer • Product Builder
            </motion.p>
            <motion.p {...sectionReveal} transition={{ ...sectionReveal.transition, delay: 0.15 }} className={styles.heroText}>
              I create intuitive mobile applications, responsive web experiences, and polished digital
              products with a strong focus on UX/UI and product quality.
            </motion.p>
            <motion.div {...sectionReveal} transition={{ ...sectionReveal.transition, delay: 0.2 }} className={styles.actions}>
              <a className={styles.primaryButton} href="#products">
                View Products
              </a>
              <a className={styles.secondaryButton} href="/Dilber-Sah-CV.pdf" download>
                Download CV
              </a>
              <a className={styles.ghostButton} href="#contact">
                Contact
              </a>
            </motion.div>
          </div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className={styles.productHalo} />
            <PhoneMockup className={styles.heroPhone}>
              <PluggyScreen />
            </PhoneMockup>
            <div className={styles.productCard}>
              <span>Featured App</span>
              <strong>Pluggy</strong>
              <p>EV charging discovery, built with SwiftUI.</p>
            </div>
          </motion.div>
        </section>

        <section className={styles.section}>
          <motion.div {...sectionReveal} className={styles.sectionHeader}>
            <p className={styles.kicker}>System capabilities</p>
            <h2>What I build.</h2>
          </motion.div>
          <div className={styles.cardGrid}>
            {buildCards.map((card) => (
              <motion.article {...sectionReveal} className={styles.buildCard} key={card.title}>
                <span className={styles.cardDot} />
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="products" className={`${styles.section} ${styles.pluggySection}`}>
          <div className={styles.pluggyGlow} />
          <motion.div {...sectionReveal} className={styles.pluggyCopy}>
            <span className={styles.badge}>Available on the App Store</span>
            <h2>Pluggy</h2>
            <p className={styles.productSubtitle}>Electric mobility. Simplified.</p>
            <p>
              Pluggy is an EV charging station discovery application built with SwiftUI. It includes
              map-based station search, operator filtering, favorites, charging point exploration, and
              a modern mobile UX.
            </p>
            <a className={styles.primaryButton} href="#" aria-label="Open Pluggy on the App Store">
              App Store
            </a>
          </motion.div>

          <motion.div {...sectionReveal} className={styles.stickyShowcase}>
            <PhoneMockup className={styles.pluggyPhone}>
              <PluggyScreen />
            </PhoneMockup>
          </motion.div>

          <div className={styles.featureGrid}>
            {pluggyFeatures.map((feature) => (
              <motion.div {...sectionReveal} className={styles.featureCard} key={feature}>
                {feature}
              </motion.div>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.showcaseSection}`} aria-label="Product showcase">
          {products.map((product, index) => (
            <motion.article
              {...sectionReveal}
              className={`${styles.productStory} ${styles[product.tone]}`}
              key={product.name}
            >
              <div className={styles.storyCopy}>
                <p className={styles.kicker}>{product.label}</p>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>
              <div className={styles.storyVisual}>
                {product.image ? (
                  <PhoneMockup className={index === 1 ? styles.artPhone : styles.moodPhone}>
                    <img src={product.image} alt={`${product.name} app screenshot`} />
                  </PhoneMockup>
                ) : (
                  <TripGoVisual />
                )}
              </div>
            </motion.article>
          ))}
        </section>

        <section className={styles.section}>
          <motion.div {...sectionReveal} className={styles.sectionHeader}>
            <p className={styles.kicker}>Collaboration layer</p>
            <h2>Why work with me?</h2>
          </motion.div>
          <div className={styles.reasonGrid}>
            {reasons.map((reason) => (
              <motion.article {...sectionReveal} className={styles.reasonCard} key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className={`${styles.section} ${styles.timelineSection}`}>
          <motion.div {...sectionReveal} className={styles.sectionHeader}>
            <p className={styles.kicker}>Release history</p>
            <h2>Building since 2023.</h2>
          </motion.div>
          <div className={styles.timeline}>
            {timeline.map((item) => (
              <motion.article {...sectionReveal} className={styles.timelineItem} key={`${item.period}-${item.company}`}>
                <time>{item.period}</time>
                <div>
                  <h3>{item.company}</h3>
                  <p className={styles.role}>{item.role}</p>
                  <p>{item.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className={`${styles.section} ${styles.skillsSection}`}>
          <motion.div {...sectionReveal} className={styles.sectionHeader}>
            <p className={styles.kicker}>Developer settings</p>
            <h2>Skills.</h2>
          </motion.div>
          <motion.div {...sectionReveal} className={styles.settingsPanel}>
            {skillGroups.map((group) => (
              <div className={styles.skillGroup} key={group.title}>
                <h3>{group.title}</h3>
                <div className={styles.skillList}>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <motion.div {...sectionReveal} className={styles.contactInner}>
            <p className={styles.darkKicker}>Dilber OS is ready</p>
            <h2>
              Let&apos;s build
              <br />
              something remarkable.
            </h2>
            <p>
              Have a mobile app, website, or product idea? Let&apos;s turn it into a polished digital
              experience.
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:dilber-sah@hotmail.com">Email</a>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="/Dilber-Sah-CV.pdf" download>
                Download CV
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  )
}
