import { Suspense, lazy, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
const ResourcesPage = lazy(() => import('./components/ResourcesPage'))
import GamesPage from './components/GamesPage'
import IntroCarousel from './components/IntroCarousel'
import SfkSection from './components/SfkSection'
import GameJamSection from './components/GameJamSection'
import WhatsNext from './components/WhatsNext'
import Footer from './components/Footer'

function App() {
  const [isResourcesPage, setIsResourcesPage] = useState(() => window.location.hash.startsWith('#resources'))
  const [isGamesPage, setIsGamesPage] = useState(() => window.location.hash.startsWith('#games'))

  useEffect(() => {
    const updatePage = () => {
      setIsResourcesPage(window.location.hash.startsWith('#resources'))
      setIsGamesPage(window.location.hash.startsWith('#games'))
    }

    window.addEventListener('hashchange', updatePage)
    return () => window.removeEventListener('hashchange', updatePage)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      {isResourcesPage ? (
        <Suspense fallback={<div className="bg-[#1a1a1a] min-h-screen" />}>
          <ResourcesPage />
        </Suspense>
      ) : isGamesPage ? (
        <GamesPage />
      ) : (
        <>
          <Hero />
          <IntroCarousel />
          <SfkSection />
          <GameJamSection />
          <WhatsNext />
        </>
      )}
      <Footer />
    </div>
  )
}

export default App
