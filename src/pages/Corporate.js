import React from 'react';

const Corporate = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-16 text-center rounded-lg mx-auto max-w-4xl shadow-xl mb-16 overflow-hidden mt-16">
      {/* Dağınık üçgenler */}
      <div className="absolute top-[15px] left-[5%] w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-blue-300"></div>
      <div className="absolute top-[5%] right-[5%] w-0 h-0 border-r-[30px] border-r-transparent border-b-[30px] border-b-blue-400"></div>
      <div className="absolute bottom-[5px] left-[20%] w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-blue-500"></div>
      <div className="absolute bottom-[0px] right-[29%] w-0 h-0 border-r-[30px] border-r-transparent border-t-[40px] border-t-blue-600"></div>
      <div className="absolute top-[3%] left-[55%] w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-blue-700"></div>
      <div className="absolute top-[43%] left-[8%] w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-blue-800"></div>
      <div className="absolute bottom-[20%] right-[10%] w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-blue-900"></div>

      {/* Ana içerik */}
      <div className="relative z-10 px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Hakkımızda</h1>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <p className="mb-4 text-lg text-gray-700">
            <span className="font-semibold text-blue-600">2005 yılında kurulan Fil Pharma,</span> medikal sağlık sektöründe <span className="font-semibold">yenilikçi</span> ve <span className="font-semibold">güvenilir</span> bir firma olarak hizmet vermektedir. İthalat ve ihracat alanındaki engin tecrübemizle, sağlık ürünleri üretimi ve satışı konusunda <span className="font-semibold">uluslararası standartlarda kalite</span> sunmaktayız.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Fil Pharma olarak, amacımız sağlık alanında <span className="font-semibold">en iyi çözümleri sunmak</span> ve bu doğrultuda <span className="font-semibold">doğal ve etkili ürünler geliştirmek</span>tir. Sektördeki uzmanlığımız, 6MP, ISO, HACCP ve Helal sertifikalarıyla desteklenen gıda takviyesi ürünlerimizin yüksek standartlarda üretildiğini garanti ederiz. Ürünlerimiz, etkinliği kanıtlanmış hammaddeler kullanılarak formüle edilmiş olup, tüm yaş gruplarına hitap eden, tüketici ihtiyaçlarına yönelik içeriklerle zenginleştirilmiştir.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Her bir ürünümüz, <span className="font-semibold">kalite ve etik değerlerimize sıkı sıkıya bağlı</span> kalınarak üretilmektedir. Müşterilerimize, <span className="font-semibold">doğal ve yüksek kalitede ürünler</span> sunarak sağlık ve yaşam kalitelerini artırmayı hedefliyoruz. Sağlık alanındaki misyonumuz, insan sağlığını ön planda tutarak, güvenilir ve etkili çözümler sunmak üzerine kuruludur.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <span className="font-semibold">Güvenilirliğimiz, kalite anlayışımız ve müşteri odaklı yaklaşımımızla</span> sağlık alanında fark yaratmaya devam ediyoruz. Fil Pharma ile sağlığınızda <span className="font-semibold">güvenilir bir partnerle yol almanın ayrıcalığını yaşayın</span>.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Vizyon</h2>
            <p className="text-lg text-gray-700 text-center">
              Sağlık sektöründe yenilikçi ve güvenilir çözümler sunarak, global ölçekte tanınan ve tercih edilen bir marka olmak.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Misyon</h2>
            <p className="text-lg text-gray-700 text-center">
              Doğal ve yüksek kaliteli ürünlerle insan sağlığını iyileştirirken, etik değerlere ve sürdürülebilirliğe öncelik vermek.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
