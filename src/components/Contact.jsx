import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp with pre-filled data
    const phoneNumber = '919866757192'; // WhatsApp number with country code (India: 91)
    
    // Create a message with pre-filled structure
    let message = '*New Inquiry - Matha Foundation*%0A%0A';
    
    // Add each field with label and value or placeholder with line breaks
    message += '*1. Name: ' + (formData.name || '___________________');
    message += '*2. Email: ' + (formData.email || '___________________') ;
    message += '*3. Phone: ' + (formData.phone || '___________________') ;
    message += '*4. Subject: ' + (formData.subject || '___________________') ;
    message += '*5. Message: ' + (formData.message || '_______________________________________________________');
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Check if user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // For mobile, use the standard WhatsApp URL (will open the app if installed)
    // For desktop, use web.whatsapp.com
    if (isMobile) {
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
    }
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Show success message
    alert('Please check the pre-filled message in WhatsApp and send it to complete your inquiry.');
  };

  return (
    <section id="contact-us" className="py-20 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Get in touch with us for more information about our services</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We're here to answer any questions you may have about our services. Feel free to reach out to us through any of the following methods, and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-olive-200 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-olive-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                  <a 
                    href="tel:+919866757192" 
                    className="text-olive-700 hover:text-olive-900 font-medium transition-colors duration-200"
                  >
                    +91 9866757192
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-olive-200 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-olive-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">websupport@justdial.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-olive-200 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-olive-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">Villa no. 5, Mega, Vista Villas, near Jagan Studios Road, NRI Colony, Kakatiya Hills, Vasanth Nagar Colony, Pragathi Nagar, Hyderabad, Telangana 500090</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-olive-200 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-olive-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Visiting Hours</h4>
                  <p className="text-gray-600">Monday - Sunday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.471730651285!2d78.3915737!3d17.5327134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f34cba38773%3A0x59d6e2c1908b7cc9!2sMatha%20foundation!5e0!3m2!1sen!2sin!4v1754482381269!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-colors duration-200"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-colors duration-200"
                    placeholder="+91"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="admission">Admission Information</option>
                    <option value="visiting">Visiting Arrangements</option>
                    <option value="services">Services Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="Please tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;