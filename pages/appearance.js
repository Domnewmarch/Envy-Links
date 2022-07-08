import Nav from '../components/dashboard/nav'
import React, { useState } from 'react'

export default function Links() {
  const [components, setComponents] = useState(['Add Component'])
  function addComponent() {
    setComponents([...components, 'Add Component'])
  }

  return (
    <div className=" bg-neutral-100 h-screen">
      <Nav />
    </div>
  )
}
