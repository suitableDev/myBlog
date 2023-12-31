"use client"
import { useState, useEffect } from 'react';

const emojis = ['😀', '😎', '🚀', '🌈', '🎉', '🌍']
export default function Emoji() {
  const [logoEmoji, setLogoEmoji] = useState('');

  useEffect(() => {
    const getRandomEmoji = () => {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      return emojis[randomIndex];
    };

    setLogoEmoji(getRandomEmoji());
  }, [])

  return (
    <div className='text-2xl'>
        {logoEmoji}
    </div>
  );
}
