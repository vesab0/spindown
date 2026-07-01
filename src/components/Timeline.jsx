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
    <section className="bg-[#60BAFF] py-16 px-10">

      {/* flossk × anibar header */}
      <div className="flex items-center justify-center gap-6 mb-16">
        <img src="/flossk-logo.png" alt="flossk" className="h-20 object-contain" draggable={false} />
        <span className="text-[#1a1a1a] text-6xl font-light select-none">×</span>
        <img src="/anibar-logo.png" alt="anibar" className="h-32 object-contain" draggable={false} />
      </div>

      {/* Three columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 items-stretch">
        {days.map(({ day, events }) => (
          <div key={day} className="flex flex-col">
            {/* Day header sits above the line */}
            <p className="font-akshar text-white text-[30px] font-bold mb-4">{day}</p>

            {/* Line stretches to full remaining height of the tallest column */}
            <div className="border-l-[5px] border-white pl-7 flex flex-col gap-7 flex-1">
              {events.map(({ time, desc }) => (
                <div key={time}>
                  <p className="font-akshar text-white text-[22px] font-bold">{time}</p>
                  {desc.split('\n').map((line, i) => (
                    <p key={i} className="font-akshar text-white text-[22px] font-bold">{line}</p>
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
