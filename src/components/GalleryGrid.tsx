import { useState, useEffect } from "react";

interface LightboxProps {
  images: { src: string; alt: string; title: string; desc: string }[];
}

export default function GalleryGrid({ images }: LightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedIndex !== null) {
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (e.key === "Escape") setSelectedIndex(null);
        if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
        if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const closeModal = () => setSelectedIndex(null);

  return (
    <>
      <div className="bento-grid">
        <div className="bento-card intro-card">
          <h2>Nuestros Servicios</h2>
          <p>
            En <strong>SIMAUSTRAL</strong> somos especialistas en el mantenimiento y 
            reparación de balsas de salvamento para la industria naval y pesquera. 
            Contamos con años de experiencia garantizando la seguridad de las tripulaciones 
            en las aguas del sur de Chile.
          </p>
          <div className="features">
            <div className="feature">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span>Seguridad Certificada</span>
            </div>
            <div className="feature">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              <span>Mantención Profesional</span>
            </div>
            <div className="feature">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Respuesta Rápida</span>
            </div>
          </div>
        </div>

        {images.map((img, index) => (
          <div
            key={index}
            className={`bento-card gallery-card ${index === 0 ? "large" : ""}`}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="image-wrapper">
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="overlay">
                <span className="zoom-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </span>
              </div>
            </div>
            <div className="card-content">
              <h3>{img.title}</h3>
              <p>{img.desc}</p>
            </div>
          </div>
        ))}

        <div className="bento-card stats-card">
          <div className="stat">
            <span className="stat-number" data-target="15">0</span>
            <span className="stat-label">Años de experiencia</span>
          </div>
          <div className="stat">
            <span className="stat-number" data-target="500">0</span>
            <span className="stat-label">Balsas mantenidas</span>
          </div>
          <div className="stat">
            <span className="stat-number" data-target="100">0</span>
            <span className="stat-label">% Compromiso</span>
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        <div className={`lightbox ${isVisible ? "active" : ""}`} onClick={closeModal}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeModal}>&times;</button>
            <img 
              src={images[selectedIndex].src} 
              alt={images[selectedIndex].alt}
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <h3>{images[selectedIndex].title}</h3>
              <p>{images[selectedIndex].desc}</p>
            </div>
            <div className="lightbox-nav">
              <button onClick={(e) => { e.stopPropagation(); setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0)); }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <span>{selectedIndex + 1} / {images.length}</span>
              <button onClick={(e) => { e.stopPropagation(); setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0)); }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
