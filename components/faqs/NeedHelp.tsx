"use client"
import React from "react"
import { MapSvg } from "./MapSvg"
import { Button } from "../utilities/Button"

export const NeedHelp = () => {
  return (
    <div className="md:mt-[183px] md:mb-[130px] my-[90px] mb-[50px] max-w-[1590px] mx-auto p-4 flex justify-between gap-8 md:flex-row flex-col lg:py-[90px] py-6 lg:px-[70px] px-4">
      <div>
        <h2 className="md:text-[64px] md:leading-[82px] font-medium text-[24px] leading-[30px] max-w-[646px]">
          You Need Help? No Worries We Are Here To Help You
        </h2>
        <p className="max-w-[646px] text-[#454544] mt-5 md:text-lg md:leading-[26px] text-[16px]">
          Explore our FAQs section to find answers to all your questions about
          our products, services, and more.
        </p>
        <div className="md:mt-[68px] mt-7">
          <Button variant="primary" size="large">
            Talk to us
          </Button>
        </div>
      </div>
      <div>
        <MapSvg />
      </div>
    </div>
  )
}
