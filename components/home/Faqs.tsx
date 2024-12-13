"use client"
import React from "react"
import { Accordion } from "../utilities/Accordion"

export const Faqs = () => {
  return (
    <div className="my-[123px] max-w-[1100px] mx-auto">
      <p className="text-[40px] mb-10 text-center">Frequently Asked Question</p>
      <div>
        <Accordion />
      </div>
    </div>
  )
}
