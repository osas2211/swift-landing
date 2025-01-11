import { GetStarted } from "@/components/get-started/GetStarted"
import { Header } from "@/components/Header"
import React from "react"

export const metadata = {
  title: "Get Started",
}

const GetStartedPage = () => {
  return (
    <div>
      <Header />
      <div>
        <GetStarted />
      </div>
    </div>
  )
}

export default GetStartedPage
