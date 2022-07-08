/* This example requires Tailwind CSS v2.0+ */
export default function ButtonPrimary(props) {
  return (
    <>
      <div className="flex justify-center">
        <button onClick={props.onClick} type="button" className="h-12 items-center px-6 py-3 border border-transparent text-base font-medium rounded-3xl shadow-sm text-white envy-blue-bg hover:bg-blue-400 mx-2 my-4 flex">
          <span>{props.text}</span>
        </button>
      </div>
    </>
  )
}
