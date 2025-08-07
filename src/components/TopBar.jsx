import { Facebook, Linkedin, Instagram, Twitter, Phone, MapPin, User } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-olive-400 py-3 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Social media icons and contact info */}
        <div className="flex items-center space-x-4">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-2">
            <a href="#" className="text-gray-800 hover:text-olive-700 transition-colors duration-200">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-800 hover:text-olive-700 transition-colors duration-200">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-800 hover:text-olive-700 transition-colors duration-200">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-800 hover:text-olive-700 transition-colors duration-200">
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4 text-gray-800" />
              <a 
                href="tel:+919866757192" 
                className="text-gray-800 hover:text-olive-700 transition-colors duration-200"
              >
                +91 9866757192
              </a>
            </div>

          </div>
        </div>

        {/* Right side - Location and Login */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4 text-gray-800" />
            <span className="text-gray-800">Pragathi Nagar, Hyderabad</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;