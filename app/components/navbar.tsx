import AllTagsButton from "./buttons/all-tags-button"
import HomeButton from "./buttons/home-button"
import ThemeSwitch from "./buttons/theme-switch"

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
  z-50

  fixed
  right-1/2
  transform 
  translate-x-1/2 

  w-full 
  max-w-[61rem]
  px-4
  py-8

  flex 
  justify-between
`
