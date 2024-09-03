import React from 'react';

const Products = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-16 text-center rounded-lg mx-auto max-w-4xl shadow-xl mb-16 overflow-hidden mt-16">
      {/* Dağınık üçgenler */}
      <div className="absolute top-[15px] left-[5%] w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-[#1d4ed8]"></div>
      <div className="absolute top-[5%] right-[5%] w-0 h-0 border-r-[30px] border-r-transparent border-b-[30px] border-b-[#3a86d1]"></div>
      <div className="absolute bottom-[5px] left-[20%] w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-[#1d4ed8]"></div>
      <div className="absolute bottom-[0px] right-[29%] w-0 h-0 border-r-[30px] border-r-transparent border-t-[40px] border-t-[#3a86d1]"></div>
      <div className="absolute top-[5%] left-[55%] w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-[#1d4ed8]"></div>
      <div className="absolute top-[43%] left-[8%] w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-[#3a86d1]"></div>
      <div className="absolute bottom-[20%] right-[10%] w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-[#1d4ed8]"></div>

      {/* Ana içerik */}
      <div className="relative z-10 px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Ürünlerimiz</h1>
        <div className="bg-[#e0f2f1] p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Örnek ürün kartı */}
            <div className="border border-gray-300 rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/300"
                alt="Ürün Resmi"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-[#1d4ed8] mb-2">Bitkisel Ürün A</h2>
              <p className="text-gray-600">Bu ürün hakkında kısa açıklama.</p>
            </div>
            {/* Diğer ürün kartları */}
            <div className="border border-gray-300 rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/300"
                alt="Ürün Resmi"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-[#1d4ed8] mb-2">Bitkisel Ürün B</h2>
              <p className="text-gray-600">Bu ürün hakkında kısa açıklama.</p>
            </div>
            <div className="border border-gray-300 rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/300"
                alt="Ürün Resmi"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-[#1d4ed8] mb-2">Bitkisel Ürün C</h2>
              <p className="text-gray-600">Bu ürün hakkında kısa açıklama.</p>
            </div>
            {/* Diğer ürün kartları */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
