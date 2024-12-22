"use client"
import React from "react"
import { Button } from "../utilities/Button"

export const TrackingHero = () => {
  return (
    <div className="text-center max-w-[1590px] mx-auto md:my-[183px] my-[140px] md:px-[70px] px-4">
      <div className="mb-7 md:mb-14">
        <h2 className="md:text-[64px] md:leading-[82px] text-[24px] leading-[30px] font-normal">
          Track Your Order
        </h2>
        <p className="mt-4 md:mt-6 text-[#60605E] md:text-[16px] md:leading-[22px] text-sm tracking-[0.75%] max-w-[522px] mx-auto">
          Keep an eye on your package&apos;s journey track your order to see how
          it&apos;s making its way to you, step by step
        </p>
      </div>
      <div className="flex items-center gap-4 flex-col max-w-[389px] mx-auto md:mt-[39px] mt-[23px] relative z-[1] md:mb-[280px] mb-[200px]">
        <input
          className="w-full outline-none bg-[#F7F8F3] h-[48px] inline-block rounded-lg px-[20px] py-[14px] text-[14px]"
          placeholder="Input order number"
        />
        <Button className="w-full">Track</Button>
      </div>
    </div>
  )
}
