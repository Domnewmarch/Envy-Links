import Switch from '../switch'
import IconList from './icon-list'

export default function NewLink() {
  return (
    <div className="bg-white w-11/12 flex m-auto rounded-xl my-4 p-2">
      {/* left drag  box */}
      <div className="item-center justify-center m-auto cursor-grab px-2 flex">{/* <img src="./img/handle.svg" alt="" /> */}</div>
      <div className="flex flex-col mx-2 my-2 w-full">
        {/* middle col */}
        <div className="flex justify-between">
          <div>
            <input className="px-4 w-full placeholder:text-grey-800 input-icon text-sm" type="text" placeholder="Title" />
            <input className="px-4 text-sm" type="text" placeholder="Url" />
          </div>
          <div>
            <Switch />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className=" px-4 mt-2">{/* <IconList /> */}</div>
          <div className="text-gray-400 w-4">{/* <img src="./img/delete.svg" alt="" /> */}</div>
        </div>
      </div>
    </div>
  )
}
