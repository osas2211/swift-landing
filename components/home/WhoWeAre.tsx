"use client"
import React from "react"
import { Button } from "../utilities/Button"
import { SalesPerson } from "./SalesPerson"
import { SalesPersonMobile } from "./SalesPersonMobile"

export const WhoWeAre = () => {
  return (
    <div className="md:my-[103px] my-[20px]">
      <div className="py-5 text-center md:space-y-4 space-y-2 mb-[42px] md:w-[632px] mx-auto px-4">
        <p className="text-[#60605E] md:text-[18px] font-medium text-[16px]">
          Who We Are.
        </p>
        <p className="md:text-[40px] text-[24px]">We Are Swiftvia Africa</p>
        <p className="text-[#60605E] md:text-[16px] text-sm">
          Connecting riders, businesses, and partners across Africa in a
          sustainable way—so every journey feels like progress.
        </p>
      </div>
      <div className="bg-secondary px-4 py-6">
        <div className="flex md:items-center md:flex-row flex-col gap-7 justify-between max-w-[1590px] mx-auto md:py-[59px]">
          <div className="md:w-[44%]">
            <p className="md:text-[40px] md:leading-[54px] text-[24px] leading-[32px] font-semibold">
              Connecting Riders, Businesses, and Customers for Seamless Delivery
            </p>
            <div className="overflow-hidden">
              <p className="md:my-[27px] my-5 text-[#60605E] up-text md:text-[16px] tracking-[0.75%] leading-[22px] md:w-[635px] text-sm">
                Our platform brings together riders, logistics companies, and
                businesses in a single, efficient network. We simplify delivery
                by creating direct connections, making it easier for businesses
                to reach their customers and for riders to take on new
                opportunities.
              </p>
            </div>
            <div className="overflow-hidden md:w-auto w-full md:mt-[50px]">
              <Button size="large" className="up-text md:w-auto bg-[#123014]">
                Learn more
              </Button>
            </div>
          </div>

          <div>
            <div>
              <SalesPerson />
              <SalesPersonMobile />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
