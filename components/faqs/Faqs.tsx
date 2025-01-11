"use client"
import React, { useEffect, useRef } from "react"
import { Footer } from "../utilities/Footer"
import { NeedHelp } from "./NeedHelp"
import { Newsletter } from "../utilities/Newsletter"
import { Questions } from "./Questions"
import { OtherQuestions } from "./OtherQuestions"
import { OtherContacts } from "../utilities/OtherContacts"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useLoader } from "@/hooks/useLoader"

export const Faqs = () => {
  const timeline = useRef(gsap.timeline({ paused: true }))
  const scope: React.Ref<HTMLDivElement> = useRef(null)
  const { loading } = useLoader()
  useGSAP(
    () => {
      timeline.current
        .fromTo(
          ".up-text-faq",
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 }
        )
        .fromTo(".map-svg", { opacity: 0 }, { opacity: 1, stagger: 0.1 })
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
      <NeedHelp />
      <Questions />
      <OtherQuestions />
      <OtherContacts />
      <Newsletter />
      <Footer />
    </div>
  )
}
