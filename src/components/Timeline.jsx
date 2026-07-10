export default function Timeline() {
  const days = [
    {
      day: 'Friday, Aug 7',
      events: [
        { time: '18:30', desc: 'Event Opening' },
        { time: '19:00 - 20:30', desc: 'Theme announcement\nSocializing and Team Building' },
        { time: '20:30 - 21:30', desc: '"Godot Fundamentals" and\n"Art for Games" Workshops' },
        { time: '21:30 - Onward', desc: 'Hang out in Prishtina Hackerspace' },
      ],
    },
    {
      day: 'Saturday, Aug 8',
      events: [
        { time: '10:00 - 00:00', desc: 'Development, design, and fun.\nWith Industry experts on-site.' },
      ],
    },
    {
      day: 'Sunday, Aug 9',
      events: [
        { time: '00:00 - 19:00', desc: 'More development' },
        { time: '19:00 - 20:00', desc: 'Game submissions' },
        { time: '20:00 - 21:00', desc: 'Game Presentations' },
        { time: '21:00 - 22:00', desc: 'Closing event and winners\nannouncements' },
      ],
    },
  ]

  return (
    <section className="bg-[#60BAFF] py-10 md:py-16 px-5 md:px-10">

      {/* flossk × anibar × kgia header — one cell per day column below */}
      <div className="max-w-5xl mx-auto grid grid-cols-3 items-center mb-10 md:mb-16">
        <div className="relative flex justify-center">
          <img src="/flossk-logo.png" alt="flossk" className="h-10 md:h-16 object-contain" draggable={false} />
          <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-[#1a1a1a] text-4xl md:text-6xl font-light select-none">×</span>
        </div>
        <div className="relative flex justify-center">
          <img src="/anibar-logo.png" alt="anibar" className="h-32 md:h-48 object-contain" draggable={false} />
          <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-[#1a1a1a] text-4xl md:text-6xl font-light select-none">×</span>
        </div>
        <div className="flex justify-center">
          <img src="/kgia-logo.png" alt="kgia" className="h-16 md:h-24 object-contain brightness-0" draggable={false} />
        </div>
      </div>

      {/* Day columns — stacked on mobile, one per header cell on md+ */}
      <div className="max-w-5xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-8 items-center md:items-stretch md:justify-items-center">
        {days.map(({ day, events }) => (
          <div key={day} className="flex flex-col w-full md:w-[19rem]">
            <p className="font-akshar text-white text-[26px] md:text-[36px] font-bold mb-3 md:mb-4">{day}</p>

            <div className="border-l-[4px] md:border-l-[5px] border-white pl-5 md:pl-7 flex flex-col gap-5 md:gap-7 flex-1">
              {events.map(({ time, desc }) => (
                <div key={time} className="relative">
                  <span className="absolute top-[9px] md:top-[14px] -translate-y-1/2 left-[-25px] md:left-[-35px] w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#D93A44]" />
                  <p className="font-akshar text-white text-[18px] md:text-[26px] font-normal">{time}</p>
                  {desc.split('\n').map((line, i) => (
                    <p key={i} className="font-akshar text-white text-[18px] md:text-[26px] font-bold">{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
