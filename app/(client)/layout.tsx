import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "../globals.css";
import Navbar from "../components/navbar";
import Provider from "../utills/provider";
import classNames from "classnames";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Perfect Blog",
  description: "A list of recomendations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(firaCode.className, bodyStyle)}>
        <Provider>
          <Navbar />
          <main className={mainStyle}>{children}</main>
        </Provider>
      </body>
    </html>
  );
}

//Overall style, applicable to everything (navbar etc)
const bodyStyle = `
  h-full 
  bg-background 
  text-words
  dark:bg-backgroundDark 
  dark:text-wordsDark
  dark:selection:bg-accent
  dark:selection:text-words
`
//Style for posts and main content
const mainStyle = `
mx-auto 
max-w-5xl 
px-6
`
