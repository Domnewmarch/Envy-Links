export default function ButtonTwo(props) {
  return (
    <>
      <div className="flex justify-center">
        <button onClick={props.onClick} type="button" className="h-12 items-center w-full text-center justify-center  px-8 py-3 border border-transparent text-base font-semibold rounded-2xl shadow-sm text-white envy-blue-bg hover:bg-blue-400 mx-2 ml-4 mb-2 flex">
          <span>{props.text}</span>
        </button>
      </div>
    </>
  )
}
