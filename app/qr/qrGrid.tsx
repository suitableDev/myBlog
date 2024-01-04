import React from 'react'
import { QRcode } from './qrCode'

export default function QRgrid() {
  const qrColor = "red"
  const cols = 5

  const clipPathValue = `polygon(0% 0%, 100% 0%, 0% 100%)`

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    clipPath: clipPathValue,
  }

  return (
    <div style={gridStyle}>
      {[...Array(cols)].map((_, rowIndex) => (
        <div key={rowIndex}>
          {[...Array(cols - rowIndex)].map((_, colIndex) => (
            <QRcode key={colIndex} fillColour={qrColor} />
          ))}
        </div>
      ))}
    </div>
  )
}
