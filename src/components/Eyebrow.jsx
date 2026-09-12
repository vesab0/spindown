export default function Eyebrow({ children, light = false, large = false }) {
  return (
    <p
      className={`font-akshar font-bold uppercase tracking-[0.18em] ${light ? 'text-white' : 'text-[#60BAFF]'} ${large ? 'text-[30px] md:text-[40px]' : 'text-[18px] md:text-[22px]'}`}
    >
      {children}
    </p>
  )
}