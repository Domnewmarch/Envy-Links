import Switch from '../switch'
import IconList from './icon-list'

export default function NewLink() {
  return (
    <div className="bg-white w-11/12 flex m-auto rounded-xl my-4 p-2">
      {/* left drag  box */}
      <div className="item-center justify-center m-auto cursor-grab px-2 flex handle">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5.55228 4 6 3.55228 6 3C6 2.44772 5.55228 2 5 2C4.44772 2 4 2.44772 4 3C4 3.55228 4.44772 4 5 4ZM6 8C6 8.55228 5.55228 9 5 9C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7C5.55228 7 6 7.44772 6 8ZM6 13C6 13.5523 5.55228 14 5 14C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12C5.55228 12 6 12.4477 6 13ZM12 8C12 8.55228 11.5523 9 11 9C10.4477 9 10 8.55228 10 8C10 7.44772 10.4477 7 11 7C11.5523 7 12 7.44772 12 8ZM11 14C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14ZM12 3C12 3.55228 11.5523 4 11 4C10.4477 4 10 3.55228 10 3C10 2.44772 10.4477 2 11 2C11.5523 2 12 2.44772 12 3Z" fill="#676B5F"></path>
        </svg>
      </div>
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
          <div className=" px-4 mt-2">
            <IconList />
          </div>
          <div className="text-gray-400 w-4">
            <svg viewBox="0 0 16 16" display="block" enable-background="new 0 0 24 24" class="sc-iumJyn bmfXnh">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 2.5v-2h4v2M1 2.5h14M9.533 13.5l.25-9M6.217 4.5l.25 9M2.661 4.5l.889 11h8.9l.888-11"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
