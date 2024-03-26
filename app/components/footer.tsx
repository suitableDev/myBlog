import { Footer } from "../utills/interface"
import { basicFetch, footerData } from "@/sanity/lib/fetchData"

export default async  function Footer() {
    const footerText: Footer = await basicFetch(footerData)
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
pt-10
pb-4
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
