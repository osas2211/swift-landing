"use client"
import React from "react"
import { Button } from "../utilities/Button"
import { SalesPerson } from "./SalesPerson"

export const WhoWeAre = () => {
  return (
    <div className="my-[103px]">
      <div className="py-5 text-center space-y-4 mb-[42px] md:w-[632px] mx-auto">
        <p className="text-[#60605E] text-[18px] font-medium">Who We Are.</p>
        <p className="text-[40px]">We Are Swiftvia Africa</p>
        <p className="text-[#60605E]">
          Connecting riders, businesses, and partners across Africa in a
          sustainable way—so every journey feels like progress.
        </p>
      </div>
      <div className="bg-secondary">
        <div className="flex items-center gap-7 justify-between 2xl:w-[82%] lg:w-[95%] w-[100%] mx-auto py-[79px]">
          <div className="w-[44%]">
            <p className="text-[40px] leading-[54px] font-semibold">
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
              <Button
                size="large"
                className="up-text md:w-auto w-full bg-[#123014]"
              >
                Learn more
              </Button>
            </div>
          </div>

          <div>
            <SalesPerson />
          </div>
        </div>
      </div>
    </div>
  )
}
