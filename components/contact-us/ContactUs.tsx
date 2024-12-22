"use client"
import React from "react"
import { OtherContacts } from "../utilities/OtherContacts"
import { Newsletter } from "../utilities/Newsletter"
import { Footer } from "../utilities/Footer"
import { ContactForm } from "./ContactForm"

export const ContactUs = () => {
  return (
    <div className="overflow-x-hidden">
      <ContactForm />
      <OtherContacts showText />
      <Newsletter />
      <Footer />
    </div>
  )
}
