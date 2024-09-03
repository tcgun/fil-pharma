import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#3a86d1] to-[#1d4ed8] text-[#f4f3f0] py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between gap-6">
                    {/* Bilgi Kısmı */}
                    <div className="flex-1 max-w-xs mb-6">
                        <h2 className="text-2xl font-bold mb-4 text-[#f4f3f0] hover:text-[#cce7e7]">
                            Fil Pharma Medikal
                        </h2>
                        <h3 className="text-xl font-semibold mb-4 text-[#f4f3f0]">
                            Ürünler Sanayi ve Dış Tic. Ltd. Şti
                        </h3>
                        <p className="mb-2 text-[#f4f3f0]">Kuzguncuk Mahallesi, Babanakkaş Sokak</p>
                        <p className="mb-2 text-[#f4f3f0]">No:26, İç Kapı No:2, Üsküdar/İstanbul</p>
                        <p className="text-[#f4f3f0] hover:underline">filpharma@filpharmamedikal.com</p>
                    </div>

                    {/* Diğer Bilgiler */}
                    <div className="flex-1 max-w-xs mb-6">
                        <h3 className="text-xl font-semibold mb-4 text-[#f4f3f0]">İletişim</h3>
                        <p className="font-semibold mb-2 text-[#f4f3f0]">Cep Telefonu:</p>
                        <p className="mb-2 text-[#f4f3f0]">0532 785 26 09</p>
                        <p className="font-semibold mb-2 text-[#f4f3f0]">Faks:</p>
                        <p className="text-[#f4f3f0]">0216 530 00 03</p>
                    </div>

                    {/* Bağlantılar */}
                    <div className="flex-1 max-w-xs mb-6">
                        <h3 className="text-xl font-semibold mb-4 text-[#f4f3f0]">Hızlı Bağlantılar</h3>
                        <ul>
                            <li className="mb-2">
                                <Link to="/urunler" className="text-[#f4f3f0] hover:underline">Ürünler</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/kurumsal" className="text-[#f4f3f0] hover:underline">Kurumsal</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-[#f4f3f0] mt-8">
                    &copy; {new Date().getFullYear()} Fil Pharma Medikal - Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
