import { ContactUs } from "@/components/contact-us/ContactUs"
import { Header } from "@/components/Header"
import React from "react"

const images = "https://res.cloudinary.com/ddr8rihqd/image/upload/v1714116278/logo/SwiftVia-Logo_qamclw.png"
 
export const metadata = {
  title: "Contact Us",
  description:
    "Reach out to us for any issues, requests. Our customer support team are ready to meet your needs.",
  openGraph: {
    images,
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
