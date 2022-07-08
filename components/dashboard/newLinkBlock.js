import ButtonPrimary from './button'
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
        <div className=" bg-gray-300 pb-4">
          <ButtonPrimary onClick={addLink} text="Add link" />
          {links.map((item, i) => (
            <NewLink key={i} />
          ))}
        </div>
      </div>
    </>
  )
}
