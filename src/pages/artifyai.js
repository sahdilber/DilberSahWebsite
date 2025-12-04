// pages/artifyai.js
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/ProjectDetail.module.css'
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa'

const images = [
  {
    src: '/projects/artifyai/artifyai-1-welcome.png',
    alt: 'ArtifyAI hoş geldiniz ekranı',
    caption: 'Kullanıcıyı karşılayan giriş ve kısa açıklama.',
    section: 'Giriş'
  },
  {
    src: '/projects/artifyai/artifyai-2-photo-select.png',
    alt: 'ArtifyAI fotoğraf ve sanatçı seçimi',
    caption: 'Galeriden fotoğraf ve sanatçı stilinin seçildiği ekran.',
    section: 'Fotoğraf & Sanatçı Seçimi'
  },
  {
    src: '/projects/artifyai/artifyai-3-before-after-picasso.png',
    alt: 'ArtifyAI önce/sonra – Picasso stili',
    caption: 'Picasso stilinde önce/sonra karşılaştırma görünümü.',
    section: 'Önce / Sonra'
  },
  {
    src: '/projects/artifyai/artifyai-4-before-after-kandinsky.png',
    alt: 'ArtifyAI önce/sonra – Kandinsky stili',
    caption: 'Kandinsky stilinde dönüştürülmüş fotoğraf.',
    section: 'Önce / Sonra'
  }
]

export default function ArtifyAIPage() {
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

  // Klavye ile gezinme (← →)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <Head>
        <title>ArtifyAI • Proje Detayı | Dilber Şah</title>
        <meta
          name="description"
          content="ArtifyAI, fotoğrafları Van Gogh, Picasso ve Kandinsky gibi sanatçıların stiline dönüştüren, CoreML tabanlı bir iOS uygulamasıdır."
        />
      </Head>

      <section className={styles.detail}>
        <div className={styles.inner}>
          {/* SOL: iPhone frame içinde carousel */}
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
              <span className={styles.sectionBadge}>{currentImage.section}</span>
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

          {/* SAĞ: Case study metin alanı */}
          <div className={styles.info}>
            <Link href="/#projects" className={styles.backLink}>
              <FaArrowLeft />
              <span>Projelerime geri dön</span>
            </Link>

            <div className={styles.pill}>
              Case Study • AI Art Photo Editor
            </div>

            <h1 className={styles.title}>ArtifyAI</h1>
            <p className={styles.subtitle}>
              Fotoğraflarını Van Gogh, Picasso ve Kandinsky gibi sanatçıların
              fırça darbeleriyle yeniden yorumlayan,{' '}
              <span className={styles.highlightInline}>
                CoreML tabanlı sanat filtresi
              </span>{' '}
              iOS uygulaması.
            </p>

            <div className={styles.chipsRow}>
              <span className={styles.chip}>iOS</span>
              <span className={styles.chip}>SwiftUI</span>
              <span className={styles.chip}>CoreML</span>
              <span className={styles.chip}>Style Transfer</span>
            </div>

            <h2 className={styles.sectionTitle}>Proje özeti</h2>
            <p className={styles.description}>
              ArtifyAI, style transfer tekniğini kullanarak kullanıcıların
              fotoğraflarını ünlü ressamların stilleriyle yeniden
              şekillendiriyor. Akış; fotoğraf seçimi, sanatçı seçimi ve
              dönüştürme adımlarını minimum karmaşıklıkla tek ekranda
              topluyor. Gradient arkaplan, canlı butonlar ve emoji destekli
              etiketler ile uygulama hem eğlenceli hem de anlaşılır bir
              deneyim sunuyor. Önce/sonra görünümü sayesinde kullanıcılar
              dönüşümün etkisini anında görebiliyor.
            </p>

            <h2 className={styles.sectionTitle}>Öne çıkan özellikler</h2>
            <ul className={styles.featureList}>
              <li>
                Tek dokunuşla fotoğrafı Van Gogh, Picasso veya Kandinsky
                stiline dönüştürme.
              </li>
              <li>
                Önce/sonra karşılaştırma görünümü ile dönüşümü anında
                kıyaslama.
              </li>
              <li>
                Kullanıcıyı yormayan; fotoğraf seç → sanatçı seç → dönüştür
                akışı.
              </li>
              <li>
                Gradient arka plan ve ikonlarla desteklenmiş modern SwiftUI
                arayüzü.
              </li>
            </ul>

            <h2 className={styles.sectionTitle}>Kullanıcı akışı</h2>
            <div className={styles.flowRow}>
              <div className={styles.flowStep}>
                <span className={styles.flowBullet}>1</span>
                <p>Galeriden bir fotoğraf seçilir.</p>
              </div>
              <div className={styles.flowStep}>
                <span className={styles.flowBullet}>2</span>
                <p>
                  Van Gogh, Picasso veya Kandinsky gibi sanatçı stillerinden
                  biri seçilir.
                </p>
              </div>
              <div className={styles.flowStep}>
                <span className={styles.flowBullet}>3</span>
                <p>
                  CoreML modeli fotoğrafı dönüştürür, kullanıcı önce/sonra
                  görünümüyle sonucu kaydeder.
                </p>
              </div>
            </div>

            <h2 className={styles.sectionTitle}>Kullanılan teknolojiler</h2>
            <div className={styles.techGrid}>
              <span className={styles.techItem}>Swift</span>
              <span className={styles.techItem}>SwiftUI</span>
              <span className={styles.techItem}>CoreML</span>
              <span className={styles.techItem}>Vision</span>
              <span className={styles.techItem}>iOS</span>
            </div>

            <div className={styles.actions}>
              <a
                href="https://github.com/sahdilber/ArtifyAI-"
                className={`${styles.button} ${styles.primaryButton}`}
                target="_blank"
                rel="noopener noreferrer"
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