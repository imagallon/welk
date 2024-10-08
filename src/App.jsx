import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
