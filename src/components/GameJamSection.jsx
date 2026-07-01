export default function GameJamSection() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-16">

        {/* Poster */}
        <img
          src="/gamejam-poster.png"
          alt="Spindown Game Jam poster"
          className="w-[400px] max-w-[85vw] flex-shrink-0"
          style={{ boxShadow: '-8px 8px 0px #D93A44' }}
          draggable={false}
        />

        {/* Text */}
        <div className="flex flex-col gap-6">
          <p className="font-akshar text-white/80 text-[24px] font-bold leading-relaxed">
            An event where creatives come together to imagine, design, and build a unique short experience based on a specific theme
          </p>

          <div className="flex flex-col gap-4 font-akshar text-[22px]">
            <div>
              <div className="font-bold text-white">Date</div>
              <div className="text-white/60 font-normal">August 7 – 9, 2025 · Fri – Sun</div>
            </div>
            <div>
              <div className="font-bold text-white">Venue</div>
              <div className="text-white/60 font-normal">Prishtina Hackerspace</div>
            </div>
            <div>
              <div className="font-bold text-white">Format</div>
              <div className="text-white/60 font-normal">In-person + remote-friendly</div>
            </div>
            <div>
              <div className="font-bold text-white">Theme</div>
              <div className="text-white/60 font-normal">To be revealed ;)</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
