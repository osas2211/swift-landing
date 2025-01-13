import { ContactUs } from "@/components/contact-us/ContactUs"
import { Header } from "@/components/Header"
import React from "react"

export const metadata = {
  title: "Contact Us",
  description:
    "Reach out to us for any issues, requests. Our customer support team are ready to meet your needs.",
  openGraph: {
    images: "/assets/swiftvia-logo.png",
    title: "Contact Us | SwiftVia Logistics",
    description:
      "Reach out to us for any issues, requests. Our customer support team are ready to meet your needs.",
  },
}

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div>
        <ContactUs />
      </div>
    </div>
  )
}

export default ContactPage
