"use client"
import React from "react"
import { Reviews } from "./Reviews"

export const Testimonials = () => {
  return (
    <div className="md:my-[153px] my-[70px]">
      <div className="max-w-[1590px] mx-auto p-4">
        <div className="bg-[#F7F8F3] text-sm text-[#999A97] py-2 px-3 rounded-full inline-block">
          <p>Testimonials</p>
        </div>
        <p className="md:text-[36px] md:leading-[54px] text-[22px] leading-[38px] font-medium md:mt-5 mt-3">
          What Customers says about us
        </p>
      </div>

      <div>
        <Reviews />
      </div>
    </div>
  )
}
