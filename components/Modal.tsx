"use client"

import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

const Modal = () => {
    let [isOpen, setIsOpen] = useState(true)
  return (
    <>
    <button type='button' className='btn'>
        Track
    </button>
    <Dialog open={isOpen} onClose={setIsOpen}>
    </>
  )
}

export default Modal