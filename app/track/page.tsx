import { Header } from "@/components/Header"
import { Track } from "@/components/track/Track"
import React from "react"

export const metadata = {
  title: "Track Delivery Package",
  description:
    "Track any SwiftVia Logistics delivery using the generated order number from our app once a delivery request is created.",
  openGraph: {
    images: "/assets/SwiftVia-Track.png",
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
