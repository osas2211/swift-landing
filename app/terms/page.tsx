import { Header } from "@/components/Header"
import { Footer } from "@/components/utilities/Footer"
import TermsAndConditions from "@/components/utilities/TermsAndConditions"
import React from "react"

export const metadata = {
  title: "Terms & Conditions",
  description:
    "SwiftVia Terms & Conditons explains everything you should know about using our services including apps, and websites amongs others.",
  openGraph: {
    images: "/assets/swiftvia-logo.png",
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
