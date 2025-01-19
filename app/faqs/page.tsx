import { Faqs } from "@/components/faqs/Faqs"
import { Header } from "@/components/Header"
import React from "react"

export const metadata = {
  title: "FAQs",
  description:
    "Find answers to common questions about our services, pricing, delivery process, and more on the SwiftVia FAQ page",
  openGraph: {
    images: "/assets/swiftvia-logo.png",
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
