import video2 from '../video_2.mp4';
import video3 from '../video_3.mp4';

const Videos = () => {

  return (
    <section id="videos" className="py-20 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our Moments</h2>
          <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>A glimpse into life at Matha Foundation</p>
        </div>

        <div className="space-y-12">
          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="aspect-video rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9O3gCfqw9Qo?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <video className="w-full h-full" loop autoPlay muted>
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="aspect-video rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <video className="w-full h-full" loop autoPlay muted>
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;