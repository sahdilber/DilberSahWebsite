// src/components/AboutMe.js
import styles from '../styles/About.module.css'
// import avatar from '../assets/avatar.png' ← bunu sil

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>Ben Kimim?</h2>
          <p className={styles.description}>
          Ben Dilber Şah; modern arayüzler, kullanıcı deneyimi ve temiz yazılım mimarisi üzerine çalışan bir Front-End ve iOS Developer’ım. Çukurova Üniversitesi Bilgisayar Mühendisliği bölümünden mezunum; edindiğim mühendislik bakış açısını, estetik ve kullanıcı odaklı uygulamalar geliştirme tutkumla bir araya getiriyorum.
          </p>
          <p className={styles.description}>
          React, Next.js, Swift ve SwiftUI ile performanslı, etkileşimli ve sade dijital deneyimler üretmeyi seviyorum. Kod yazarken ölçeklenebilir mimari, temiz yapı ve detaylara verilen özen benim için her zaman ön planda.
Amacım; teknolojiyi modern tasarım anlayışıyla birleştirerek kullanıcıların gerçekten keyifle kullandığı arayüzler geliştirmek.
          </p>
        </div>
        <div className={styles.avatarContainer}>
        <img src="/avatar.png" alt="Avatar" className={styles.avatar} />
        </div>
      </div>
    </section>
  )
}