import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ResourcesPage from './components/ResourcesPage'
import GameJamSection from './components/GameJamSection'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

function App() {
  const [isResourcesPage, setIsResourcesPage] = useState(() => window.location.hash.startsWith('#resources'))

  useEffect(() => {
    const updatePage = () => setIsResourcesPage(window.location.hash.startsWith('#resources'))

    window.addEventListener('hashchange', updatePage)
    return () => window.removeEventListener('hashchange', updatePage)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      {isResourcesPage ? (
        <ResourcesPage />
      ) : (
        <>
          <Hero />
          <GameJamSection />
          <Timeline />
        </>
      )}
      <Footer />
    </div>
  )
}

export default App
