import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import "../globals.css"
import Provider from "../utills/provider"
import classNames from "classnames"
import NavBar from "../components/navbar"
import Footer from "../components/footer"

const firaCode = Fira_Code({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Perfect Blog",
  description: "A list of recomendations",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(firaCode.className, bodyStyle)}>
        <Provider>
          <main className={mainStyle}>
            <NavBar />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  )
}

//Overall style, applicable to everything (navbar etc)
const bodyStyle = `
  bg-background 
  text-words
  overflow-y-scroll
  dark:bg-backgroundDark 
  dark:text-wordsDark
  dark:selection:bg-accent
  dark:selection:text-words
`
//Style for posts and main content
const mainStyle = `
flex
flex-col
min-h-screen
mx-auto 
max-w-5xl 
px-6
`
