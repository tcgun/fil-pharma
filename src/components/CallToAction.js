import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-16 text-center rounded-lg mx-auto max-w-4xl shadow-xl mb-16 overflow-hidden">
      {/* Dağınık üçgenler */}
      <div className="absolute top-[15px] left-[5%] w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-blue-300"></div>
      <div className="absolute top-[5%] right-[5%] w-0 h-0 border-r-[30px] border-r-transparent border-b-[30px] border-b-blue-400"></div>
      <div className="absolute bottom-[5px] left-[20%] w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-blue-500"></div>
      <div className="absolute bottom-[0px] right-[29%] w-0 h-0 border-r-[30px] border-r-transparent border-t-[40px] border-t-blue-600"></div>
      <div className="absolute top-[5%] left-[55%] w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-blue-700"></div>
      <div className="absolute top-[43%] left-[8%] w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-blue-800"></div>
      <div className="absolute bottom-[20%] right-[10%] w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-blue-900"></div>

      {/* Ana içerik */}
      <div className="relative z-10 px-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 leading-tight">
          Ürünlerimiz hakkında bilgi almak ve işbirliği fırsatlarını keşfetmek için bizimle iletişime geçin.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Size nasıl yardımcı olabileceğimiz konusunda detaylı bilgi almak ve profesyonel destek için bizimle iletişime geçin.
        </p>
        <div className="flex justify-center mb-6">
          <Link to="/iletisim">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-green-700 transition-colors duration-300 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span>İletişime Geçin</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
