import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apakah cocok untuk anak-anak TK?",
      answer: "Sangat cocok, kami menyediakan aktivitas edukasi yang aman dan menyenangkan untuk anak-anak. Program kami disesuaikan dengan tingkat perkembangan anak-anak usia dini."
    },
    {
      question: "Bisa booking dadakan?",
      answer: "Bisa, selama kuota masih tersedia. Namun kami sangat menyarankan untuk booking minimal 1 hari sebelumnya untuk memastikan ketersediaan. Hubungi kami via WhatsApp untuk konfirmasi."
    },
    {
      question: "Fasilitas apa saja yang tersedia?",
      answer: "Kami menyediakan toilet bersih, mushola, area parkir luas, gazebo untuk istirahat, dan area terbuka untuk aktivitas edukasi. Semua fasilitas dirawat dengan baik untuk kenyamanan pengunjung."
    },
    {
      question: "Buka hari apa saja?",
      answer: "Kami buka setiap hari, dari pukul 08.00 sampai 16.00 WIB. Untuk kunjungan rombongan besar, sebaiknya konfirmasi terlebih dahulu untuk memastikan ketersediaan panduan."
    },
    {
      question: "Apakah boleh bawa makanan sendiri?",
      answer: "Boleh, namun kami juga menyediakan snack lokal yang bisa dibeli di lokasi. Kami juga memiliki area piknik dimana pengunjung bisa makan sambil menikmati pemandangan kebun."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50 px-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#88B04B] mb-4 font-poppins">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-nunito text-lg">
            Temukan jawaban atas pertanyaan umum tentang Agrowisata Darangdan
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#88B04B] focus:ring-opacity-50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 font-poppins">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#88B04B] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#88B04B] flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed font-nunito">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#88B04B] mb-4 font-poppins">
              Masih Ada Pertanyaan?
            </h3>
            <p className="text-gray-600 mb-6 font-nunito">
              Jangan ragu untuk menghubungi kami langsung via WhatsApp
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Agrowisata%20Darangdan%2C%20saya%20ingin%20bertanya%20tentang%20kunjungan."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#88B04B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a9e42] transition-colors duration-300 font-nunito"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;