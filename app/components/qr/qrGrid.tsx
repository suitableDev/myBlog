"use client"
import React, { useEffect, useState } from "react";
import DynamicQR from "./qrDyanmic";
import { useTheme } from "next-themes";

export default function QRgrid() {
  const { resolvedTheme } = useTheme();
  const [qrFgColor, setQRFgColor] = useState("black");

  useEffect(() => {
    const newFgColor = resolvedTheme === "dark" ? "white" : "black";
    setQRFgColor(newFgColor);
  }, [resolvedTheme]);

  const cols = 7;
  const gap = "0.82rem";

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: gap,
      }}
    >
      {[...Array(cols)].map((_, colIndex) => (
        <div key={colIndex}>
          <DynamicQR fgColor={qrFgColor} />
        </div>
      ))}
    </div>
  );
}
