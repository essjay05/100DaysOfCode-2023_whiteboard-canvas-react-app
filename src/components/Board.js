import React, { useRef, useEffect, useState } from 'react'
import { fabric } from 'fabric'

const Board = () => {

  const canvasRef = useRef(null)
  const [penWidth, setPenWidth] = useState(3)
  const [penColor, setPenColor] = useState('#000000')
  const [fabricCanvas, setFabricCanvas] = useState(3)

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: `#dcdde1`,
      width: 1290,
      height: 500,
      isDrawingMode: true,
      selectionColor: `#0652dd`,
      selectionLineWidth: 4,
    })
    setFabricCanvas(canvas)

    return () => {
      canvas.dispose()
    }
  }, [canvasRef])

  const changePenWidth = width => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.width = width
      setPenWidth(width)
      fabricCanvas.renderAll.bind(fabricCanvas)
    }
    setPenWidth()
  }

  const changePenColor = color => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.color = color
      setPenColor(color)
    }
  }

  return (
    <div className='whiteboard container w-full h-full mx-auto'>
      <h1>Whiteboard</h1>
      <canvas ref={canvasRef}></canvas>
      <section className='tools-container'>
        <div className='tool-wrapper'>
          <label htmlFor="PenWidth">
            <strong>Pen Width:</strong>&nbsp;{penWidth}
          </label>
          <input 
            type="range" 
            id="PenWidth" 
            onChange={e => changePenWidth(e.target.value)} 
            value={penWidth}
            min={1}
            max={30}/>
        </div>
        <div className='tool-wrapper'>
          <label htmlFor="PenColor">
            <strong>Pen Color:</strong>
          </label>
          <input 
            type="color" 
            id="PenColor" 
            onChange={e => changePenColor(e.target.value)} 
            value={penColor}
            min={1}
            max={30}/>
        </div>
      </section>
    </div>
  )
}

export default Board