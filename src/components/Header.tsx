import { useState } from 'react';
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
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm px-4 sm:px-8 md:px-16">
      <div className="container mx-auto px-0 sm:px-4 py-2 sm:py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center space-x-2">
            <a href="#">
              <img src={logo} alt="Logo" className="w-9 h-9 sm:w-10 sm:h-10" />
            </a>
            <a href="#" className="text-lg sm:text-xl font-bold text-[#88B04B] font-manrope">
              Agrowisata Darangdan
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#88B04B] transition-colors font-manrope text-base lg:text-lg">Tentang</button>
            <button onClick={() => scrollToSection('packages')} className="text-gray-700 hover:text-[#88B04B] transition-colors font-manrope text-base lg:text-lg">Paket</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-[#88B04B] transition-colors font-manrope text-base lg:text-lg">Edukasi</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-[#88B04B] transition-colors font-manrope text-base lg:text-lg">Galeri</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#88B04B] transition-colors font-manrope text-base lg:text-lg">Kontak</button>
          </nav>

          {/* WhatsApp Button Desktop */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20Agrowisata%20Darangdan%2C%20saya%20ingin%20reservasi%20kunjungan."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-[#88B04B] text-white px-3 py-1.5 rounded-full hover:bg-[#7a9e42] transition-colors font-manrope text-sm lg:text-base"
          >
            Reservasi WhatsApp
          </a>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 ml-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pb-2 border-t">
            <nav className="flex flex-col space-y-2 mt-2">
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-[#88B04B] transition-colors font-manrope py-2 px-2 rounded">Tentang</button>
              <button onClick={() => scrollToSection('packages')} className="text-left text-gray-700 hover:text-[#88B04B] transition-colors font-manrope py-2 px-2 rounded">Paket</button>
              <button onClick={() => scrollToSection('education')} className="text-left text-gray-700 hover:text-[#88B04B] transition-colors font-manrope py-2 px-2 rounded">Edukasi</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-700 hover:text-[#88B04B] transition-colors font-manrope py-2 px-2 rounded">Galeri</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-[#88B04B] transition-colors font-manrope py-2 px-2 rounded">Kontak</button>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Agrowisata%20Darangdan%2C%20saya%20ingin%20reservasi%20kunjungan."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#88B04B] text-white px-4 py-2 rounded-full hover:bg-[#7a9e42] transition-colors font-manrope text-center mt-2"
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