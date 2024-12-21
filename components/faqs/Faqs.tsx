"use client"
import React from "react"
import { Footer } from "../utilities/Footer"
import { NeedHelp } from "./NeedHelp"
import { Newsletter } from "../utilities/Newsletter"
import { Questions } from "./Questions"
import { OtherQuestions } from "./OtherQuestions"
import { OtherContacts } from "../utilities/OtherContacts"

export const Faqs = () => {
  return (
    <div className="overflow-x-hidden">
      <NeedHelp />
      <Questions />
      <OtherQuestions />
      <OtherContacts />
      <Newsletter />
      <Footer />
    </div>
  )
}
