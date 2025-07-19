import React from 'react';
import { MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white px-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#88B04B] mb-4 font-poppins">
            Lokasi & Kontak
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-nunito text-lg">
            Kunjungi kami di lokasi yang mudah dijangkau di Purwakarta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="flex flex-col h-full bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-[#88B04B] to-[#FFCB05] flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg font-semibold font-poppins">Google Maps</p>
                <p className="font-nunito">Darangdan, Purwakarta</p>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                title="Agrowisata Darangdan Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63404.34828846994!2d107.45846534519167!3d-6.6751751889501945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e691d5e4e65e5a7%3A0x983db615ca36d692!2sKebun%20Manggis%20Darangdan!5e0!3m2!1sid!2sid!4v1752928426782!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[200px]"
              ></iframe>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#88B04B] to-[#7a9e42] p-6 rounded-2xl text-white">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-poppins">Lokasi</h3>
                <p className="font-nunito">
                  Darangdan, Purwakarta<br />
                  Jawa Barat, Indonesia
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#FFCB05] to-[#e6b304] p-6 rounded-2xl text-white">
                <Clock className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-poppins">Jam Operasional</h3>
                <p className="font-nunito">
                  Senin - Minggu, Jumat - TUTUP <br />
                  09.00 - 16.00 WIB
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
              href="https://wa.me/81218795266?text=Halo%20Agrowisata%20Darangdan%2C%20saya%20ingin%20reservasi%20paket%20$"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-green-500 text-white p-4 rounded-xl hover:bg-green-600 transition-colors duration-300"
              >
              <MessageCircle className="h-6 w-6" />
              <div>
                <h4 className="font-semibold font-poppins">WhatsApp</h4>
                <p className="font-nunito">+62 812-1879-5266</p>
              </div>
              </a>

              <a
              href="https://instagram.com/agrowisatadarangdan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
              <Instagram className="h-6 w-6" />
              <div>
                <h4 className="font-semibold font-poppins">Instagram</h4>
                <p className="font-nunito">@agrowisatadarangdan</p>
              </div>
              </a>

              <a
              href="https://www.tiktok.com/@agrowisata.darangdan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-gradient-to-r from-black to-gray-700 text-white p-4 rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all duration-300"
              >
              {/* TikTok icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="h-5 w-5"
              >
                <path d="M16.5 3a1 1 0 0 1 1 1c0 3.31 2.69 6 6 6a1 1 0 0 1 1 1v3.5a7.5 7.5 0 1 1-8.5-7.45V3a1 1 0 0 1 1-1zm1 2.08v2.42a5.5 5.5 0 1 0 5.42 5.5h-2.42a7.5 7.5 0 1 1-7.5-7.5V5.08a1 1 0 0 1 1-1z"/>
              </svg>
              <div>
                <h4 className="font-semibold font-poppins">TikTok</h4>
                <p className="font-nunito">@agrowisatadarangdan</p>
              </div>
              </a>
            </div>

            {/* Quick Reservation */}
            <div className="bg-gradient-to-r from-[#88B04B] to-[#FFCB05] p-6 rounded-2xl text-white">
              <h3 className="text-xl font-semibold mb-4 font-poppins">Reservasi Cepat</h3>
              <p className="mb-6 font-nunito">
                Klik tombol di bawah untuk langsung menghubungi kami via WhatsApp
              </p>
              <a
                href="https://wa.me/81218795266?text=Halo%20Agrowisata%20Darangdan%2C%20saya%20ingin%20reservasi%20paket%20$"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-[#88B04B] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 font-nunito"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Reservasi Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;