import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="navbar-container">
            {/* Üst Kısım */}
            <div className="navbar-top">
                <div className="navbar-social">
                    <Link to="/anasayfa" className="navbar-home-link">
                        <div className="home-link-content">
                            <span className="home-text">Ana Sayfa</span>
                            <FontAwesomeIcon icon={faHome} />
                        </div>
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
                <Link to="/anasayfa" className="navbar-logo">
                    <img src={logo} alt="Fil Pharma Logo" />
                    <span className="navbar-logo-text">Fil Pharma</span>
                </Link>
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
