"use client"
import { useLoader } from "@/hooks/useLoader"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useEffect, useRef } from "react"
import { Newsletter } from "../utilities/Newsletter"
import { Footer } from "../utilities/Footer"
import { Hero } from "./Hero"
import { ElevateBuisness } from "./ElevateBuisness"
import { GetStartedFAQs } from "./Faqs"

export const GetStarted = () => {
  const timeline = useRef(gsap.timeline({ paused: true }))
  const scope = useRef(null)
  const { loading } = useLoader()
  useGSAP(
    () => {
      timeline.current
        .fromTo(
          ".up-text-get-started",
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 }
        )
        .fromTo(
          ".get-started-reveal",
          { opacity: 0 },
          { opacity: 1, stagger: 0.1 }
        )
    },
    { scope }
  )
  useEffect(() => {
    if (!loading) {
      timeline.current.play()
    }
  }, [loading])
  return (
    <div className="overflow-x-hidden" ref={scope}>
      <Hero />
      <ElevateBuisness />
      <GetStartedFAQs />
      <Newsletter />
      <Footer />
    </div>
  )
}
