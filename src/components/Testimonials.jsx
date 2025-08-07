import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      age: "78",
      content: "Matha Foundation has been a blessing in my life. The staff treats me like family, and I've made wonderful friends here. The medical care is excellent, and I feel safe and loved every day.",
      rating: 5,
      image: "https://images.pexels.com/photos/9992795/pexels-photo-9992795.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Rajesh Kumar",
      age: "82",
      content: "Moving here was the best decision I made. The facilities are top-notch, the food is delicious, and the activities keep me engaged. I couldn't ask for a better place to call home.",
      rating: 5,
      image: "https://images.pexels.com/photos/10299955/pexels-photo-10299955.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Sunita Devi",
      age: "75",
      content: "The care and attention I receive here is exceptional. From the nursing staff to the housekeeping team, everyone goes above and beyond to ensure our comfort and happiness.",
      rating: 5,
      image: "https://images.pexels.com/photos/10009923/pexels-photo-10009923.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <p className="text-xl text-gray-600">What our residents and their families say about us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 relative">
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-olive-300" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">Age {testimonial.age}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;