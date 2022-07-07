/* This example requires Tailwind CSS v2.0+ */
export default function ButtonPrimary(props) {
  return (
    <>
      <div className="flex justify-center">
        <button onClick={props.onClick} type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 mx-2 my-4">
          {props.text}
        </button>
      </div>
    </>
  )
}
