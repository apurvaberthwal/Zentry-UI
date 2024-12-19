
import './App.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Feature from './components/Feature.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Story from './components/Story.jsx'
function App() {


  return (
    
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <Navbar />
      <Hero />
      <About />
      <Feature></Feature>
      <Story></Story>
      <Contact></Contact>
      <Footer />
      
           </main>
    
  )
}

export default App
