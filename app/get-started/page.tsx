import { GetStarted } from "@/components/get-started/GetStarted"
import { Header } from "@/components/Header"
import { urls } from "@/constants/url"
import React from "react"

const images =
  "https://res.cloudinary.com/ddr8rihqd/image/upload/v1714153594/logo/SwiftVia-AppStore_twhamt.png"
export const metadata = {
  title: "Download App: Google & IOS App Stores",
  description:
    "SwiftVia App offers you the best delivery experience, tracking, active customer support, realiable riders, ratings and more.",
  openGraph: {
    images,
    title: "Download SwiftVia App: Google & IOS App Stores",
    description:
      "SwiftVia App offers you the best delivery experience, tracking, active customer support, realiable riders, ratings and more.",
  },
}

const GetStartedPage = () => {
  return (
    <div>
      <Header />
      <div>
        <GetStarted />
      </div>
    </div>
  )
}

export default GetStartedPage
