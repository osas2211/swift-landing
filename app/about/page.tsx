import { About } from "@/components/about/About"
import { Header } from "@/components/Header"
import React from "react"

export const metadata = {
  title: "About Us",
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
