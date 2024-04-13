"use client"
import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

interface Props{
    fgColor: string,
}

export default function DynamicQR({fgColor}:Props){
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
      // Check if window is defined before accessing it
      if (typeof window !== 'undefined') {
        setCurrentUrl(window.location.href);
      }
    }, []);
  return (
    <div>
      <QRCode value={currentUrl} fgColor={fgColor} bgColor="transparent"  size={128} />
    </div>
  );
}
