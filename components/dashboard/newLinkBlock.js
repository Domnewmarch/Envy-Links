import ButtonPrimary from './button'
import NewLink from './newLink'

export default function NewLinkBlock() {
  return (
    <>
      <div className="my-2">
        <h6 className="text-center text-base font-semibold text-gray-500 uppercase">Link Block</h6>
        <div className=" bg-gray-300 pb-4">
          <ButtonPrimary text="Add link" />
          <NewLink />
        </div>
      </div>
    </>
  )
}
