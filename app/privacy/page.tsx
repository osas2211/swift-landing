import { GetStarted } from "@/components/get-started/GetStarted"
import { Header } from "@/components/Header"
import { Footer } from "@/components/utilities/Footer"
import PrivacyPolicy from "@/components/utilities/PrivacyPolicy"
import React from "react"

export const metadata = {
  title: "Privacy",
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
