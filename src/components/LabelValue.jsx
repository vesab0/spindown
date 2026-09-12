export default function LabelValue({ label, value }) {
  return (
    <div className="font-akshar text-[22px]">
      <div className="font-bold text-white">{label}</div>
      <div className="font-normal text-white/60">{value}</div>
    </div>
  )
}