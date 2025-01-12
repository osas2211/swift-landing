import { GetStarted } from "@/components/get-started/GetStarted"
import { Header } from "@/components/Header"
import { urls } from "@/constants/url"
import React from "react"

export const metadata = {
  title: {
    default: "SwiftVia Logistics: Experience Fast Dispatch Delivery",
    template: "%s | SwiftVia Logistics",
  },
  description:
    "Find Dispatch Rider Nearby With SwiftVia Logistics, Grow Your Logistics Company, Earn More As A Rider, Live Tracking, Mobile Apps, Powerful Logistics Dashboard!",
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: `${urls.base_url}`,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  image:
    "https://res.cloudinary.com/ddr8rihqd/image/upload/v1711286606/logo/dpitj4bpwpdsgb5q8uiw.png",
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
