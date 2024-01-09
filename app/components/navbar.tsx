import AllTagsButton from "./buttons/AllTagsButton"
import HomeButton from "./buttons/homeButton"
import ThemeSwitch from "./buttons/themeSwitch"

export default function NavBar() {
  return (
    <div className={navContainer}>
        <HomeButton />
      <div className="flex gap-4">
        <AllTagsButton />
        <ThemeSwitch />
      </div>
    </div>
  )
}

const navContainer = `
//place in front of everything
  z-50

//fix it in place and centralise it
  fixed
  right-1/2
  transform 
  translate-x-1/2 

//Mimic the width of the header
  w-full 
  max-w-[61rem]
  px-4
  py-8

//arange icons in a row a push them to each side
  flex 
  justify-between
`
