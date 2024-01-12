import { getFooter } from "@/sanity/lib/client"
import { Footer } from "../utills/interface"

export default async  function Footer() {
    const footerText: Footer = await getFooter()
  return (
    <div className={container}>

        <div className={words}>
        {footerText?.words}
        </div>
        <div className={email}>
        {footerText?.email}
        </div>
        </div>
  )
}

const container=`
mt-auto 
flex
gap-2
justify-center
text-sm
`
const words=`
text-xs
`
const email=`
text-xs
text-gray-500
`
