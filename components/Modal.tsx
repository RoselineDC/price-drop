"use client"

import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

const Modal = () => {
    let [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <button type='button' className='btn'>
        Track
    </button>
    </>
  )
}

export default Modal