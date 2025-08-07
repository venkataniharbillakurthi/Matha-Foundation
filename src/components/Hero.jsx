import { useState } from 'react';
import EnquiryModal from './EnquiryModal';
import heroImage from '../home_screen.jpg';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-olive-50 via-olive-100 to-olive-200 overflow-hidden">
      {/* Animated Blob Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob-animation bg-olive-300" style={{ top: '10%', left: '60%', width: '400px', height: '400px', animationDelay: '0s' }}></div>
        <div className="blob-animation bg-olive-200" style={{ top: '50%', left: '10%', width: '300px', height: '300px', animationDelay: '2s' }}></div>
        <div className="blob-animation bg-rose-200" style={{ top: '30%', left: '80%', width: '250px', height: '250px', animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Matha Foundation Old Age Home

              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 mt-4 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Welcome to Matha Foundation – where compassionate care meets the comfort of home.
              For over 12 years, we’ve been a trusted haven for seniors, offering dignified, personalized assisted living in Hyderabad.
              </p>
            </div>
            
            <button onClick={() => setIsModalOpen(true)} className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Enquire Now
            </button>
          </div>

          {/* Right content - Hero image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="relative z-10 bg-white rounded-2xl p-4 shadow-xl">
              <img
                src={heroImage}
                alt="Elderly care at Matha Foundation"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-full h-full bg-olive-200 rounded-2xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
    <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </>);
};

export default Hero;