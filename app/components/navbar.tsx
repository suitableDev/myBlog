import Link from "next/link";
import ThemeSwitch from "./themeSwitch";
import Emoji from "../utills/emoji";
import QRgrid from "../qr/qrGrid";

export default function Navbar() {
  return (
    <div className="mx-auto max-w-5xl px-6 relative">
      <div className="flex justify-between items-center h-16 w-full relative">
        <div className="absolute flex items-center top-10 transform -translate-x-10 -translate-y-10 -z-50">
          <QRgrid />
        </div>

        <div className="flex items-center">
          <Link href="/" className="z-50">
            <Emoji />
          </Link>
        </div>

        <div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
