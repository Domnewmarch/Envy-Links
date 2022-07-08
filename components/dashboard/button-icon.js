/* This example requires Tailwind CSS v2.0+ */
export default function ButtonIcons(props) {
  return (
    <>
      <div className="flex justify-center">
        <button onClick={props.onClick} type="button" className="inline-flex h-14 items-center px-6 py-3 border border-transparent text-base font-medium rounded-3xl shadow-sm text-white envy-blue-bg hover:bg-blue-400 mx-2 my-4 flex">
          <span className="button-icons bg-green-400">
            <img src={props.iconOne} alt="" />
          </span>
          <span className="button-icons bg-purple-400">
            <img src={props.iconTwo} alt="" />
          </span>
          <span className="button-icons bg-fuchsia-300">
            <img src={props.iconThree} alt="" />
          </span>
          <span className="ml-2">{props.text}</span>
        </button>
      </div>
    </>
  )
}
