import { GetStarted } from "@/components/get-started/GetStarted"
import { Header } from "@/components/Header"
import { urls } from "@/constants/url"
import React from "react"

  export const metadata = {
  title: "Download App: Google & IOS App Stores",
  description:
    "SwiftVia App offers you the best delivery experience, tracking, active customer support, realiable riders, ratings and more.",
  openGraph: {
    images: "/assets/SwiftVia-AppStore.png",
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
