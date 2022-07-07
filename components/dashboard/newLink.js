export default function NewLink() {
  return (
    <div className="bg-white w-11/12 flex m-auto rounded-lg my-4">
      <div className="item-center cursor-move border-r-2 px-2"></div>
      <div className="flex flex-col mx-2 my-2">
        <input className="px-4 w-full" type="text" placeholder="Title" />
        <input className="px-4" type="text" placeholder="Url" />
      </div>
    </div>
  )
}
