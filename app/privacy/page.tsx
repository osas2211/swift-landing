import { Header } from "@/components/Header"
import { Footer } from "@/components/utilities/Footer"
import PrivacyPolicy from "@/components/utilities/PrivacyPolicy"
import React from "react"

const images =
  "https://res.cloudinary.com/ddr8rihqd/image/upload/v1714116278/logo/SwiftVia-Logo_qamclw.png"

export const metadata = {
  title: "Privacy Policy",
  description:
    "SwiftVia Logistics LTD is dedicated to safeguarding your privacy. This Privacy Policy outlines everything relating to your usage of our services and personal information.",
  openGraph: {
    images,
    title: "Privacy Policy | SwiftVia Logistics",
    description:
      "SwiftVia Logistics LTD is dedicated to safeguarding your privacy. This Privacy Policy outlines everything relating to your usage of our services and personal information.",
  },
}

const PrivacyPage = () => {
  return (
    <div>
      <Header />
      <div>
        <PrivacyPolicy />
        <Footer />
      </div>
    </div>
  )
}

export default PrivacyPage
