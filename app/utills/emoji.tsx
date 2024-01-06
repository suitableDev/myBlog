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
    <div className={homeButton}>
        {logoEmoji}
    </div>
  );
}

//Creates framing for emoji, mimics theme switch button
const homeButton=`
text-2xl 
p-1 
border 
rounded-full 
border-primary 
bg-background

//dark
dark:border-primaryDark 
dark:bg-backgroundDark
`
