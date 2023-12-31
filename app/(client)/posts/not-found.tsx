import Header from "@/app/components/header"
import Link from "next/link"
import React from "react"

export default function notFound() {
  return (
    <>
    <Header title="WRONG" />
    <div>
        <Link href="/">GO HOME</Link>
    </div>
    </>
  )
}