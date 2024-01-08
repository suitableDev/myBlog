"use client"
import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "./icons"

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={placeholder}><MoonIcon/></div>
    )
  }

  return (
    <button
      className={themeButton}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

//Styles for themeswitch button
const placeholder = `
        p-1 
        border 
        rounded-2xl 
        border-primary 
        bg-background
        
        //dark
        dark:border-primaryDark
        dark:bg-backgroundDark
  `

//Styles for themeswitch button
const themeButton = `
        p-1 
        border 
        rounded-2xl 
        border-primary 
        bg-background
        
        //dark
        dark:border-primaryDark
        dark:bg-backgroundDark
  `
