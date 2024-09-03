import React, { useState, useEffect } from 'react';
import './Hero.css';
import pharmaImage1 from '../assets/images/pharma1.jpg'; 
import pharmaImage2 from '../assets/images/pharma2.jpg'; 
import pharmaImage3 from '../assets/images/pharma3.jpg'; 

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [pharmaImage1, pharmaImage2, pharmaImage3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Her 5 saniyede bir geçiş yap

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="hero">
      {/* Sol kısım: Metin içeriği */}
      <div className="hero-text">
        <h1>Sağlığınız İçin Güvenilir Çözümler</h1>
        <p>
          2005 yılında kurulan Fil Pharma, medikal sağlık sektöründe yenilikçi ve güvenilir bir firma olarak hizmet vermektedir. Ürünlerimiz, uluslararası standartlarda yüksek kalite sunarak sağlık ve yaşam kalitenizi artırmayı hedefler.
        </p>
      </div>

      {/* Sağ kısım: Görsel ve Slayt */}
      <div className="hero-image">
        <div className="image-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Fil Pharma ${index + 1}`}
              className="slider-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
