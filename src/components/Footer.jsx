import { Phone, MapPin, Heart } from 'lucide-react';
import banner from '../logo.jpg';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="mb-4">
                <img 
                  src={banner} 
                  alt="Matha Foundation Logo" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              
            </div>
            

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-olive-300 transition-colors duration-200">Home</a></li>
              <li><a href="#about-us" className="text-gray-300 hover:text-olive-300 transition-colors duration-200">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-olive-300 transition-colors duration-200">Services</a></li>
              <li><a href="#why-us" className="text-gray-300 hover:text-olive-300 transition-colors duration-200">Why Choose Us</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-olive-300 transition-colors duration-200">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-olive-300 transition-colors duration-200">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-olive-300 transition-colors duration-200">Accommodation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-olive-300 transition-colors duration-200">Medical Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-olive-300 transition-colors duration-200">Nursing Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-olive-300 transition-colors duration-200">Interaction Activities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-olive-300 transition-colors duration-200">Personal Care</a></li>
              <li><a href="#videos" className="text-gray-300 hover:text-olive-300 transition-colors duration-200">Educational Videos</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-olive-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Villa no. 5, Mega, Vista Villas, Pragathi Nagar,</p>
                  <p className="text-gray-300">Hyderabad, Telangana 500090</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-olive-300 flex-shrink-0" />
                <a 
                  href="tel:+919866757192" 
                  className="text-gray-300 hover:text-olive-300 transition-colors duration-200"
                >
                  +91 9866757192
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Visiting Hours</h5>
              <p className="text-gray-300 text-sm">Monday - Sunday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <p>&copy; {currentYear} Matha Foundation Old Age Home. All rights reserved.</p>
            </div>
            
            
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;