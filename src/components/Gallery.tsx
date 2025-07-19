import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import atv from '../images/atv.jpg';
import panah from '../images/panah.jpg';
import pemancingan from '../images/pemancingan.jpg';
import petik_buah from '../images/petik-buah.jpg';
import terapi from '../images/terapi_ikan.jpg';
import kebun from '../images/kebun.jpg';
import drone from '../videos/drone.mp4';

const galleryImages = [
  { src: atv, alt: "Pemandangan kebun" },
  { src: panah, alt: "Panah" },
  { src: pemancingan, alt: "Pemancingan" },
  { src: petik_buah, alt: "Aktivitas petik buah" },
  { src: terapi, alt: "Terapi Ikan" },
  { src: kebun, alt: "Kebun" },
];

// Instagram SVG (replace deprecated InstagramIcon)
const InstagramSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

const Gallery = () => {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="py-10 bg-white px-4 md:px-8 lg:px-16">
      <div className="container mx-auto px-0 md:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#88B04B] mb-3 md:mb-4 font-poppins">
            Galeri
          </h2>
          <p className="text-gray-600 max-w-xl md:max-w-2xl mx-auto font-nunito text-base md:text-lg">
            Lihat keindahan alam dan keseruan aktivitas di Agrowisata Darangdan
          </p>
        </div>
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setPreview(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ExternalLink className="h-7 w-7 md:h-8 md:w-8 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {preview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-2">
            <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
              <button
                className="absolute top-2 right-2 md:top-4 md:right-4 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition"
                onClick={() => setPreview(null)}
                aria-label="Tutup preview"
              >
                <X className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
              </button>
              <img
                src={preview.src}
                alt={preview.alt}
                className="w-full max-h-[60vh] md:max-h-[80vh] object-contain rounded-xl shadow-lg"
              />
              <div className="text-center text-white mt-2 md:mt-4 text-base md:text-lg font-semibold">{preview.alt}</div>
            </div>
          </div>
        )}

        {/* Video Section */}
        <div className="bg-gradient-to-r from-[#88B04B] to-[#FFCB05] rounded-2xl p-4 md:p-8 text-white mb-8 md:mb-12">
          <div className="text-center mb-4 md:mb-8">
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 font-poppins">Jelajah Agrowisata</h3>
            <p className="text-base md:text-lg font-nunito">
              Saksikan indahnya alam di Agrowisata Darangdan
            </p>
          </div>
          <div className="relative aspect-video bg-black/20 rounded-xl overflow-hidden max-w-full md:max-w-4xl mx-auto">
            <video
              src={drone}
              title="Video Aktivitas"
              className="absolute inset-0 w-full h-full"
              controls
            />
          </div>
        </div>
        {/* Instagram Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 md:p-8 text-white">
            <InstagramSVG className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4" />
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 font-poppins">Follow Instagram Kami</h3>
            <p className="text-base md:text-lg mb-4 md:mb-6 font-nunito">
              Dapatkan update terbaru dan konten menarik dari Agrowisata Darangdan
            </p>
            <a
              href="https://instagram.com/agrowisatadarangdan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-purple-600 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 font-nunito text-sm md:text-base"
            >
              <InstagramSVG className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              @agrowisatadarangdan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;