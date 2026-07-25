const sections = [
  {
    title: 'Text intro',
    blurb:
      'A simple place to explain what this page is for, who it helps, and how people should use the resources below.',
    cards: [
      {
        type: 'Note',
        title: 'What this page is',
        body: 'Short intro copy goes here. Keep it friendly, clear, and direct.',
        meta: 'Placeholder for a welcome paragraph',
      },
      {
        type: 'Link',
        title: 'A featured link block',
        body: 'This card can later hold a link, a short explanation, or a callout.',
        meta: 'Works for text, links, embeds, and more',
      },
    ],
  },
  {
    title: 'Game examples',
    blurb: 'A few visual examples of games or prototypes to point people in the right direction.',
    cards: [
      {
        type: 'Image',
        title: 'Example game one',
        body: 'Use this for a screenshot, cover image, gif, or a quick write-up.',
        meta: 'Image or video placeholder',
      },
      {
        type: 'Video',
        title: 'Example game two',
        body: 'A short embedded clip or trailer would fit well in this slot.',
        meta: 'Video placeholder',
      },
      {
        type: 'Link',
        title: 'Example game three',
        body: 'A simple link card can sit next to media-based cards without changing the layout.',
        meta: 'Mixed content friendly',
      },
    ],
  },
  {
    title: 'Tips',
    blurb: 'Quick advice that helps people make progress without overthinking it.',
    cards: [
      {
        type: 'Tip',
        title: 'Start tiny',
        body: 'Pick one mechanic, one visual idea, and one thing you can finish.',
        meta: 'Good for short bullets later',
      },
      {
        type: 'Tip',
        title: 'Show, then explain',
        body: 'Lead with an example, then add a sentence about why it works.',
        meta: 'Useful for practical reminders',
      },
    ],
  },
  {
    title: 'Game design resources',
    blurb: 'Reference material for structure, pacing, loops, and general design thinking.',
    cards: [
      {
        type: 'Guide',
        title: 'Design guide placeholder',
        body: 'This card could become a link to an article, thread, or checklist.',
        meta: 'Design resource slot',
      },
      {
        type: 'Video',
        title: 'Design talk placeholder',
        body: 'A talk, lecture, or clip can live here with the same layout.',
        meta: 'Video or embed slot',
      },
    ],
  },
  {
    title: 'Code resources',
    blurb: 'Tools, docs, examples, and anything that helps people build the thing.',
    cards: [
      {
        type: 'Link',
        title: 'Code reference placeholder',
        body: 'Useful for engines, docs, starter kits, or other build references.',
        meta: 'Link-friendly card',
      },
      {
        type: 'Snippet',
        title: 'Starter snippet placeholder',
        body: 'Later this can hold code samples, setup notes, or a small embedded block.',
        meta: 'Text or code placeholder',
      },
      {
        type: 'Video',
        title: 'Tutorial placeholder',
        body: 'A walkthrough video can use the same structure as a text resource.',
        meta: 'Video tutorial slot',
      },
    ],
  },
  {
    title: 'Art resources',
    blurb: 'References for style, sprites, animation, UI, and general visual direction.',
    cards: [
      {
        type: 'Image',
        title: 'Moodboard placeholder',
        body: 'A reference image, palette sample, or moodboard fits here.',
        meta: 'Visual reference slot',
      },
      {
        type: 'Link',
        title: 'Art tool placeholder',
        body: 'Add a useful art tool, pack, or guide when you have the real content.',
        meta: 'Tool or pack link',
      },
    ],
  },
]

function ResourceCard({ type, title, body, meta }) {
  return (
    <article className="w-[290px] sm:w-[320px] shrink-0 overflow-hidden rounded-[18px] border-[3px] border-[#651014] bg-white text-[#1a1a1a] shadow-[0_6px_0_#651014]">
      <div className="flex h-32 items-end justify-between gap-3 border-b-[3px] border-[#651014] bg-[#60BAFF] p-4">
        <div className="flex flex-col gap-1">
          <span className="inline-flex w-fit rounded-full bg-[#D93A44] px-3 py-1 font-akshar text-[12px] font-bold uppercase tracking-[0.14em] text-white">
            {type}
          </span>
          <p className="font-akshar text-[13px] font-bold text-[#1a1a1a] opacity-80">
            Placeholder media area
          </p>
        </div>
        <div className="grid h-16 w-16 place-items-center rounded-full border-[3px] border-[#651014] bg-[#1a1a1a]/10 font-akshar text-[12px] font-bold text-[#1a1a1a]">
          {type}
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5">
        <h3 className="font-akshar text-[24px] font-bold leading-none">
          {title}
        </h3>
        <p className="font-akshar text-[17px] leading-snug text-[#1a1a1a]/80">
          {body}
        </p>
        <div className="pt-1 font-akshar text-[14px] font-bold tracking-wide text-[#651014]">
          {meta}
        </div>
      </div>
    </article>
  )
}

export default function ResourcesSection() {
  return (
    <section id="resources" className="bg-[#1a1a1a] px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:gap-16">
        <header className="max-w-3xl">
          <p className="mb-3 font-akshar text-[18px] font-bold uppercase tracking-[0.18em] text-[#60BAFF] md:text-[22px]">
            Resources
          </p>
          <h2 className="font-akshar text-[44px] font-bold leading-[0.92] text-white md:text-[72px]">
            simple, fun, and easy to fill in later
          </h2>
          <p className="mt-4 max-w-2xl font-akshar text-[20px] leading-tight text-white/75 md:text-[26px]">
            This section is set up as a flexible row system so each block can hold links, text, images, videos,
            or anything else you want to add next.
          </p>
        </header>

        {sections.map(({ title, blurb, cards }) => (
          <div key={title} className="flex flex-col gap-4">
            <div className="max-w-3xl flex flex-col gap-2">
              <h3 className="font-akshar text-[30px] font-bold text-white md:text-[40px]">
                {title}
              </h3>
              <p className="font-akshar text-[18px] leading-tight text-white/70 md:text-[22px]">
                {blurb}
              </p>
            </div>

            <div className="flex gap-5 overflow-x-auto pb-2 pr-1 snap-x snap-mandatory">
              {cards.map((card) => (
                <div key={card.title} className="snap-start">
                  <ResourceCard {...card} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}