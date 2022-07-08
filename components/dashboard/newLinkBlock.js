import ButtonPrimary from './button'
import ButtonIcons from './button-icon'
import NewLink from './newLink'
import React, { useState } from 'react'

export default function NewLinkBlock() {
  const [links, addLinks] = useState(['Add Link'])
  function addLink() {
    addLinks([...links, 'Add Link'])
  }

  return (
    <>
      <div className="my-2">
        <h6 className="text-center text-base font-semibold text-gray-500 uppercase">Link Block</h6>
        <div className=" bg-neutral-100 pb-4">
          <div className="flex items-center m-auto justify-center">
            <ButtonPrimary onClick={addLink} text="Add New Link" />
            <ButtonIcons text="Explore" iconOne="/img/house.svg" iconTwo="/img/house.svg" iconThree="/img/house.svg" />
          </div>
          {links.map((item, i) => (
            <NewLink key={i} />
          ))}
        </div>
      </div>
    </>
  )
}
