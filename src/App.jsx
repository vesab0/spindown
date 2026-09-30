import { Suspense, lazy, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
const ResourcesPage = lazy(() => import('./components/ResourcesPage'))
import GamesPage from './components/GamesPage'
import IntroCarousel from './components/IntroCarousel'
import SfkSection from './components/SfkSection'
import GameJamSection from './components/GameJamSection'
import WhatsNext from './components/WhatsNext'
import DiceShowcase from './components/DiceShowcase'
import Footer from './components/Footer'

function App() {
  const [isResourcesPage, setIsResourcesPage] = useState(() => window.location.hash.startsWith('#resources'))
  const [isGamesPage, setIsGamesPage] = useState(() => window.location.hash.startsWith('#games'))
  const [isDicePage, setIsDicePage] = useState(() => window.location.hash.startsWith('#dice'))

  useEffect(() => {
    const updatePage = () => {
      setIsResourcesPage(window.location.hash.startsWith('#resources'))
      setIsGamesPage(window.location.hash.startsWith('#games'))
      setIsDicePage(window.location.hash.startsWith('#dice'))
    }

    window.addEventListener('hashchange', updatePage)
    return () => window.removeEventListener('hashchange', updatePage)
  }, [])

  return (
    <div className="min-h-screen">
      {isDicePage ? (
        <DiceShowcase />
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}

export default App
