import React, { useRef, useEffect, useState } from 'react'
import { fabric } from 'fabric'

const Board = () => {

  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: `#dcdde1`,
      width: 1290,
      height: 500,
      isDrawingMode: true
    })

    canvas.add()
  }, [])

  return (
    <div className='container w-full h-full mx-auto'>
      <h1>Whiteboard</h1>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default Board