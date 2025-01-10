"use client"
import React from "react"
import { Accordion } from "../utilities/Accordion"
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        optio ducimus dolor quaerat sit, natus est odio cum sunt, accusantium
        pariatur dignissimos maiores dolores provident placeat iusto non
        perspiciatis magnam.
      </div>
    ),
  },
  {
    title: "How does SwiftVia ensure package security during delivery?",
    content: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        optio ducimus dolor quaerat sit, natus est odio cum sunt, accusantium
        pariatur dignissimos maiores dolores provident placeat iusto non
        perspiciatis magnam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Asperiores optio ducimus dolor quaerat sit, natus est odio cum
        sunt, accusantium pariatur dignissimos maiores dolores provident placeat
        iusto non perspiciatis magnam.
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
