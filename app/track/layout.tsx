"use client"
import { TrackingDataProvider } from "@/context/TrackingContext"
import React from "react"

const TrackingLayout = ({ children }: { children: React.ReactNode }) => {
  return <TrackingDataProvider>{children}</TrackingDataProvider>
}

export default TrackingLayout
