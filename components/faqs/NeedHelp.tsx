"use client"
import React from "react"
import { MapSvg } from "./MapSvg"
import { Button } from "../utilities/Button"
import Link from "next/link"

export const NeedHelp = () => {
  return (
    <div className="md:mt-[183px] md:mb-[130px] my-[90px] mb-[50px] max-w-[1590px] mx-auto p-4 flex justify-between gap-8 md:flex-row flex-col lg:px-[70px] px-4">
      <div>
        <div className="overflow-hidden">
          <h2 className="md:text-[64px] md:leading-[82px] font-medium text-[24px] leading-[30px] max-w-[646px] up-text-faq">
            You Need Help? No Worries We Are Here To Help You
          </h2>
        </div>
        <div className="overflow-hidden">
          <p className="max-w-[646px] text-[#454544] mt-5 md:text-lg md:leading-[26px] text-[16px] up-text-faq">
            Explore our FAQs section to find answers to all your questions about
            our products, services, and more.
          </p>
        </div>
        <div className="md:mt-[68px] mt-7 overflow-hidden">
          <Link
            href={"mailto:contact@swiftvia.com"}
            className="inline-block up-text-faq"
          >
            <Button variant="primary" size="large">
              Talk to us
            </Button>
          </Link>
        </div>
      </div>
      <div className="map-svg">
        <MapSvg />
      </div>
    </div>
  )
}
