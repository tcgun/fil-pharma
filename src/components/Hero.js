import React, { useState, useEffect } from 'react';
import './Hero.css';
import pharmaImage1 from '../assets/images/pharma1.jpg'; 
import pharmaImage2 from '../assets/images/pharma2.jpg'; 
import pharmaImage3 from '../assets/images/pharma3.jpg'; 

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [pharmaImage1, pharmaImage2, pharmaImage3];
  const texts = [
    {
      title: "Sağlığınız İçin Güvenilir Çözümler",
      description: "2005 yılında kurulan Fil Pharma, medikal sağlık sektöründe yenilikçi ve güvenilir bir firma olarak hizmet vermektedir. Ürünlerimiz, uluslararası standartlarda yüksek kalite sunarak sağlık ve yaşam kalitenizi artırmayı hedefler."
    },
    {
      title: "Yüksek Kalite ve Güven",
      description: "Fil Pharma'nın ürünleri, uluslararası standartlara uygun yüksek kalite ve güvenilirlik sunar. Her ürünümüz, sağlık ve yaşam kalitenizi artırmak için tasarlanmıştır."
    },
    {
      title: "İnovasyon ve Teknoloji",
      description: "Sürekli yenilikçi çözümler ve en son teknoloji ile sağlık sektöründeki ihtiyaçlarınıza en iyi şekilde cevap veriyoruz. Fil Pharma, sektördeki en son trendleri takip eder."
    }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="hero">
      <div className="hero-slide" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <div className="hero-text">
          <h1>{texts[currentIndex].title}</h1>
          <p>{texts[currentIndex].description}</p>
        </div>
      </div>
      <button className="slider-button prev" onClick={goToPrevSlide} aria-label="Previous Slide">‹</button>
      <button className="slider-button next" onClick={goToNextSlide} aria-label="Next Slide">›</button>
    </div>
  );
};

export default Hero;
