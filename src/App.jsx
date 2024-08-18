
import './App.css'
import { About } from './components/About'
import { Hero } from './components/Hero'
import Navbar from './components/Navbar'

function App(){ 


  return (
  <div className="font-primary overflow-x-hidden">
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
  </div>
  )
}

export default App
