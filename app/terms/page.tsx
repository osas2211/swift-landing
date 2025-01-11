import { GetStarted } from "@/components/get-started/GetStarted"
import { Header } from "@/components/Header"
import { Footer } from "@/components/utilities/Footer"
import TermsAndConditions from "@/components/utilities/TermsAndConditions"
import React from "react"

export const metadata = {
  title: "Terms and Conditions",
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
