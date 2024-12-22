"use client"
import React from "react"
import { Button } from "../utilities/Button"
import { PerformanceSvg } from "./PerformanceSvg"
import { ThinkingGirlSvg } from "./ThinkingGirlSvg"
import Link from "next/link"

export const GetStartedFAQs = () => {
  return (
    <div className="md:my-[153px] my-[70px] md:px-[70px] px-4 max-w-[1590px] mx-auto flex items-center justify-between gap-4 md:flex-row flex-col-reverse">
      <ThinkingGirlSvg />
      <div className="max-w-[622px]">
        <h2 className="md:text-[56px] text-[24px] leading-[32px] md:leading-[74px] md:tracking-[-1%]">
          Want to learn more about our product?
        </h2>
        <p className="text-[#565656] md:text-[16px] md:leading-[22px] text-sm mt-4 md:tracking-[0.5%]">
          Got questions? Our comprehensive FAQs have all the answers you need to
          understand how our product works and how it can benefit your business.
          Explore now and get the clarity you&apos;re looking for
        </p>

        <div className="mt-6 md:mt-[66px]">
          <Link href={"/faqs"}>
            <Button className="md:!px-14">Learn more</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
