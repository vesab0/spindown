import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GameJamSection from './components/GameJamSection'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <GameJamSection />
      <Timeline />
      <Footer />
    </div>
  )
}

export default App
