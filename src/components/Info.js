import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <div className="relative bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 py-16 text-center rounded-lg mx-auto max-w-4xl shadow-xl mb-16 overflow-hidden mt-16">
      {/* Dağınık üçgenler */}
      <div className="absolute top-[10px] left-[5%] w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-yellow-300"></div>
      <div className="absolute top-[5%] right-[5%] w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-yellow-400"></div>
      <div className="absolute bottom-[10px] left-[15%] w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-yellow-500"></div>
      <div className="absolute bottom-[10px] right-[20%] w-0 h-0 border-r-[20px] border-r-transparent border-t-[20px] border-t-yellow-600"></div>
      <div className="absolute top-[10%] left-[55%] w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-yellow-700"></div>
      <div className="absolute top-[50%] left-[10%] w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-yellow-800"></div>
      <div className="absolute bottom-[15%] right-[10%] w-0 h-0 border-r-[20px] border-r-transparent border-t-[20px] border-t-yellow-900"></div>

      {/* Ana içerik */}
      <div className="relative z-10 px-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 leading-tight">
        Tasarım, ürün görseline göre güncellenecektir.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Eklemler, kemikler ve romatizma ile ilgili sağlık sorunlarınız için onaylı ve etkili çözümler sunuyoruz. Ürünlerimiz hakkında detaylı bilgi almak ve sizin için en uygun ürünü bulmak için bizimle iletişime geçin.
        </p>
        <div className="flex justify-center mb-6">
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
  );
};

export default Info;
