export default function Link({ card }) {
  return (
    <li className="w-full">
      <a target="_blank" rel="noreferrer" href={card.href}>
        <div className="bg-black hover:bg-dark duration-default py-4 rounded-xl w-full">
          <p className="text-center text-white w-fit mx-auto">{card.text}</p>
        </div>
      </a>
    </li>
  )
}
