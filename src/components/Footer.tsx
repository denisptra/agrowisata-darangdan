import React from 'react';
import { MessageCircle, Instagram, MapPin, Clock } from 'lucide-react';
import logo from '../images/logo-agrowisata.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} className='w-10' alt="" />
              <h3 className="text-xl font-bold font-poppins">Agrowisata Darangdan</h3>
            </div>
            <p className="text-gray-400 font-nunito text-justify">
              Tempat wisata edukasi pertanian yang mengedepankan nilai-nilai edukatif,
              natural, dan kekeluargaan di Purwakarta.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">Navigasi</h4>
            <ul className="space-y-2 font-nunito">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#88B04B] transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#packages" className="text-gray-400 hover:text-[#88B04B] transition-colors">
                  Paket & Harga
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-[#88B04B] transition-colors">
                  Edukasi Pertanian
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-[#88B04B] transition-colors">
                  Galeri
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">Kontak</h4>
            <div className="space-y-3 font-nunito">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#88B04B]" />
                <span className="text-gray-400">Darangdan, Purwakarta</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#88B04B]" />
                <span className="text-gray-400">09.00 - 16.00 WIB</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-[#88B04B]" />
                <span className="text-gray-400">+62 812-1879-5266</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">Media Sosial</h4>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/81218795266?text=Halo%20Agrowisata%20Darangdan%2C%20saya%20ingin%20reservasi%20paket%20$"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/agrowisatadarangdan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@agrowisata.darangdan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black p-3 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                {/* TikTok SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="h-5 w-5"
                >
                  <path d="M12.75 2h2.25a.75.75 0 0 1 .75.75v2.25a3.75 3.75 0 0 0 3.75 3.75h1.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-1.5a6 6 0 0 1-3.75-1.25v6.25a4.75 4.75 0 1 1-4.75-4.75.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75 1.75 1.75 0 1 0 1.75 1.75V2.75A.75.75 0 0 1 12.75 2z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm font-nunito">
              Follow media sosial kami untuk update terbaru!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-nunito">
            © 2025 Agrowisata Darangdan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;