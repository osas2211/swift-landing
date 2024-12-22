"use client"
import React from "react"
import { Button } from "../utilities/Button"
import { PerformanceSvg } from "./PerformanceSvg"

export const ElevateBuisness = () => {
  return (
    <div className="md:my-[153px] my-[70px] md:px-[70px] px-4 max-w-[1590px] mx-auto flex items-center justify-between gap-4 md:flex-row flex-col">
      <div className="max-w-[630px]">
        <h2 className="md:text-[56px] text-[24px] leading-[32px] md:leading-[74px] md:tracking-[-1%]">
          Ready to elevate your logistics business?
        </h2>
        <p className="text-[#565656] md:text-[16px] md:leading-[22px] text-sm mt-4 md:tracking-[0.5%]">
          Our platform offers unbeatable deals and innovative solutions to
          streamline your operations, giving your business the wings it needs to
          soar above the competition. Let&apos;s move smarter, faster, and
          farther together
        </p>

        <div className="mt-6 md:mt-[66px]">
          <Button className="md:!px-14">Get Started For FREE</Button>
        </div>
      </div>

      <PerformanceSvg />
    </div>
  )
}
