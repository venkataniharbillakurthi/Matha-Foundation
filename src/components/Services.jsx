import { useState } from 'react';
import { Home, Users, Stethoscope, Heart } from 'lucide-react';
import EnquiryModal from './EnquiryModal';
import AccommodationImage from '../Accommodation.jpg';
import InteractionCentreImage from '../Interaction Centre.jpg';
import MedicalCheckupImage from '../Medical Check-Up.jpg';
import NursingCareImage from '../Nursing & Personal Care.jpg';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      icon: Home,
      title: "Accommodation",
      description: "All our accommodation rooms are well-furnished and come with plenty of in-room amenities.",
      image: AccommodationImage
    },
    {
      icon: Users,
      title: "Interaction Centre",
      description: "We try and initiate a better understanding of the problems of ageing from a social perspective.",
      image: InteractionCentreImage
    },
    {
      icon: Stethoscope,
      title: "Medical Check-Up",
      description: "We conduct routine medical check-up and provide medication to all our elderly patients.",
      image: MedicalCheckupImage
    },
    {
      icon: Heart,
      title: "Nursing & Personal Care",
      description: "We provide self-contained rooms and 24 hour nursing & personal care for aged person.",
      image: NursingCareImage
    }
  ];

    return (
    <>
      <section id="services" className="py-20 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group cursor-pointer animate-fade-in-up flex" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col w-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-center w-12 h-12 bg-olive-200 rounded-full mb-4 mx-auto">
                      <IconComponent className="w-6 h-6 text-olive-700" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="text-center mt-auto pt-4">
                      <button onClick={() => setIsModalOpen(true)} className="bg-olive-600 hover:bg-olive-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-md">
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </section>
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Services;