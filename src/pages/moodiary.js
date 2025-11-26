import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/ProjectDetail.module.css'
import { FaArrowLeft, FaGithub } from 'react-icons/fa'

const images = [
  { src: '/projects/moodiary/moodiary-1-login.PNG', alt: 'Giriş ekranı' },
  { src: '/projects/moodiary/moodiary-2-signup.PNG', alt: 'Kayıt ekranı' },
  { src: '/projects/moodiary/moodiary-3-stats-chart.PNG', alt: 'Grafik görünümü' },
  { src: '/projects/moodiary/moodiary-4-stats-calendar.PNG', alt: 'Takvim görünümü' },
  { src: '/projects/moodiary/moodiary-5-profile.PNG', alt: 'Profil ekranı' },
  { src: '/projects/moodiary/moodiary-6-goals.PNG', alt: 'Hedefler listesi' },
  { src: '/projects/moodiary/moodiary-7-new-entry.PNG', alt: 'Yeni mood girişi' }
]

export default function MoodiaryPage() {
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Üst navigasyon */}
        <div className={styles.backRow}>
          <Link href="/#projects" className={styles.backLink}>
            <FaArrowLeft />
            <span>Projelerime dön</span>
          </Link>

          <span className={styles.badge}>iOS · Firebase · SwiftUI</span>
        </div>

        {/* Başlık */}
        <header className={styles.header}>
          <h1 className={styles.title}>Moodiary – Mood Tracking Journal</h1>
          <p className={styles.subtitle}>
            Duygularını takip eden, hedefler belirleyip gelişimi izleten,
            grafik ve takvim görünümü ile farkındalık kazandıran modern bir iOS günlük uygulaması.
          </p>

          <div className={styles.meta}>
            <div>
              <span className={styles.metaLabel}>Rolüm</span>
              <p className={styles.metaValue}>iOS Developer · UI/UX Tasarımı · Firebase</p>
            </div>
            <div>
              <span className={styles.metaLabel}>Teknolojiler</span>
              <p className={styles.metaValue}>Swift · SwiftUI · Firebase Auth · Firestore</p>
            </div>
          </div>
        </header>

        {/* Ana içerik */}
        <main className={styles.content}>
          
          {/* SOL — Görseller */}
          <div className={styles.visualColumn}>
            {/* Kapak görseli */}
            <div className={styles.coverWrapper}>
              <img
                src="/projects/moodiary/moodiary-cover.jpeg"
                alt="Moodiary kapak"
                className={styles.coverImage}
              />
            </div>

            {/* Galeri */}
            <h2 className={styles.sectionHeading}>Ekran Görüntüleri</h2>
            <div className={styles.gallery}>
              {images.map((img, i) => (
                <div key={i} className={styles.thumbWrapper}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={styles.thumb}
                    onClick={() => setLightboxImage(img.src)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* SAĞ — Açıklamalar */}
          <div className={styles.textColumn}>

            <h2 className={styles.sectionHeading}>Proje Özeti</h2>
            <p className={styles.paragraph}>
              Moodiary, kullanıcının günlük ruh halini kaydetmesini, hedef belirlemesini
              ve duygusal değişimini zaman içinde takip edebilmesini sağlayan modern bir
              iOS uygulamasıdır. Tüm veriler Firebase üzerinde güvenli şekilde saklanır.
            </p>

            <p className={styles.paragraph}>
              Uygulama; gradient arkaplanı, kart tabanlı arayüzü ve custom tab bar yapısıyla
              modern bir görünüm sunarken, SwiftUI ile performanslı ve akıcı bir deneyim sağlar.
            </p>

            {/* Özellikler */}
            <h3 className={styles.subHeading}>Öne Çıkan Özellikler</h3>
            <ul className={styles.list}>
              <li>Ruh hali kaydı için emoji tabanlı tasarım.</li>
              <li>Günlük not ekleme ve hedef tamamlama.</li>
              <li>Bar grafik ile mood dağılımı analizi.</li>
              <li>Takvim görünümü ile mood geçmişi takibi.</li>
              <li>Firebase Auth ile güvenli giriş/kayıt ekranı.</li>
              <li>Profil: bildirim saatleri, şifre değiştirme, çıkış.</li>
            </ul>

            {/* Teknik */}
            <h3 className={styles.subHeading}>Teknik Detaylar</h3>
            <ul className={styles.list}>
              <li>SwiftUI + MVVM mimarisi.</li>
              <li>Firestore’da kullanıcı bazlı mood koleksiyonları.</li>
              <li>Gerçek zamanlı Firestore sorguları.</li>
              <li>Local bildirim planlayıcı ile daily reminders.</li>
              <li>Custom chart & calendar bileşenleri.</li>
            </ul>

            {/* GitHub */}
            <div className={styles.actions}>
              <a
                href="#"
                className={`${styles.button} ${styles.buttonSecondary}`}
                onClick={e => e.preventDefault()}
              >
                <FaGithub />
                <span>GitHub Repo Yakında</span>
              </a>
            </div>
          </div>
        </main>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className={styles.lightbox}
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} className={styles.lightboxImage} />
        </div>
      )}
    </section>
  )
}