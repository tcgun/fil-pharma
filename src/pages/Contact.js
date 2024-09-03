import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Form alanlarını kontrol eder ve butonu aktif/pasif yapar
  const checkFormValidity = () => {
    if (fullName && phone && message) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  // Form verilerini göndermek için basit bir işlev
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderim işlemleri burada yapılır
    // Örneğin, bir API'ye istek atabilirsiniz
    alert('Form gönderildi!');
  };

  return (
    <div>
      <Helmet>
        <title>Fil Pharma - İletişim</title>
        <meta name="description" content="Fil Pharma ile iletişime geçmek için iletişim formunu doldurun." />
      </Helmet>
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
            <form className="max-w-3xl mx-auto mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fullName">
                  İsim ve Soyisim
                </label>
                <input
                  className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:border-transparent"
                  id="fullName"
                  type="text"
                  placeholder="İsim ve soyisminizi giriniz"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    checkFormValidity();
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
                  Telefon Numarası
                </label>
                <input
                  className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:border-transparent"
                  id="phone"
                  type="text"
                  placeholder="Telefon numaranızı giriniz"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    checkFormValidity();
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                  E-posta (Opsiyonel)
                </label>
                <input
                  className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:border-transparent"
                  id="email"
                  type="email"
                  placeholder="E-posta adresinizi giriniz (isteğe bağlı)"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                  Mesaj
                </label>
                <textarea
                  className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:border-transparent"
                  id="message"
                  rows="6"
                  placeholder="Mesajınızı yazınız"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    checkFormValidity();
                  }}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className={`bg-[#1d4ed8] hover:bg-[#3a86d1] text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  type="submit"
                  disabled={isButtonDisabled}
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
