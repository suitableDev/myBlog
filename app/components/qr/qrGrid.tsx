"use client"
import React, { useEffect, useState } from "react"
import { QRcode } from "./qrCode"
import { useTheme } from "next-themes"

export default function QRgrid() {
  const { theme, setTheme } = useTheme()
  const [qrColor, setQRColor] = useState("black")

  useEffect(() => {
    setQRColor(theme === "dark" ? "white" : "black")
  }, [theme])

  const cols = 7

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
  }

  return (
    <div style={gridStyle}>
      {[...Array(cols)].map((_, colIndex) => (
        <div
          key={colIndex}
          style={colIndex === cols - 1 ? { clipPath: clipPathValue } : {}}
        >
          <QRcode key={colIndex} fillColour={qrColor} />
        </div>
      ))}
    </div>
  )
}

const clipPathValue =`
polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 100% 0%)
`