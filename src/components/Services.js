import React from 'react';
import './Services.css';
import services1 from '../assets/images/services1.jpg';
import services2 from '../assets/images/services2.jpg';
import services3 from '../assets/images/services3.jpg';
import services4 from '../assets/images/services4.jpg';

const services = [
    {
        image: services1,
        title: "Hedefimiz",
        description: "Üretim kalitesi ve çalışanlarıyla ulusal ve uluslararası öncü firmalardan biri olmak.",
        hoverText: "Kaliteli üretim için sürekli çalışıyoruz."
    },
    {
        image: services2,
        title: "Bilimsel Bakış Açısı",
        description: "Dünya çapında yapılan bilimsel gelişmeleri takip ederek yenilikçi ürünler ve metodlar geliştirmek.",
        hoverText: "Bilim ve yenilikle geleceği şekillendiriyoruz."
    },
    {
        image: services3,
        title: "Kaliteli Hammadde",
        description: "Patentli ve etkin hammaddeler ile üretilen ürünler.",
        hoverText: "Doğal ve etkili hammaddelerle üretim yapıyoruz."
    },
    {
        image: services4,
        title: "Kaliteli Üretim",
        description: "GMP, ISO 22000 ve diğer kalite standartlarında üretim.",
        hoverText: "Uluslararası standartlarda güvenli üretim."
    }
];

const Services = () => {
    return (
        <div className="services-container">
            {services.map((service, index) => (
                <div key={index} className="service-card">
                    <div className="service-content" style={{ backgroundImage: `url(${service.image})` }}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                    <div className="service-hover-content">
                        <p>{service.hoverText}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
