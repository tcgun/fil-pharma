import React, { useState } from 'react';
import './Navbar.css'; // CSS dosyasını içe aktarın
import logo from '../assets/images/logo.png'; // Logo görseli
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Doğru paket
import { Link } from 'react-router-dom';

const Navbar = () => {
    // Menü durumunu yönetmek için state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Menü açma/kapama fonksiyonu
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    // Menü öğelerine tıklanınca menüyü kapatma fonksiyonu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="navbar-container">
            {/* Üst Kısım */}
            <div className="navbar-top">
                <div className="navbar-social">
                    <Link to="/anasayfa">
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                    <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a href="https://www.instagram.com/fil.pharmamedikal/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61564862292076" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://x.com/FilPharma34" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>

            {/* Ana Navbar */}
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="Fil Pharma Logo" />
                    <span className="navbar-logo-text">Fil Pharma Medikal</span>
                </div>
                <div className="navbar-hamburger" onClick={toggleMenu}>
                    ☰
                </div>
                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/urunler" onClick={closeMenu}>Ürünler</Link>
                    <Link to="/kurumsal" onClick={closeMenu}>Kurumsal</Link>
                    <Link to="/iletisim" onClick={closeMenu}>İletişim</Link>
                    <Link to="/iletisim" className="bayimiz-olun-btn" onClick={closeMenu}>
                        Bayimiz Olun
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
