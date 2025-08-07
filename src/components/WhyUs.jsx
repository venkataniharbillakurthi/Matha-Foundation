import { Home, Heart, Users, Building } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: Home,
      title: "A home more than just a shelter",
      description: "Creating a warm, family-like environment where residents feel truly at home"
    },
    {
      icon: Heart,
      title: "Extending comfort, love and warmth",
      description: "Providing compassionate care with genuine love and understanding"
    },
    {
      icon: Users,
      title: "Accepting people from all backgrounds",
      description: "Welcoming seniors regardless of their cultural, religious, or social background"
    },
    {
      icon: Building,
      title: "Affiliated with top funding organizations",
      description: "Partnered with leading organizations to ensure quality care and resources"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Us</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-olive-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-olive-300 transition-colors duration-300">
                  <IconComponent className="w-10 h-10 text-olive-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;