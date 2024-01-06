import HomeButton from "./homeButton"
import ThemeSwitch from "./themeSwitch"

export default function NavBar() {
  return (
    <div className={navContainer}>
      <div className="flex">
        <HomeButton />
      </div>
      <div className="flex">
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
  left-1/2
  transform 
  -translate-x-1/2 

//Mimic the width of the header
  w-full
  max-w-5xl
  px-6
  py-5

//arange icons in a row a push them to each side
  flex 
  flex-row 
  justify-end
  gap-4
`
