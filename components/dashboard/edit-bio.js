import ButtonTwo from '../buttons/button2'
import Switch from '../switch'
import ButtonPrimary from './button'
import IconList from './icon-list'

export default function EditBio() {
  return (
    <div className="bg-white w-11/12 flex m-auto rounded-xl my-4 p-2">
      <div className="grid grid-cols-3">
        <img src="/img/envy-logo.png" alt="" />
        <div className=" col-start-2 col-span-3">
          <ButtonTwo text="Pick an image" />
          <ButtonTwo text="Pick an image" />
        </div>
      </div>
    </div>
  )
}
