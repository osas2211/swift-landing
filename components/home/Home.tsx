"use client"
import React, { useEffect } from "react"
import { Header } from "../Header"
import { Hero } from "./Hero"
import gsap from "gsap"
import { Slider } from "./Slider"
import { WhoWeAre } from "./WhoWeAre"
import { HowItWorks } from "./HowItWorks"
import { SendAndRecieve } from "./SendAndRecieve"
import { Faqs } from "./Faqs"
import { BorderlessDelivery } from "./BorderlessDelivery"

export const HomePage = () => {
  const tl = gsap.timeline({})
  useEffect(() => {
    gsap.to("#home-body", { opacity: 1, duration: 0.1 })
  }, [])
  return (
    <div id="home-body" className="home-body overflow-x-hidden">
      <Header tl={tl} />
      <div className="2xl:mt-[180px] mt-[150px]">
        <div className="md:my-[90px] xl:mb-[250px] my-8 mt-6">
          <Hero tl={tl} />
        </div>
        <div>
          <Slider />
        </div>
        <div>
          <WhoWeAre />
        </div>
        <div>
          <HowItWorks />
        </div>
        <div>
          <SendAndRecieve />
        </div>
        <div>
          <Faqs />
        </div>
        <div>
          <BorderlessDelivery />
        </div>
      </div>
    </div>
  )
}
