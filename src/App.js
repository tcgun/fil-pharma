import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Corporate from './pages/Corporate';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar bileşenini buraya ekleyin */}
        <Routes>
          <Route path="/" element={<Navigate replace to="/anasayfa" />} /> {/* Ana Sayfa */}
          <Route path="/anasayfa" element={<Home />} />
          <Route path="/urunler" element={<Products />} />
          <Route path="/kurumsal" element={<Corporate />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
        <Footer /> {/* Footer bileşenini buraya ekleyin */}
      </div>
    </Router>
  );
}

export default App;
