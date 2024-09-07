import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Fil Pharma - İletişim</title>
        <meta name="description" content="Fil Pharma ile iletişime geçmek için iletişim formunu doldurun." />
      </Helmet>
      <div className="relative bg-gradient-to-r from-green-200 via-green-300 to-green-400 py-16 text-center rounded-lg mx-auto max-w-4xl shadow-xl mb-16 overflow-hidden mt-16">
        {/* Dağınık üçgenler */}
        <div className="absolute top-[10px] left-[5%] w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-green-300"></div>
        <div className="absolute top-[5%] right-[5%] w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-green-400"></div>
        <div className="absolute bottom-[5px] left-[15%] w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-green-500"></div>
        <div className="absolute bottom-[0px] right-[20%] w-0 h-0 border-r-[20px] border-r-transparent border-t-[30px] border-t-green-600"></div>
        <div className="absolute top-[5%] left-[45%] w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-green-700"></div>
        <div className="absolute top-[35%] left-[10%] w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-green-800"></div>
        <div className="absolute bottom-[15%] right-[10%] w-0 h-0 border-r-[20px] border-r-transparent border-t-[20px] border-t-green-900"></div>

        {/* Ana içerik */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">İletişim</h1>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <p className="text-base sm:text-lg text-gray-700 text-center mb-4">
              Bizimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz.
            </p>
            <div className="relative overflow-hidden" style={{ paddingTop: '85%' }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScwaTIldNaVf48Jh0VLpyTUUIb9ntAlKjaWmeNd5XbgeyTFdQ/viewform?embedded=true"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="İletişim Formu"
              >
                Yükleniyor…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
