"use client"
import React from "react"
import { Newsletter } from "../utilities/Newsletter"
import { Footer } from "../utilities/Footer"
import { Hero } from "./Hero"
import { ElevateBuisness } from "./ElevateBuisness"
import { GetStartedFAQs } from "./Faqs"

export const GetStarted = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ElevateBuisness />
      <GetStartedFAQs />
      <Newsletter />
      <Footer />
    </div>
  )
}
