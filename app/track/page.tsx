import { Header } from "@/components/Header"
import { Track } from "@/components/track/Track"
import React from "react"

export const metadata = {
  title: "Track",
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
