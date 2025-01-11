import { Header } from "@/components/Header"
import { TrackingDetails } from "@/components/track/TrackingDetails"
import { Footer } from "@/components/utilities/Footer"
import React from "react"

export const metadata = {
  title: "Track",
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
