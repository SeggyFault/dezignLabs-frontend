export default function ListItem({ title, text, className }) {
  return (
    <li className="flex gap-2 justify-start items-center mb-4">
      {/*<div className={`mt-1 rounded-full ${className}`}></div>*/}
      <img  className="w-10" src="/images/values_icon_3.svg" alt="" />
      <div>
        <p className="text-lg font-semibold text-brand-primary">{title}</p>
        <p className="text-base text-gray-700">{text}</p>
      </div>
    </li>
  )
}