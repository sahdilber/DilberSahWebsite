import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/ProjectDetail.module.css'
import { FaArrowLeft, FaGithub } from 'react-icons/fa'

const images = [
  {
    src: '/projects/artifyai/artifyai-1-welcome.png',
    alt: 'ArtifyAI hoş geldiniz ekranı'
  },
  {
    src: '/projects/artifyai/artifyai-2-photo-select.png',
    alt: 'ArtifyAI fotoğraf ve sanatçı seçimi'
  },
  {
    src: '/projects/artifyai/artifyai-3-before-after-picasso.png',
    alt: 'ArtifyAI önce/sonra – Picasso stili'
  },
  {
    src: '/projects/artifyai/artifyai-4-before-after-kandinsky.png',
    alt: 'ArtifyAI önce/sonra – Kandinsky stili'
  }
]

export default function ArtifyAIPage() {
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Geri link + badge */}
        <div className={styles.backRow}>
          <Link href="/#projects" className={styles.backLink}>
            <FaArrowLeft />
            <span>Projelerime dön</span>
          </Link>

          <span className={styles.badge}>iOS · CoreML · Devam Ediyor</span>
        </div>

        {/* Başlık alanı */}
        <header className={styles.header}>
          <h1 className={styles.title}>ArtifyAI – AI Art Photo Editor</h1>
          <p className={styles.subtitle}>
            Fotoğrafları Van Gogh, Picasso ve Kandinsky gibi sanatçıların
            stiline dönüştüren, yapay zeka destekli bir iOS uygulaması.
            Kullanıcı, galeriden bir fotoğraf seçip tek dokunuşla sanat
            eserine dönüştürebiliyor.
          </p>

          <div className={styles.meta}>
            <div>
              <span className={styles.metaLabel}>Rolüm</span>
              <p className={styles.metaValue}>
                iOS Developer · UI/UX Tasarımı · CoreML entegrasyonu
              </p>
            </div>
            <div>
              <span className={styles.metaLabel}>Teknolojiler</span>
              <p className={styles.metaValue}>
                Swift · SwiftUI · CoreML · iOS
              </p>
            </div>
          </div>
        </header>

        {/* İçerik */}
        <main className={styles.content}>
          {/* Sol taraf: kapak + galeri */}
          <div className={styles.visualColumn}>
            <div className={styles.coverWrapper}>
              <img
                src="/projects/artifyai/artifyai-cover.jpeg"
                alt="ArtifyAI önce/sonra ekranı"
                className={styles.coverImage}
              />
            </div>

            <h2 className={styles.sectionHeading}>Ekran Görüntüleri</h2>
            <div className={styles.gallery}>
              {images.map((img, index) => (
                <div key={index} className={styles.thumbWrapper}>
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

          {/* Sağ taraf: metin */}
          <div className={styles.textColumn}>
            <h2 className={styles.sectionHeading}>Proje Özeti</h2>
            <p className={styles.paragraph}>
              ArtifyAI, style transfer tekniğini kullanarak kullanıcıların
              fotoğraflarını ünlü ressamların fırça darbeleriyle yeniden
              yorumlayan bir iOS uygulaması. Akış; fotoğraf seçimi, sanatçı
              seçimi ve dönüştürme adımlarını tek ekranda birleştirerek minimum
              adımda maksimum etki yaratacak şekilde tasarlandı.
            </p>

            <p className={styles.paragraph}>
              Gradient arkaplan, canlı butonlar ve emoji destekli buton
              etiketleri ile uygulama hem eğlenceli hem de anlaşılır bir
              deneyim sunuyor. Önce/sonra görünümü sayesinde kullanıcılar
              dönüşümün etkisini anında görebiliyor ve sonucu cihazına
              kaydedebiliyor.
            </p>

            <h3 className={styles.subHeading}>Çözdüğü Problem</h3>
            <ul className={styles.list}>
              <li>
                Çoğu style-transfer uygulaması karmaşık ayarlar içeriyor veya
                kullanıcının ne yapacağını anlaması zor.
              </li>
              <li>
                Kullanıcılar “tek dokunuşla” fotoğraflarını sanatsal bir
                görünüme kavuşturmak istiyor.
              </li>
            </ul>

            <h3 className={styles.subHeading}>Uyguladığım Çözümler</h3>
            <ul className={styles.list}>
              <li>
                <strong>Basit kullanıcı akışı:</strong> Fotoğraf seç → sanatçı
                seç → dönüştür → kaydet.
              </li>
              <li>
                <strong>CoreML entegrasyonu:</strong> Sanatçıların stilini
                taklit eden modelle cihaz üzerinde, offline çalışan style
                transfer.
              </li>
              <li>
                <strong>Önce/sonra görünümü:</strong> Kullanıcı dönüşümü
                eşzamanlı olarak yan yana görebiliyor.
              </li>
              <li>
                <strong>Dokunmatik odaklı UI:</strong> Büyük butonlar, net
                renk hiyerarşisi, erişilebilir tipografi.
              </li>
            </ul>

            <h3 className={styles.subHeading}>Teknik Notlar</h3>
            <ul className={styles.list}>
              <li>SwiftUI ile tamamen programatik olarak tasarlanmış ekranlar.</li>
              <li>Fotoğraf seçimi için native image picker entegrasyonu.</li>
              <li>
                CoreML modeli cihaz üzerinde çalışacak şekilde optimize edildi.
              </li>
              <li>
                Dönüştürme esnasında loading state yönetimi ve kullanıcıya geri
                bildirim sağlayan animasyonlu metinler.
              </li>
            </ul>

            <div className={styles.actions}>
              <a
                href="https://github.com/sahdilber/ArtifyAI-"
                className={`${styles.button} ${styles.buttonSecondary}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                <span>GitHub’da incele</span>
              </a>
            </div>
          </div>
        </main>
      </div>

      {/* Lightbox */}
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