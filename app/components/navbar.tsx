import Link from "next/link";
import ThemeSwitch from "./themeSwitch";
import Emoji from "../utills/emoji";

export default function Navbar() {
  return (
    <div className="mx-auto max-w-5xl px-6">
        <div className="flex justify-between items-center h-16 w-full">
            <Link href='/'>
                <Emoji />
            </Link>
            <div><ThemeSwitch /></div>
        </div>
    </div>
  )
}