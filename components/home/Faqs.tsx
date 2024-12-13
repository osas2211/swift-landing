"use client"
import React from "react"
import { Accordion } from "../utilities/Accordion"

export const Faqs = () => {
  return (
    <div className="my-[123px] 2xl:w-[82%] lg:w-[95%] w-[100%] mx-auto">
      <p className="text-[40px] mb-10 text-center">Frequently Asked Question</p>
      <div>
        <Accordion />
      </div>
    </div>
  )
}
