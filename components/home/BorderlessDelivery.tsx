"use client"
import React from "react"
import { Button } from "../utilities/Button"
import { SmilingGirlImage } from "./SmilingGirlImage"
import { SmileGirlImageMobile } from "./SmileGirlImageMobile"

export const BorderlessDelivery = () => {
  return (
    <div className="bg-[#123014] lg:p-[70px] md:p-[40px] md:p-5 py-5 text-white">
      <div className="max-w-[1590px] mx-auto p-4">
        <div className="flex md:flex-row flex-col gap-3 justify-between">
          <div className="max-w-[680px] md:min-h-[560px] flex flex-col justify-between">
            <div>
              <p className="mb-[52px] lg:text-[64px] lg:leading-[84px] md:text-[40px] leading-[58px] text-[36px] leading-[54px] max-w-[672px]">
                Say Hello To Borderless Delivery
              </p>
              <Button className="bg-white !text-primary !rounded-full">
                Get Started
              </Button>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-[126px,1fr,1fr] md:gap-5 gap-2 md:mt-0 mt-8">
              <div>
                <p className="lg:text-[36px] text-[24px] font-semibold">500+</p>
                <p className="md:text-sm text-xs md:w-[160px] text-[#D7D8D3]">
                  Registered Independent Riders
                </p>
              </div>
              <div>
                <p className="lg:text-[36px] text-[24px] font-semibold">50+</p>
                <p className="md:text-sm text-xs md:w-[160px] text-[#D7D8D3]">
                  Registered Logistic Partners
                </p>
              </div>
              <div>
                <p className="lg:text-[36px] text-[24px] font-semibold">
                  5000+
                </p>
                <p className="md:text-sm text-xs md:w-[160px] text-[#D7D8D3]">
                  Registered Customer base
                </p>
              </div>
            </div>
          </div>

          <div>
            <SmilingGirlImage />
            <SmileGirlImageMobile />
          </div>
        </div>
      </div>
    </div>
  )
}
