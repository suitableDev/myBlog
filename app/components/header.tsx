import Link from "next/link"
import React from "react"
import QRgrid from "../qr/qrGrid"

interface Props {
  title: string
  tags?: boolean
}

export default function Header({ title = "", tags = false }: Props) {
  return (
    <header className={headerBox}>
      <div className={QRstyle}>
        <QRgrid />
      </div>

      <div className={titleAndTags}>
        <h2 className={headerTitle}>{title}</h2>
        {tags && (
          <div className={headerTags}>
            <Link href="/tag"> All tags</Link>
          </div>
        )}
      </div>
    </header>
  )
}

const headerBox = `
flex
relative
overflow-hidden
text-center 
h-40
px-4 
py-4
mb-12 
border-b
border-primary 
dark:border-primaryDark
`

//Push qrcode to the background of the header
const QRstyle = `
absolute 
-translate-x-4 
-translate-y-4 
-z-50
`

// Center the content within titleAndTags
const titleAndTags = `
my-auto
mx-auto
`

// Styles the h2 tag for the title of the page you are viewing
const headerTitle = `
uppercase 
text-2xl 
font-bold
`

// Styles the link to the page that displays all tags
const headerTags = `
text-xs 
mt-2 
hover:text-accent
`
