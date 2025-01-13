import { About } from "@/components/about/About"
import { Header } from "@/components/Header"
import React from "react"

export const metadata = {
  title: "About Us",
  description:
    "Do you need reliable delivery service? SwiftVia Logistics has you covered. Send your packages with ease and peace of mind.",
  openGraph: {
    images: "/assets/swiftvia-logo.png",
    title: "About Us | SwiftVia Logistics",
    description:
      "Do you need reliable delivery service? SwiftVia Logistics has you covered. Send your packages with ease and peace of mind.",
  },
}

const ABoutPage = () => {
  return (
    <div>
      <Header />
      <div>
        <About />
      </div>
    </div>
  )
}

export default ABoutPage
