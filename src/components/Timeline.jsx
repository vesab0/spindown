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

      {/* flossk × anibar header */}
      <div className="flex items-center justify-center gap-4 md:gap-6 mb-10 md:mb-16">
        <img src="/flossk-logo.png" alt="flossk" className="h-12 md:h-20 object-contain" draggable={false} />
        <span className="text-[#1a1a1a] text-4xl md:text-6xl font-light select-none">×</span>
        <img src="/anibar-logo.png" alt="anibar" className="h-20 md:h-32 object-contain" draggable={false} />
      </div>

      {/* Day columns — stacked on mobile, side-by-side on md+ */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch">
        {days.map(({ day, events }) => (
          <div key={day} className="flex flex-col">
            <p className="font-akshar text-white text-[22px] md:text-[30px] font-bold mb-3 md:mb-4">{day}</p>

            <div className="border-l-[4px] md:border-l-[5px] border-white pl-5 md:pl-7 flex flex-col gap-5 md:gap-7 flex-1">
              {events.map(({ time, desc }) => (
                <div key={time}>
                  <p className="font-akshar text-white text-[16px] md:text-[22px] font-bold">{time}</p>
                  {desc.split('\n').map((line, i) => (
                    <p key={i} className="font-akshar text-white text-[16px] md:text-[22px] font-bold">{line}</p>
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
