"use client"
import React from "react"
import { Footer } from "../utilities/Footer"
import { NeedHelp } from "./NeedHelp"
import { Newsletter } from "../utilities/Newsletter"
import { Questions } from "./Questions"

export const Faqs = () => {
  return (
    <div>
      <NeedHelp />
      <Questions />
      <Newsletter />
      <Footer />
    </div>
  )
}
