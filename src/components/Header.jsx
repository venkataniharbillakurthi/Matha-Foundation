import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'HOME', 'SERVICES', 'ABOUT US', 'WHY US', 'GALLERY', 'VIDEOS', 'TESTIMONIALS', 'CONTACT US'
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
              <img 
                src="/src/logo.jpg" 
                alt="Matha Foundation Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Matha Foundation</h1>
            </div>
          </div>

          {/* Hamburger menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:text-olive-600 hover:bg-olive-50 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Menu */}
        {isMenuOpen && (
          <div className="py-4 border-t border-olive-200 bg-olive-50">
            <nav className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-700 hover:text-olive-700 font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-olive-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              {/* Contact info in mobile menu */}
              <div className="pt-4 mt-4 border-t border-olive-200 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600 px-4">
                  <Phone className="w-4 h-4" />
                  <a 
                    href="tel:+919866757192" 
                    className="hover:text-olive-700 transition-colors duration-200"
                  >
                    +91 9866757192
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 px-4">
                  <MapPin className="w-4 h-4" />
                  <span>Pragathi Nagar, Hyderabad</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;