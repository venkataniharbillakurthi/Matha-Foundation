import gallery1 from '../gallery_1.jpg';
import gallery2 from '../gallery_2.jpg';
import gallery3 from '../gallery_3.jpg';
import gallery4 from '../gallery_4.jpg';
import gallery6 from '../gallery_6.jpg';
import gallery7 from '../gallery_7.jpg';

const Gallery = () => {
  const galleryImages = [
    { src: gallery1, alt: "Gallery Image 1" },
    { src: gallery2, alt: "Gallery Image 2" },
    { src: gallery3, alt: "Gallery Image 3" },
    { src: gallery4, alt: "Gallery Image 4" },
    { src: gallery6, alt: "Gallery Image 6" },
    { src: gallery7, alt: "Gallery Image 7" }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;