"use client"
import { useLoader } from "@/hooks/useLoader"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useEffect, useRef } from "react"
import { MeetSwiftvia } from "./MeetSwiftvia"
import { RaisingTheBar } from "./RaisingTheBar"
import { OurStory } from "./OurStory"
import { OurValue } from "./OurValue"
import { OurGoal } from "./OurGoal"
import { MeetTheTeam } from "./MeetTheTeam"
import { Newsletter } from "../utilities/Newsletter"
import { Footer } from "../utilities/Footer"

export const About = () => {
  const timeline = useRef(gsap.timeline({ paused: true }))
  const scope = useRef(null)
  const { loading } = useLoader()
  useGSAP(
    () => {
      timeline.current
        .fromTo(
          ".up-text-about",
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 }
        )
        .fromTo(
          ".about-reveal",
          { opacity: 0 },
          { opacity: 1, stagger: 0.1, ease: "expo.out" }
        )
        .fromTo(
          "#bar-cross-lines",
          { clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)" },
          { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 3 }
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
    <div ref={scope}>
      <MeetSwiftvia />
      <RaisingTheBar />
      <OurStory />
      <OurValue />
      <OurGoal />
      <MeetTheTeam />
      <Newsletter />
      <Footer />
    </div>
  )
}
