import LabelValue from './LabelValue'

export default function SfkSection() {
  return (
    <section className="relative overflow-hidden bg-[#60BAFF] py-16 md:py-24">
      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <div className="flex flex-col gap-6 md:max-w-2xl">
          <h2 className="font-akshar text-[44px] font-bold leading-[0.92] text-white md:text-[72px]">
            JOIN US IN THE 11th
            <br />
            EDITION OF SFK!
          </h2>
          <p className="font-akshar text-[24px] font-bold leading-relaxed text-white">
            We will be in FLOSSK's SFK conference to showcase games created by our community. Learn more and grab your
            tickets{' '}
            <a
              href="https://sfk.flossk.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#D93A44] underline transition-opacity hover:opacity-70"
            >
              here
            </a>
          </p>
          <div className="flex flex-col gap-4 pt-2">
            <LabelValue label="Date" value="October 1 – 3, 2026 · Thu – Sat" />
            <LabelValue label="Venue" value="Salla 1 Teatri" />
          </div>
        </div>

        <img
          src="/bird.png"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="relative mx-auto mt-10 w-[70%] max-w-[320px] rotate-6 select-none md:absolute md:-right-6 md:top-1/2 md:mt-0 md:w-[34%] md:max-w-[360px] md:-translate-y-1/2"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl"
      />
    </section>
  )
}