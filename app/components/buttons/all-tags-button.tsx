"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { useTheme } from 'next-themes'
import { TagsIcon } from './icons'

export default function Button() {
  const { theme, setTheme } = useTheme()
  const [iconColor, setIconColor] = useState('black')

  useEffect(() => {
    setIconColor(theme === 'dark' ? 'white' : 'black')
  }, [theme])
  return (
    <Link href="/tag" className="button dark:button-dark">
        <TagsIcon color={iconColor}/>
  </Link>
  )
}