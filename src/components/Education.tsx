import { Sprout, BookOpen, Users, Award } from 'lucide-react';
import edukasi from '../images/edukasi.jpg';
import edukasi2 from '../images/edukasi2.jpg';

const Education = () => {
  const educationPoints = [
    {
      icon: Sprout,
      title: "Praktik Menanam",
      description: "Belajar langsung cara menanam berbagai jenis tanaman"
    },
    {
      icon: BookOpen,
      title: "Pengetahuan Pertanian",
      description: "Memahami siklus pertanian dan teknik budidaya"
    },
    {
      icon: Users,
      title: "Interaksi Petani",
      description: "Berinteraksi langsung dengan petani berpengalaman"
    },
    {
      icon: Award,
      title: "Sertifikat Edukasi",
      description: "Dapatkan sertifikat kunjungan edukatif"
    }
  ];

  return (
    <section id="education" className="py-10 bg-gradient-to-br from-yellow-50 to-green-50 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto px-0 md:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#88B04B] mb-3 md:mb-4 font-poppins">
            Belajar Bertani Itu Seru!
          </h2>
          <p className="text-gray-600 max-w-xl md:max-w-3xl mx-auto font-nunito text-base md:text-lg">
            Pengunjung dapat belajar cara menanam, mengenal tanaman lokal, hingga praktik langsung di kebun.
            Kami juga menyiapkan konten edukatif pertanian yang diperbarui secara berkala dan menyenangkan bagi segala usia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-16">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {educationPoints.map((point, index) => (
                <div key={index} className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-[#88B04B] p-2 md:p-3 rounded-full w-fit mb-3 md:mb-4">
                    <point.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 font-poppins text-base md:text-lg">{point.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm font-nunito">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-48 md:h-auto">
            <img
              src={edukasi}
              alt="Edukasi pertanian"
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#88B04B] mb-2 md:mb-4 font-poppins">
              Program Edukasi Kami
            </h3>
            <p className="text-gray-600 font-nunito text-sm md:text-base">
              Lihat bagaimana pengunjung belajar dan berinteraksi langsung dengan alam melalui pengalaman yang menyenangkan dan edukatif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden mb-4 md:mb-0">
              <img src={edukasi2} alt="foto-edukasi-keluarga" className="object-cover w-full h-full" />
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="bg-gray-50 p-4 md:p-6 rounded-xl">
                <h4 className="font-semibold text-[#88B04B] mb-1 md:mb-2 font-poppins text-justify text-base md:text-lg">Program Edukasi Pelajar</h4>
                <p className="text-gray-600 font-nunito text-justify text-xs md:text-base">
                  Khusus untuk rombongan pelajar, program ini mencakup wisata petik buah (salak/markisa), jus segar, presentasi budidaya pertanian, dan sesi belajar di lapangan.
                </p>
              </div>
              <div className="bg-gray-50 p-4 md:p-6 rounded-xl">
                <h4 className="font-semibold text-[#88B04B] mb-1 md:mb-2 font-poppins text-justify text-base md:text-lg">Workshop Keluarga & Outing</h4>
                <p className="text-gray-600 font-nunito text-justify text-xs md:text-base">
                  Program ini mengajak peserta untuk menanam langsung di sawah, bermain tangkap ikan, hingga mengenal tanaman dan hewan di taman interaktif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;