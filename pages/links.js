import ButtonPrimary from '../components/dashboard/button'
import Nav from '../components/dashboard/nav'
import NewLink from '../components/dashboard/newLink'
import NewLinkBlock from '../components/dashboard/newLinkBlock'
import React, { useState } from 'react'
import NewButton from '../components/dashboard/newButton'
import Draggable from 'react-draggable'
import NewNav from '../components/dashboard/new-nav'

export default function Links() {
  const [components, setComponents] = useState(['Add Component'])
  function addComponent() {
    setComponents([...components, 'Add Component'])
  }

  return (
    <div className=" bg-neutral-100 h-screen">
      <NewNav />
      <NewButton onClick={addComponent} text="+ Block" />
      {components.map((item, i) => (
        <NewLinkBlock key={i} />
      ))}
    </div>
  )
}
