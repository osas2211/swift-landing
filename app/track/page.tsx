import { Header } from "@/components/Header"
import { Track } from "@/components/track/Track"
import React from "react"

const images =
  "https://res.cloudinary.com/ddr8rihqd/image/upload/v1714153018/logo/SwiftVia-Track_l5fjjp.png"
export const metadata = {
  title: "Track Delivery Package",
  description:
    "Track any SwiftVia Logistics delivery using the generated order number from our app once a delivery request is created.",
  openGraph: {
    images,
    title: "Track Delivery Package - Enter Order Number",
    description:
      "Track any SwiftVia Logistics delivery using the generated order number from our app once a delivery request is created.",
  },
}

const TrackingPage = () => {
  return (
    <div>
      <Header />
      <div>
        <Track />
      </div>
    </div>
  )
}

export default TrackingPage
