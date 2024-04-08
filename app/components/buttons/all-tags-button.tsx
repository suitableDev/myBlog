"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { TagsIcon } from "./icons";

export default function HomeButton() {
  const [mounted, setMounted] = useState(true);
  const { resolvedTheme, theme } = useTheme();
  const [iconColor, setIconColor] = useState("white");

  useEffect(() => {
    setIconColor(resolvedTheme === "dark" ? "white" : "black");
    setMounted(true);
  }, [resolvedTheme]);

  if (!mounted) {
    return null
  }

  return (
    <Link href="/tag" className="button dark:button-dark">
      <TagsIcon color={iconColor} />
    </Link>
  );
}
