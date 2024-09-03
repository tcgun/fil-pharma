import React from 'react';

const Contact = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-16 text-center rounded-lg mx-auto max-w-4xl shadow-xl mb-16 overflow-hidden mt-16">
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
        <h1 className="text-3xl font-bold text-gray-800 mb-8">İletişim</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 text-center mb-4">
            Bizimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz.
          </p>
          <form className="max-w-3xl mx-auto mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                  İsim
                </label>
                <input
                  className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:border-transparent"
                  id="name"
                  type="text"
                  placeholder="İsminizi girin"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                  E-posta
                </label>
                <input
                  className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:border-transparent"
                  id="email"
                  type="email"
                  placeholder="E-posta adresinizi girin"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                Mesaj
              </label>
              <textarea
                className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:border-transparent"
                id="message"
                rows="6"
                placeholder="Mesajınızı yazın"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-[#1d4ed8] hover:bg-[#3a86d1] text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                type="button"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
