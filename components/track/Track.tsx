"use client"
import React from "react"
import { Footer } from "../utilities/Footer"
import { TrackingHero } from "./TrackingHero"

export const Track = () => {
  return (
    <div className="overflow-x-hidden">
      <TrackingHero />
      <Footer />
    </div>
  )
}
