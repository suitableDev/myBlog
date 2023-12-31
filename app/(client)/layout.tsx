import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import '../globals.css'
import Navbar from '../components/navbar'
import Provider from '../utills/provider'

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Perfect Blog',
  description: 'A list of recomendations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  
      className={`${firaCode.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}
      >
        <Provider>
          <Navbar />
          <main className='mx-auto max-w-5xl px-6'>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
