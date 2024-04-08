"use client"
import React, { useEffect, useState } from "react"
import { QRcode } from "./qrSVG"
import { useTheme } from "next-themes"

export default function QRgrid() {
  const { resolvedTheme, theme } = useTheme()
  const [qrColor, setQRColor] = useState("white")

  useEffect(() => {
    setQRColor( resolvedTheme === "dark" ? "white" : "black")
  }, [resolvedTheme])

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