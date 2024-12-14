"use client"
import React from "react"
import { Accordion } from "../utilities/Accordion"

export const Faqs = () => {
  return (
    <div className="md:my-[123px] my-[70px] max-w-[1100px] mx-auto px-4">
      <p className="md:text-[40px] text-[24px] mb-10 text-center">
        Frequently Asked Question
      </p>
      <div>
        <Accordion />
      </div>
    </div>
  )
}
