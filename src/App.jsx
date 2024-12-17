
import './App.css'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
function App() {


  return (
    
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <Navbar />
      <Hero />
      <About />
      <Footer />
      
           </main>
    
  )
}

export default App
