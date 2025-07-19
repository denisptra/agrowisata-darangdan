import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import hero1 from '../images/hero-1.jpg';
import hero2 from '../images/hero-2.jpg';
import hero3 from '../images/hero-3.jpg';
import hero4 from '../images/hero-4.jpg';
import hero5 from '../images/hero-5.jpg';

const heroImages = [hero1, hero2, hero3, hero4, hero5];
// ...existing code...

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000); // ganti gambar tiap 4 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Banner Slider Background */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Hero ${idx + 1}`}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
              current === idx
                ? 'opacity-100 scale-105 animate-zoomIn'
                : 'opacity-0 scale-100'
            }`}
            style={{
              transition: 'opacity 1s, transform 4s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-manrope animate-fadeIn">
          Agrowisata <span className='text-[#FFCB05]'>Kebun Manggis</span> Darangdan
        </h1>
        <p className="text-base md:text-lg text-white/90 mb-8 font-manrope animate-slideUp">
          Jelajahi Kebun dan Nikmati pengalaman tak terlupakan memetik buah langsung dari pohonnya, di tengah sejuknya alam Darangdan.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slideUp">
          <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-[#FFCB05]" />
            <span className="text-white font-manrope">Darangdan, Purwakarta, Jawa Barat</span>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 flex items-center space-x-2">
            <Clock className="h-5 w-5 text-[#FFCB05]" />
            <span className="text-white font-manrope">09.00 - 16.00 WIB, Jumat-TUTUP</span>
          </div>
        </div>
        <a
          href="https://wa.me/81218795266?text=Halo%20Agrowisata%20Darangdan%2C%20saya%20ingin%20reservasi%20kunjungan."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#88B04B] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#7a9e42] transition-all duration-300 transform hover:scale-105 animate-pulse font-manrope"
        >
          Reservasi via WhatsApp
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-1 h-12 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;