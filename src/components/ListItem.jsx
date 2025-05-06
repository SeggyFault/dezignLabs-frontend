export default function ListItem({ title, text, className }) {
  return (
    <li className="flex gap-2 justify-start items-center mb-4">
      <img  className="w-10" src="/images/values_icon_3.svg" alt="" />
      <div>
        <p className={`text-lg font-semibold text-brand-primary ${className}`}>{title}</p>
        <p className={`text-base text-gray-700 ${className}`}>{text}</p>
      </div>
    </li>
  )
}