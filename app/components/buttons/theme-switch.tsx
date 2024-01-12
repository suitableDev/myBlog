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
      <div className="button dark:button-dark"><MoonIcon/></div>
    )
  }

  return (
    <button
      className="button dark:button-dark"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}