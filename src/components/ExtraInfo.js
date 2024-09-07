import React from 'react';
import { Link } from 'react-router-dom';

const ExtraInfo = () => {
  return (
    <div className="flex justify-center items-center py-16 bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
        {/* Sol bölüm */}
        <div className="bg-blue-100 p-8 flex flex-col justify-center items-center md:w-1/2">
          <img src="path_to_your_image" alt="Ürün" className="w-full max-w-xs mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Bu alan ürün resmi veya detaylı bilgiler için ayrılmıştır. </h2>
          <p className="text-gray-700 text-center">
            Eklemler, kemikler ve romatizma ile ilgili sağlık sorunlarınız için onaylı ve etkili çözümler sunuyoruz.
          </p>
        </div>
        {/* Sağ bölüm */}
        <div className="p-8 md:w-1/2">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Tasarım, ürün görseline göre güncellenecektir.

</h1>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Vitamin D3</li>
            <li>Magnezyum Oksit</li>
            <li>Potasyum Klorür</li>
            <li>Sağlık yararları ve dozaj talimatları</li>
          </ul>
          <div className="flex justify-center">
            <Link to="/urunler">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span>Ürünlerimizi İnceleyin</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraInfo;
