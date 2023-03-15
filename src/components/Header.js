import React from 'react'
import PenAndPaper from './icons/PenAndPaper'

const Header = () => {
  return (
    <header>
      <div className='brand-container flex flex-row align-middle font-semibold'>
        <PenAndPaper></PenAndPaper>
        <h1>Joy-OAT Whiteboard</h1>
      </div>
    </header>
  )
}

export default Header