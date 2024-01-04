"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./icons";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={themeButton}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

//Styles for themeswitch button
const themeButton = `
        border 
        border-primary 
        rounded-2xl 
        p-1 
        hover:bg-opacity-10 
        hover:bg-secondary 
        dark:border-primaryDark
        dark:hover:bg-secondaryDark
  `;
