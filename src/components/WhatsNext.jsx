import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import Eyebrow from './Eyebrow'

const RockingDieCanvas = lazy(() => import('./RockingDieCanvas'))

export default function WhatsNext() {
  const canvasWrapRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = canvasWrapRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#60BAFF] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <Eyebrow light>WHAT&apos;S NEXT?</Eyebrow>

        <div
          ref={canvasWrapRef}
          className="dice-canvas mx-auto my-10 h-[200px] w-[200px] md:my-14 md:h-[240px] md:w-[240px]"
        >
          <Suspense fallback={null}>{inView && <RockingDieCanvas />}</Suspense>
        </div>

        <div className="flex max-w-2xl flex-col gap-5 text-center">
          <p className="font-akshar text-[20px] leading-tight text-white md:text-[22px]">
            We're full of ideas and always looking to build something new, and grow our community of game enthusiasts 
          </p>
          <p className="font-akshar text-[20px] leading-tight text-white md:text-[22px]">
            If you are interested in contributing to our mission,{' '}
            <a
              href="https://hub.flossk.org/landing#/signup_user_complete/?id=96ub3k7jspyaxbg58tx3sx1u3e&md=link&sbr=fa"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#D93A44] underline transition-opacity hover:opacity-70"
            >
              join us at FLOSSK!
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}