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
    <section id="packages" className="py-8 px-4 md:py-16 md:px-8 bg-white">
      <div className="container mx-auto px-2 md:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#88B04B] mb-3 md:mb-4 font-poppins">
            Paket & Harga
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto font-nunito text-base md:text-lg">
            Pilih paket yang sesuai dengan kebutuhan kunjungan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                pkg.popular ? 'ring-4 ring-[#FFCB05] ring-opacity-50' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[#FFCB05] text-white px-3 py-1 md:px-4 md:py-2 rounded-bl-lg">
                  <span className="text-xs md:text-sm font-semibold font-nunito">Paling Populer</span>
                </div>
              )}

              <div className={`${pkg.color} p-4 md:p-6 text-white`}>
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <pkg.icon className="h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 font-poppins">{pkg.title}</h3>
                <p className="text-lg md:text-2xl font-bold font-nunito">{pkg.price}</p>
              </div>

              <div className="p-4 md:p-6">
                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {pkg.facilities.map((facility, idx) => (
                    <li key={idx} className="flex items-center space-x-2 md:space-x-3">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-[#88B04B] flex-shrink-0" />
                      <span className="text-gray-700 font-nunito text-sm md:text-base">{facility}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/81218795266?text=Halo%20Agrowisata%20Darangdan%2C%20saya%20ingin%20reservasi%20paket%20."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#88B04B] text-white py-2 md:py-3 rounded-full hover:bg-[#7a9e42] transition-colors duration-300 flex items-center justify-center space-x-2 font-nunito font-semibold text-sm md:text-base"
                >
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                  <span>Reservasi via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <div className="bg-gradient-to-r from-[#88B04B] to-[#FFCB05] p-5 md:p-8 rounded-2xl text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 font-poppins">Butuh Paket Khusus?</h3>
            <p className="text-base md:text-lg mb-4 md:mb-6 font-nunito">
              Hubungi kami untuk paket kustomisasi sesuai kebutuhan grup Anda
            </p>
            <a
              href="https://wa.me/81218795266?text=Halo%20Agrowisata%20Darangdan%2C%20saya%20ingin%20konsultasi%20paket%20khusus."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#88B04B] px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 font-nunito text-sm md:text-base"
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
