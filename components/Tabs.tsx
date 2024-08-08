'use  client'
import React, { useState } from 'react'

const Tabs = () => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>Tabs</div>
  )
}

export default Tabs