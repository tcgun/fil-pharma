import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Services from '../components/Services';  // Hizmet Kartları
import CallToAction from '../components/CallToAction';  // Dikkat Çekici Mesaj
import ProductInfo from '../components/ProductInfo'; // Ürün Bilgileri
import ExtraInfo from '../components/ExtraInfo'; // Ürün Bilgileri

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fil Pharma - Ana Sayfa</title>
        <meta name="description" content="Fil Pharma Medikal Ürünler Sanayi ve Dış Tic. Ltd. Şti'nin ana sayfası. Sağlık sektöründe yenilikçi ve güvenilir çözümler sunuyoruz." />
        <meta name="keywords" content="Fil Pharma, medikal ürünler, sağlık, tıbbi ürünler, doğal ürünler" />
        <meta property="og:title" content="Fil Pharma - Ana Sayfa" />
        <meta property="og:description" content="Fil Pharma Medikal Ürünler Sanayi ve Dış Tic. Ltd. Şti'nin ana sayfası. Sağlık sektöründe yenilikçi ve güvenilir çözümler sunuyoruz." />
        <meta property="og:image" content="%PUBLIC_URL%/logo.png" />
        <meta property="og:url" content="https://fil-pharma.vercel.app/anasayfa" />
      </Helmet>
      <Hero />
      <ProductInfo /> {/* Ürün Bilgileri Bölümü */}
      <ExtraInfo /> {/* Ürün Bilgileri Bölümü */}
      <Info />
      <Services /> {/* Hizmet Kartları Bölümü */}
      <CallToAction /> {/* Dikkat Çekici Mesaj Bölümü */}
    </div>
  );
};

export default Home;
