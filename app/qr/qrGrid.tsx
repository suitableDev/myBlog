"use client"
import React, { useEffect, useState } from "react"
import { QRcode } from "./qrCode"
import { useTheme } from "next-themes"

export default function QRgrid() {
  const { theme, setTheme } = useTheme()
  const [qrColor, setQRColor] = useState("black")

  useEffect(() => {
    // Update the QR code color when the theme changes
    setQRColor(theme === "dark" ? "white" : "black")
  }, [theme])

  const cols = 3
  //mask for QR codes
  const clipPathValue = `polygon(0% 0%, 100% 0%, 0% 100%)`

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    //transform: 'rotate(35deg)'
  }

  return (
    <div style={gridStyle}>
      {[...Array(cols)].map((_, colIndex) => (
        <div
          key={colIndex}
          //Apply mask to the last instance of a code
          style={colIndex === cols - 1 ? { clipPath: clipPathValue } : {}}
        >
          <QRcode key={colIndex} fillColour={qrColor} />
        </div>
      ))}
    </div>
  )
}
