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

    const circle = new fabric.Circle({
      radius: 20,
      fill: `#009432`,
      left: 50,
      right: 50,
      top: 50,
    })

    canvas.add(circle)
  }, [])

  return (
    <div className='container w-full h-full mx-auto'>
      <h1>Whiteboard</h1>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default Board