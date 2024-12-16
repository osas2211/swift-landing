"use client"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export const SmoothScroller = ({ children }: { children: React.ReactNode }) => {
  // gsap.registerPlugin(ScrollTrigger)
  const container = useRef(null)
  // useGSAP(() => {}, { scope: container })

  return (
    <div id="smooth-wrapper" ref={container}>
      <div id="smooth-content">{children}</div>
    </div>
  )
}
