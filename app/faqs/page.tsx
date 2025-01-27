import { Faqs } from "@/components/faqs/Faqs"
import { Header } from "@/components/Header"
import React from "react"

const images = "https://res.cloudinary.com/ddr8rihqd/image/upload/v1714116278/logo/SwiftVia-Logo_qamclw.png"
 
export const metadata = {
  title: "FAQs",
  description:
    "Find answers to common questions about our services, pricing, delivery process, and more on the SwiftVia FAQ page",
  openGraph: {
    images,
    title: "FAQs | SwiftVia Logistics",
    description:
      "Find answers to common questions about our services, pricing, delivery process, and more on the SwiftVia FAQ page",
  },
}
const FAQsPage = () => {
  return (
    <div>
      <Header />
      <div>
        <Faqs />
      </div>
    </div>
  )
}
export default FAQsPage
