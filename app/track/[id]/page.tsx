import { Header } from "@/components/Header"
import { TrackingDetails } from "@/components/track/TrackingDetails"
import { Footer } from "@/components/utilities/Footer"
import React from "react"

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
