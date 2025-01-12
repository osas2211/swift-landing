import { About } from "@/components/about/About"
import { Header } from "@/components/Header"
import React from "react"

const images =
  "https://res.cloudinary.com/ddr8rihqd/image/upload/v1714116278/logo/SwiftVia-Logo_qamclw.png"

export const metadata = {
  title: "About Us",
  description:
    "Do you need reliable delivery service? SwiftVia Logistics has you covered. Send your packages with ease and peace of mind.",
  openGraph: {
    images,
    title: "About Us",
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
