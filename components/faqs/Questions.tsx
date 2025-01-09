"use client"
import React, { useState } from "react"
import { SearchIcon } from "../icons/Search"
import { Tabs } from "../utilities/Tabs"
import { Accordion } from "../utilities/Accordion"
import { faqs as all_faqs } from "@/constants/faqs"

export const Questions = () => {
  const [faqs, setFaqs] = useState<
    {
      title: string
      content: React.ReactNode
      type: "Rider" | "Customer" | "Logistics" | "General"
    }[]
  >(all_faqs)
  const searchFAQ = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value?.toLowerCase()
    console.log(value)
    const filtered = all_faqs.filter((faq) => {
      return (
        faq.content.toLowerCase().includes(value) ||
        faq.title.toLowerCase().includes(value)
      )
    })
    setFaqs(filtered)
    // console.log(filtered)
  }
  const tabItems = [
    {
      title: "All",
      children: <Accordion items={faqs} />,
    },
    {
      title: "General",
      children: (
        <Accordion items={faqs?.filter((faq) => faq.type === "General")} />
      ),
    },
    {
      title: "Customer",
      children: <Accordion items={faqs} />,
    },
    {
      title: "Rider",
      children: (
        <Accordion items={faqs?.filter((faq) => faq.type === "Rider")} />
      ),
    },
    {
      title: "Logistic",
      children: (
        <Accordion items={faqs?.filter((faq) => faq.type === "Logistics")} />
      ),
    },
  ]
  return (
    <div className="md:my-[133px] my-[50px] max-w-[1590px] mx-auto p-4">
      <div className="flex items-center justify-center gap-4 flex-col max-w-[640px] mx-auto md:mt-[39px] mt-[23px] relative z-[1]">
        <input
          className="w-full outline-none bg-[#F7F8F3] h-[48px] inline-block rounded-full px-[20px] md:pl-[75px] pl-[50px] py-[14px] text-[14px]"
          placeholder="Search for question"
          onChange={searchFAQ}
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
