import AboutUsImage from '../about_us.jpg';
import { Heart, Home, Users, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-olive-700" />,
      title: "12+ Years of Service",
      description: "Dedicated to providing compassionate care for over a decade"
    },
    {
      icon: <Home className="w-8 h-8 text-olive-700" />,
      title: "Premium Facility",
      description: "Modern, comfortable living spaces in Pragathinagar, Hyderabad"
    },
    {
      icon: <Users className="w-8 h-8 text-olive-700" />,
      title: "Expert Care",
      description: "Trained staff providing 24/7 personalized assistance"
    },
    {
      icon: <Heart className="w-8 h-8 text-olive-700" />,
      title: "Compassionate Care",
      description: "Upholding dignity and respect for every resident"
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-olive-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Image */}
          <div className="relative group">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
              <img
                src={AboutUsImage}
                alt="About Matha Foundation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white text-lg font-medium">A home filled with love, care, and respect</p>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-olive-100 to-olive-200 rounded-2xl -z-10 group-hover:rotate-1 transition-transform duration-500"></div>
          </div>

          {/* Right content - Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Welcome to Matha Foundation Old Age Home</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                For over 12 years, Matha Foundation has been a trusted and compassionate haven for our cherished elderly residents. We initially began our journey in Kompally/Bahadurpally, and have now relocated to a premium duplex home in Pragathinagar, Hyderabad, offering an even more comfortable and homely environment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As pioneers in assisted living for seniors in Hyderabad, we have set a benchmark in quality home healthcare. We are deeply committed to providing unparalleled support—upholding dignity, respect, and personalized care for every resident.
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-olive-50 p-6 rounded-xl hover:bg-olive-100 transition-colors duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;