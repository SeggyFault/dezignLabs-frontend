export default function Value({ title, text, className }) {
  return (
    <div className={`bg-surface-default col-span-12 md:col-span-6 rounded-2xl p-6 shadow-md ${className}`}>
      <h3 className="uppercase text-brand-primary text-xl tracking-wide font-semibold mb-3">{title}</h3>
      <p className="text-base text-gray-700">{text}</p>
    </div>
  )
}