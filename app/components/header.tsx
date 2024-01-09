import React from "react"
import QRgrid from "./qr/qrGrid"

interface Props {
  title: string
}

export default function Header({ title = "" }: Props) {
  return (
    <header className={headerBox}>
      <div className={QRstyle}>
        <QRgrid />
      </div>

      <h2 className={headerTitle}>{title}</h2>
    </header>
  )
}

const headerBox = `
  flex
  fixed
  right-1/2
  transform 
  translate-x-1/2 
  
  h-20
  w-full 
  max-w-[61rem]
  sm:h-40
  
  border-b
  border-primary 
  dark:border-primaryDark

  overflow-hidden
  backdrop-blur-[0.5rem]
`

const QRstyle = `
  absolute 
  inset-0
  
  flex 
  items-center 
  justify-center

  opacity-0
  sm:opacity-100
`

const headerTitle = `
//Mobile
  my-auto  
  mx-20
  w-1/3 
  px-1

  uppercase 
  font-bold
  text-left
  rotate-0
  
  bg-background
  dark:bg-backgroundDark

  //Desktop
  sm:p-4
  sm:mx-auto
  sm:text-center
  sm:text-2xl
  sm:-rotate-3
`