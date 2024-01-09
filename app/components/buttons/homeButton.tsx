"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { useTheme } from 'next-themes'
import { HomeIcon } from './icons'

export default function HomeButton() {
  const { theme, setTheme } = useTheme()
  const [iconColor, setIconColor] = useState('black')

  useEffect(() => {
//Update the icon color when the theme changes
    setIconColor(theme === 'dark' ? 'white' : 'black')
  }, [theme])
  return (
    <Link href="/" className="button dark:button-dark">
        <HomeIcon color={iconColor}/>
  </Link>
  )
}