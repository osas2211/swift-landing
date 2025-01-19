import { Header } from "@/components/Header"
import { TrackingDetails } from "@/components/track/TrackingDetails"
import { Footer } from "@/components/utilities/Footer"
import React from "react"

const images =
  "https://res.cloudinary.com/ddr8rihqd/image/upload/v1714153018/logo/SwiftVia-Track_l5fjjp.png"

export const metadata = {
  title: "Delivery Package Live Tracking",
  description:
    "Track SwiftVia delivery orders, riders locations, timestamp and more.",
  openGraph: {
    images: "/assets/SwiftVia-Track.png",
    title: "Live Tracking Delivery Package",
    description:
      "Track your package live on SwiftVia Logistics using the order number from our app once a delivery request is created.",
  },
  robots: {
    index: false,
    follow: true,
  },
}

const TrackingPage = () => {
  return (
    <div>
      <Header />
      <div>
        <TrackingDetails />
        <Footer />
      </div>
    </div>
  )
}

export default TrackingPage
