import React, { useState } from 'react';

const ProductInfo = () => {
  const [activeTab, setActiveTab] = useState('içerik');

  const tabs = {
    içerik: [
      'Vitamin D3',
      'Magnezyum Oksit',
      'Potasyum Klorür',
    ],
    faydalar: [
      'Eklem sağlığını destekler',
      'Kemik yoğunluğunu artırır',
      'Kas fonksiyonlarını iyileştirir',
    ],
    kullanım: [
      'Günde 1 tablet',
      'Yemeklerden sonra alınız',
      'Bol su ile tüketiniz',
    ],
  };

  return (
    <div className="bg-gradient-to-br from-purple-400 to-indigo-600 p-8 rounded-xl shadow-2xl max-w-2xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Magnimore® Pro</h2>
      
      <div className="flex justify-center mb-6">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full mr-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab ? 'bg-white text-indigo-600' : 'bg-indigo-700 text-white hover:bg-indigo-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 mb-6">
        <p className="text-white text-center italic">
          Bu alan ürün resmi veya detaylı bilgiler için ayrılmıştır. 
          Tasarım, ürün görseline göre güncellenecektir.
        </p>
      </div>

      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6">
        <ul className="space-y-2">
          {tabs[activeTab].map((item, index) => (
            <li
              key={index}
              className="text-white flex items-center opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <svg className="w-5 h-5 mr-2 text-yellow-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button
        className="mt-8 w-full bg-yellow-400 text-indigo-900 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105"
      >
        Şimdi Satın Al
      </button>
    </div>
  );
};

export default ProductInfo;
