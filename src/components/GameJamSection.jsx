import Eyebrow from './Eyebrow'
import LabelValue from './LabelValue'

export default function GameJamSection() {
  return (
    <section className="bg-[#1a1a1a] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Eyebrow large>SPINDOWN GAME JAM</Eyebrow>

        <div className="mt-8 flex flex-col items-start gap-12 md:mt-12 md:flex-row md:items-center md:gap-16">
          <img
            src="/gamejam-poster.png"
            alt="Spindown Game Jam poster"
            className="w-[400px] max-w-[85vw] flex-shrink-0"
            style={{ boxShadow: '-8px 8px 0px #D93A44' }}
            draggable={false}
          />

          <div className="flex flex-col gap-6">
            <p className="font-akshar text-[24px] font-bold leading-relaxed text-white/80">
              An event organized in collaboration with Anibar Studios and KGIA where creatives came together to imagine,
              design, and build a unique short experience based on a specific theme, ended with the creation of 6 amazing
              games.
            </p>
            <div className="flex flex-col gap-4">
              <LabelValue label="Date" value="August 7 – 9, 2026 · Fri – Sun" />
              <LabelValue label="Venue" value="Prishtina Hackerspace" />
              <LabelValue label="Theme" value="Running out" />
            </div>
            <p className="font-akshar text-[20px] leading-tight text-white/75 md:text-[22px]">
              Play the games{' '}
              <a href="#games" className="font-bold text-[#D93A44] underline transition-opacity hover:opacity-70">
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}