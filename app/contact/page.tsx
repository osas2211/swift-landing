import { ContactUs } from "@/components/contact-us/ContactUs"
import { Header } from "@/components/Header"
import React from "react"

export const metadata = {
  title: "Contact Us",
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
