"use client"
import React from "react"
import { Button } from "../utilities/Button"
import { SmilingGirlImage } from "./SmilingGirlImage"

export const BorderlessDelivery = () => {
  return (
    <div className="bg-[#123014] lg:p-[70px] md:p-[40px] p-5 text-white">
      <div className="max-w-[1590px] mx-auto p-4">
        <div className="flex gap-3 justify-between">
          <div className="max-w-[680px] md:min-h-[560px] flex flex-col justify-between">
            <div>
              <p className="mb-[52px] text-[64px] leading-[84px] max-w-[672px]">
                Say Hello To Borderless Delivery
              </p>
              <Button className="bg-white !text-primary !rounded-full">
                Get Started
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div>
                <p className="text-[36px] font-semibold">500+</p>
                <p className="text-sm w-[160px] text-[#D7D8D3]">
                  Registered Independent Riders
                </p>
              </div>
              <div>
                <p className="text-[36px] font-semibold">50+</p>
                <p className="text-sm w-[160px] text-[#D7D8D3]">
                  Registered Logistic Partners
                </p>
              </div>
              <div>
                <p className="text-[36px] font-semibold">5000+</p>
                <p className="text-sm w-[160px] text-[#D7D8D3]">
                  Registered Customer base
                </p>
              </div>
            </div>
          </div>

          <div>
            <SmilingGirlImage />
          </div>
        </div>
      </div>
    </div>
  )
}
