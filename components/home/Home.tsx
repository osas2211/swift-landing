"use client"
import React, { useEffect } from "react"
import { Header } from "../Header"
import { Hero } from "./Hero"
import gsap from "gsap"

export const HomePage = () => {
  const tl = gsap.timeline({})
  useEffect(() => {
    gsap.to("#home-body", { opacity: 1, duration: 0.1 })
  }, [])
  return (
    <div id="home-body" className="home-body overflow-x-hidden">
      <Header tl={tl} />
      <div className="md:my-[90px] my-8 mt-6">
        <Hero tl={tl} />
      </div>
    </div>
  )
}
