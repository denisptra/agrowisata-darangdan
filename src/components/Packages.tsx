import React from 'react';
import { Check, MessageCircle, Users, GraduationCap, UsersRound } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      title: "Edukasi Pelajar",
      icon: Users,
      price: "Minimal 20 Orang",
      facilities: ["Budidaya Pertanian", "Tour Kebun", "Presentasi", "Juice", "Wisata Petik Markisa/Salak"],
      color: "bg-[#88B04B]",
      popular: false
    },
    {
      title: "Paket Sekolah / Study Tour",
      icon: GraduationCap,
      price: "Minimal 20 orang",
      facilities: ["Wisata Petik Buah", "Taman Kelinci, Kambing",  "Welcome Drink Lemon Tea", "Tangkap Ikan", "Tanam Padi di Sawah"],
      color: "bg-[#FFCB05]",
      popular: true
    },
    {
      title: "Edukasi Instansi",
      icon: UsersRound,
      price: "Minimal 20 orang",
      facilities: ["Wisata Petik Salak/Markisa", "Juice", "Presentasi Agrowisata" , "Lunch Buffe", "Juice", "Hall"],
      color: "bg-[#88B04B]",
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-16 px-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#88B04B] mb-4 font-poppins">
            Paket & Harga
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-nunito text-lg">
            Pilih paket yang sesuai dengan kebutuhan kunjungan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                pkg.popular ? 'ring-4 ring-[#FFCB05] ring-opacity-50' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[#FFCB05] text-white px-4 py-2 rounded-bl-lg">
                  <span className="text-sm font-semibold font-nunito">Paling Populer</span>
                </div>
              )}

              <div className={`${pkg.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <pkg.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-poppins">{pkg.title}</h3>
                <p className="text-2xl font-bold font-nunito">{pkg.price}</p>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {pkg.facilities.map((facility, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-[#88B04B] flex-shrink-0" />
                      <span className="text-gray-700 font-nunito">{facility}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/81218795266?text=Halo%20Agrowisata%20Darangdan%2C%20saya%20ingin%20reservasi%20paket%20."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#88B04B] text-white py-3 rounded-full hover:bg-[#7a9e42] transition-colors duration-300 flex items-center justify-center space-x-2 font-nunito font-semibold"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Reservasi via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#88B04B] to-[#FFCB05] p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4 font-poppins">Butuh Paket Khusus?</h3>
            <p className="text-lg mb-6 font-nunito">
              Hubungi kami untuk paket kustomisasi sesuai kebutuhan grup Anda
            </p>
            <a
              href="https://wa.me/81218795266?text=Halo%20Agrowisata%20Darangdan%2C%20saya%20ingin%20konsultasi%20paket%20khusus."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#88B04B] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 font-nunito"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;