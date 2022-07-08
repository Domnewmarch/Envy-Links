/* This example requires Tailwind CSS v2.0+ */
export default function NewButton(props) {
  return (
    <>
      <div className="flex px-4 lg:px-12 justify-end">
        <button onClick={props.onClick} type="button" className="h-8 items-center px-4 py-3 border border-transparent text-base font-medium rounded-3xl shadow-sm text-white envy-blue-bg hover:bg-blue-400 mx-2 my-4 flex">
          <span>{props.text}</span>
        </button>
      </div>
    </>
  )
}
