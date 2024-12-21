"use client"
import React from "react"
import { SearchIcon } from "../icons/Search"
import { Tabs } from "../utilities/Tabs"
import { Accordion } from "../utilities/Accordion"

const items = [
  {
    title: "What is SwiftVia?",
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

export const Questions = () => {
  const tabItems = [
    {
      title: "All",
      children: <Accordion items={[...items, ...items, ...items]} />,
    },
    {
      title: "General",
      children: <Accordion items={[...items, ...items]} />,
    },
    {
      title: "Customer",
      children: <Accordion items={[...items]} />,
    },
    {
      title: "Rider",
      children: <Accordion items={[...items]} />,
    },
    {
      title: "Logistic",
      children: <Accordion items={[...items]} />,
    },
  ]
  return (
    <div className="md:my-[133px] my-[50px] max-w-[1590px] mx-auto p-4">
      <div className="flex items-center justify-center gap-4 flex-col max-w-[640px] mx-auto md:mt-[39px] mt-[23px] relative z-[1]">
        <input
          className="w-full outline-none bg-[#F7F8F3] h-[48px] inline-block rounded-full px-[20px] md:pl-[75px] pl-[50px] py-[14px] text-[14px]"
          placeholder="Search for question"
        />
        <div className="absolute top-[50%] md:left-[40px] left-[25px] transform -translate-y-1/2">
          <SearchIcon />
        </div>
      </div>
      <div className="md:my-[48px] my-[25px]">
        <div className="max-w-[1077px] mx-auto">
          <Tabs tabItems={tabItems} centered variant="light" maxWidth="470px" />
        </div>
      </div>
    </div>
  )
}
