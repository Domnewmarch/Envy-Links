import ButtonPrimary from '../components/dashboard/button'
import Nav from '../components/dashboard/nav'
import NewLink from '../components/dashboard/newLink'
import NewLinkBlock from '../components/dashboard/newLinkBlock'
import React, { useState } from 'react'

export default function Links() {
  const [components, setComponents] = useState(['Sample Component'])
  function addComponent() {
    setComponents([...components, 'Sample Component'])
  }

  return (
    <div className=" bg-gray-200 h-screen">
      <Nav />
      <ButtonPrimary onClick={addComponent} text="Add new block" />
      {components.map((item, i) => (
        <NewLinkBlock />
      ))}
    </div>
  )
}
