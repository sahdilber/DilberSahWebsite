import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/ProjectDetail.module.css'
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa'

const images = [
  {
    src: '/projects/moodiary/moodiary-1-login.PNG',
    alt: 'Moodiary - Giriş ekranı',
    caption: 'Kullanıcı dostu giriş ve kayıt akışı.',
    section: 'Giriş & Kayıt'
  },
  {
    src: '/projects/moodiary/moodiary-2-signup.PNG',
    alt: 'Moodiary - Kayıt ekranı',
    caption: 'E-posta ile hızlı ve sade kayıt.',
    section: 'Giriş & Kayıt'
  },
  {
    src: '/projects/moodiary/moodiary-9-main.PNG',
    alt: 'Moodiary - Ana sayfa',
    caption: 'Günlük mood kartları ile ana akış.',
    section: 'Günlük Akışı'
  },
  {
    src: '/projects/moodiary/moodiary-7-new-entry.PNG',
    alt: 'Moodiary - Yeni mood girişi',
    caption: 'Mood seçimi, not ekleme ve kaydetme.',
    section: 'Günlük Akışı'
  },
  {
    src: '/projects/moodiary/moodiary-3-stats-chart.PNG',
    alt: 'Moodiary - Grafik istatistikleri',
    caption: 'Duygu değişimini çizgi grafikle takip et.',
    section: 'İstatistikler'
  },
  {
    src: '/projects/moodiary/moodiary-4-stats-calendar.PNG',
    alt: 'Moodiary - Takvim görünümü',
    caption: 'Hangi gün nasıl hissettiğini takvim üzerinden gör.',
    section: 'İstatistikler'
  },
  {
    src: '/projects/moodiary/moodiary-5-profile.PNG',
    alt: 'Moodiary - Profil ekranı',
    caption: 'Bildirim ve hesap ayarlarını yönet.',
    section: 'Profil'
  },
  {
    src: '/projects/moodiary/moodiary-6-goals.PNG',
    alt: 'Moodiary - Hedefler ekranı',
    caption: 'Duygusal hedefler belirle, ilerlemeni takip et.',
    section: 'Hedefler'
  }
]

export default function Moodiary() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentImage = images[currentIndex]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  // Klavye ile ilerleme (← →)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <Head>
        <title>Moodiary • Proje Detayı | Dilber Şah</title>
        <meta
          name="description"
          content="Moodiary, ruh halini kaydetmeni, hedefler belirlemeni ve istatistiklerle kendini analiz etmeni sağlayan modern bir iOS mood tracking uygulamasıdır."
        />
      </Head>

      <section className={styles.detail}>
        <div className={styles.inner}>
          {/* SOL: GÖRSEL GALERİSİ */}
          <div className={styles.gallery}>
            <div className={styles.deviceWrapper}>
              <div className={styles.deviceFrame}>
                <div className={styles.deviceNotch} />
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className={styles.image}
                />

                <button
                  type="button"
                  className={`${styles.navButton} ${styles.navLeft}`}
                  onClick={handlePrev}
                  aria-label="Önceki ekran"
                >
                  <FaChevronLeft />
                </button>

                <button
                  type="button"
                  className={`${styles.navButton} ${styles.navRight}`}
                  onClick={handleNext}
                  aria-label="Sonraki ekran"
                >
                  <FaChevronRight />
                </button>

                <div className={styles.imageOverlayGlow} />
              </div>

              <div className={styles.deviceShadow} />
            </div>

            <p className={styles.caption}>
              <span className={styles.counter}>
                {currentIndex + 1}/{images.length}
              </span>
              <span className={styles.sectionBadge}>
                {currentImage.section}
              </span>
              <span className={styles.captionText}>{currentImage.caption}</span>
            </p>

            <div className={styles.dots}>
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.dot} ${
                    index === currentIndex ? styles.dotActive : ''
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Ekran ${index + 1}`}
                />
              ))}
            </div>

            <p className={styles.hint}>
              Görseller arasında geçiş yapmak için{' '}
              <span className={styles.keyHint}>←</span> /{' '}
              <span className={styles.keyHint}>→</span> tuşlarını veya ok
              butonlarını kullan.
            </p>
          </div>

          {/* SAĞ: METİN / BİLGİ */}
          <div className={styles.info}>
            <Link href="/#projects" className={styles.backLink}>
              <FaArrowLeft />
              <span>Projelerime geri dön</span>
            </Link>

            <div className={styles.pill}>
              Case Study • iOS Mood Tracking Uygulaması
            </div>

            <h1 className={styles.title}>Moodiary</h1>
            <p className={styles.subtitle}>
              Günlük ruh halini kaydet, istatistikleri takip et ve kendini
              daha iyi tanımana yardımcı olan{' '}
              <span className={styles.highlightInline}>kişisel bir duygu günlüğü</span>.
            </p>


            <div className={styles.chipsRow}>
              <span className={styles.chip}>iOS</span>
              <span className={styles.chip}>SwiftUI</span>
              <span className={styles.chip}>Firebase</span>
              <span className={styles.chip}>MVVM</span>
            </div>

            <p className={styles.description}>
              Moodiary; ruh halini rahatça kaydedebileceğin, duygusal
              dalgalanmalarını grafik ve takvim istatistikleriyle
              görüntüleyebileceğin modern bir iOS mood tracking uygulaması.
              Kullanıcılar günlük mood girişleri oluşturup not ekleyebiliyor,
              hedefler belirleyebiliyor ve zaman içindeki değişimi
              görselleştirebiliyor. Amaç, kişinin kendi duygusal pattern’lerini
              fark etmesini ve iyi olma halini bilinçli şekilde takip etmesini
              kolaylaştırmak.
            </p>

            <h2 className={styles.sectionTitle}>Öne çıkan özellikler</h2>
            <ul className={styles.featureList}>
              <li>Günlük mood kaydı, not ekleme ve mood sınıflandırma</li>
              <li>Grafik ve takvim tabanlı gelişmiş istatistik ekranı</li>
              <li>Firebase Authentication ile güvenli giriş/kayıt sistemi</li>
              <li>Firestore ile gerçek zamanlı veri senkronizasyonu</li>
              <li>Profil sayfasından bildirim ve hesap ayarları yönetimi</li>
              <li>Modern SwiftUI arayüzü ve MVVM mimarisi</li>
            </ul>

            <h2 className={styles.sectionTitle}>Kullanıcı akışı</h2>
            <div className={styles.flowRow}>
              <div className={styles.flowStep}>
                <span className={styles.flowBullet}>1</span>
                <p>Giriş / kayıt ile kişisel hesabın oluşturulur.</p>
              </div>
              <div className={styles.flowStep}>
                <span className={styles.flowBullet}>2</span>
                <p>Her gün mood ve kısa not ekleyerek günlüğünü doldurursun.</p>
              </div>
              <div className={styles.flowStep}>
                <span className={styles.flowBullet}>3</span>
                <p>
                  Grafikleri ve takvimi kullanarak duygusal trendlerini analiz
                  edersin.
                </p>
              </div>
            </div>

            <h2 className={styles.sectionTitle}>Kullanılan teknolojiler</h2>
            <div className={styles.techGrid}>
              <span className={styles.techItem}>Swift</span>
              <span className={styles.techItem}>SwiftUI</span>
              <span className={styles.techItem}>Firebase Auth</span>
              <span className={styles.techItem}>Cloud Firestore</span>
              <span className={styles.techItem}>Combine</span>
              <span className={styles.techItem}>MVVM</span>
            </div>

            <div className={styles.actions}>
              <a
                href="https://github.com/sahdilber" // buraya istersen direkt Moodiary repo linkini koy
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.primaryButton}`}
              >
                <FaGithub />
                <span>GitHub’da projeyi gör</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}