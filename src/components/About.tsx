import React from 'react';
import { Users, GraduationCap, Heart, Leaf } from 'lucide-react';
import tentang1 from '../images/tentang-1.jpg';
import tentang2 from '../images/tentang-2.jpg';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-green-50 to-yellow-50 px-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#88B04B] mb-4 font-manrope">
            Tentang Agrowisata Darangdan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-nunito text-lg">
            Tempat wisata edukasi pertanian yang mengedepankan nilai-nilai edukatif, 
            natural, dan kekeluargaan di Purwakarta
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed font-nunito text-justify">
              Agrowisata Kebun Manggis Darangdan  merupakan destinasi wisata edukasi dan rekreasi baru yang berada di Kampung Cijolang, Desa Linggasari, Kecamatan Darangdan Kabupaten Purwakarta.  Agrowisata ini Darangdan menawarkan wisata petik buah manggis, salak, jeruk lemon, markisa, dan sayuran organik bebas pestisida.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-[#88B04B] p-3 rounded-full">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 font-manrope">Keluarga</h3>
                  <p className="text-gray-600 text-sm font-nunito">Cocok untuk semua umur</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-[#FFCB05] p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 font-manrope">Edukatif</h3>
                  <p className="text-gray-600 text-sm font-nunito">Pembelajaran langsung</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-[#88B04B] p-3 rounded-full">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 font-manrope">Kekeluargaan</h3>
                  <p className="text-gray-600 text-sm font-nunito">Suasana hangat</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-[#FFCB05] p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 font-manrope">Natural</h3>
                  <p className="text-gray-600 text-sm font-nunito">Alam yang asri</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={tentang1}
              alt="Kebun sayuran"
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img
              src={tentang2}
              alt="Pengunjung belajar"
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;