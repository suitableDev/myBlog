"use client"
import React, { useEffect, useState } from 'react';
import { QRcode } from './qrCode';
import { useTheme } from 'next-themes';

export default function QRgrid() {
  const { theme, setTheme } = useTheme();
  const [qrColor, setQRColor] = useState('black'); // Default color

  useEffect(() => {
    // Update the QR code color when the theme changes
    setQRColor(theme === 'dark' ? 'white' : 'black');
  }, [theme]);

  const cols = 3;
  const clipPathValue = `polygon(0% 0%, 100% 0%, 0% 100%)`;

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    clipPath: clipPathValue,
  };

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
  );
}
