import TopBar from './components/TopBar.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhyUs from './components/WhyUs.jsx';
import Gallery from './components/Gallery.jsx';
import Videos from './components/Videos.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Gallery />
      <Videos />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;