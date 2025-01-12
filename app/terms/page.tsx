import { Header } from "@/components/Header"
import { Footer } from "@/components/utilities/Footer"
import TermsAndConditions from "@/components/utilities/TermsAndConditions"
import React from "react"

const images =
  "https://res.cloudinary.com/ddr8rihqd/image/upload/v1714116278/logo/SwiftVia-Logo_qamclw.png"

export const metadata = {
  title: "Terms & Conditions",
  description:
    "SwiftVia Terms & Conditons explains everything you should know about using our services including apps, and websites amongs others.",
  openGraph: {
    images,
    title: "Terms & Conditions | SwiftVia Logistics",
    description:
      "SwiftVia Terms & Conditons explains everything you should know about using our services including apps, and websites amongs others.",
  },
}

const TermsPage = () => {
  return (
    <div>
      <Header />
      <div>
        <TermsAndConditions />
        <Footer />
      </div>
    </div>
  )
}

export default TermsPage
