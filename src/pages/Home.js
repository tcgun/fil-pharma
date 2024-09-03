import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';  // Hizmet Kartları
import CallToAction from '../components/CallToAction';  // Dikkat Çekici Mesaj

const Home = () => {
  return (
    <div>
      <Hero />
      <Services /> {/* Hizmet Kartları Bölümü */}
      <CallToAction /> {/* Dikkat Çekici Mesaj Bölümü */}
    </div>
  );
};

export default Home;
