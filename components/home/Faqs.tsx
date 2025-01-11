"use client"
import React from "react"
import { Accordion } from "../utilities/Accordion"
import Link from "next/link"
const items = [
  {
    title: "What is SwiftVia?",
    content: (
      <div>
        SwiftVia is a logistics company that connects riders to customers for
        efficient package pickups and deliveries. We provide a platform for
        customers to request deliveries, and registered riders are matched to
        complete these orders. This seamless connection allows for fast,
        reliable, and secure delivery services.
      </div>
    ),
  },
  {
    title: "How can I register as a logistics partner with SwiftVia?",
    content: (
      <div>
        You can become a logistics partner by signing up online{" "}
        <Link
          href={"https://logistics.swiftvia.com/auth/signup"}
          target="_blank"
          className="text-primary underline"
        >
          click here.
        </Link>
      </div>
    ),
  },
  {
    title: "How does SwiftVia ensure package security during delivery?",
    content: (
      <div>
        SwiftVia ensures package security through real-time tracking, verified
        riders, digital proof of package delivery, and in-app communications.
      </div>
    ),
  },
]

export const Faqs = () => {
  return (
    <div className="md:my-[123px] my-[70px] max-w-[1100px] mx-auto px-4">
      <p className="md:text-[40px] text-[24px] mb-10 text-center">
        Frequently Asked Question
      </p>
      <div>
        <Accordion items={items} />
      </div>
    </div>
  )
}
