import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/logo-agrowisata.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm px-16">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="#">
              <img src={logo} alt="Logo" className="w-10 h-10" />
            </a>
            <a href='#' className="text-xl font-bold text-[#88B04B] font-manrope">
              Agrowisata Darangdan
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#88B04B] transition-colors font-manrope"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="text-gray-700 hover:text-[#88B04B] transition-colors font-manrope"
            >
              Paket
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-gray-700 hover:text-[#88B04B] transition-colors font-manrope"
            >
              Edukasi
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-[#88B04B] transition-colors font-manrope"
            >
              Galeri
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#88B04B] transition-colors font-manrope"
            >
              Kontak
            </button>
          </nav>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20Agrowisata%20Darangdan%2C%20saya%20ingin%20reservasi%20kunjungan."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-[#88B04B] text-white px-4 py-2 rounded-full hover:bg-[#7a9e42] transition-colors font-manrope"
          >
            Reservasi WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-[#88B04B] transition-colors font-manrope"
              >
                Tentang
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="text-left text-gray-700 hover:text-[#88B04B] transition-colors font-manrope"
              >
                Paket
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-left text-gray-700 hover:text-[#88B04B] transition-colors font-manrope"
              >
                Edukasi
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-gray-700 hover:text-[#88B04B] transition-colors font-manrope"
              >
                Galeri
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-[#88B04B] transition-colors font-manrope"
              >
                Kontak
              </button>
              <a
                href="https://wa.me/81218795266?text=Halo%20Agrowisata%20Darangdan%2C%20saya%20ingin%20reservasi%20kunjungan."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#88B04B] text-white px-4 py-2 rounded-full hover:bg-[#7a9e42] transition-colors font-manrope text-center"
              >
                Reservasi WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;