export default function Link({ card }) {
  return (
    <li className="w-full">
      <a rel="norefferer" href={card.href}>
        <div className="bg-black hover:bg-dark duration-default py-4 rounded-xl w-full">
          <p className="text-center text-white w-fit mx-auto">{card.text}</p>
        </div>
      </a>
    </li>
  )
}
