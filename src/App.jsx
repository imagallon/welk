import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="font-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonial/>
    </div>
  );
}

export default App;
