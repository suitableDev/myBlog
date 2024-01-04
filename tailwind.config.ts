import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
    colors: {
      words:'black',
      background:'white',
      primary:'black',
      secondary:'#f1f1f1',
      accent:'#DAFE52',
      
      wordsDark:'white',
      backgroundDark:'black',
      primaryDark:'white',
      secondaryDark:'#0a0a0a',
      accentDark:'',
    }
  }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
export default config
