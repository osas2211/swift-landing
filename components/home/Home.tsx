"use client"
import React, { useEffect, useState } from "react"
import { Header } from "../Header"
import { Hero } from "./Hero"
import gsap from "gsap"
import { Slider } from "./Slider"
import { WhoWeAre } from "./WhoWeAre"
import { HowItWorks } from "./HowItWorks"
import { SendAndRecieve } from "./SendAndRecieve"
import { Faqs } from "./Faqs"
import { BorderlessDelivery } from "./BorderlessDelivery"
import { Newsletter } from "../utilities/Newsletter"
import { Footer } from "../utilities/Footer"
import { Testimonials } from "./Testimonials"

export const HomePage = () => {
  const [loading, setLoading] = useState(true)

  const tl = gsap.timeline({})
  useEffect(() => {
    gsap.to("#home-body", { opacity: 1, duration: 0.1, delay: -1 })
  }, [])
  return (
    <>
      <div id="home-body" className="home-body overflow-x-hidden">
        <Header tl={tl} />
        <div className="2xl:mt-[180px] md:mt-[150px] mt-[90px]">
          <div className="md:my-[90px] xl:mb-[250px] my-8 mt-0">
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
          <div>
            <Testimonials />
          </div>
          <div>
            <Newsletter />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
