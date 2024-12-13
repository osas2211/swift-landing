"use client"
import React, { useState } from "react"
import { Button } from "../utilities/Button"
import Image from "next/image"

export const HowItWorks = () => {
  return (
    <div className="my-[103px]">
      <div className="py-5 text-center space-y-4 mb-[12px] md:w-[632px] mx-auto">
        <p className="text-[40px]">How SwiftVia Works</p>
      </div>
      <Tab />
    </div>
  )
}

const Tab = () => {
  const tabItems = [
    {
      title: "Customer",
      children: <CustomerTab />,
    },
    {
      title: "Rider",
      children: <></>,
    },
    {
      title: "Logistic",
      children: <></>,
    },
  ]
  const [active, setActive] = useState(0)
  return (
    <div className="2xl:w-[62%] lg:w-[75%] w-[100%] mx-auto">
      <div className="bg-secondary rounded-full px-[9px] py-[5px] w-[300px] mx-auto flex mb-[90px]">
        {tabItems.map((item, index) => {
          const isActive = index === active
          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`${
                isActive
                  ? "bg-primary rounded-full text-white md:w-[108px] w-[80px]"
                  : ""
              } py-[11px] text-center text-xs w-[108px] cursor-pointer transition-all`}
            >
              {item.title}
            </div>
          )
        })}
      </div>
      <div>{tabItems[active].children}</div>
    </div>
  )
}

const CustomerTab = () => {
  return (
    <div className="flex items-center gap-14 justify-center">
      <div>
        <div className="space-y-4">
          <p className="text-[#60605E] text-[18px]">01</p>
          <p className="font-medium text-2xl">Download & Create an Account</p>
          <p className="text-sm max-w-[362px] text-[#60605E]">
            Find and download the customer app from your app store. Open the
            app, select &quot;Create Account,&quot; and enter your personal
            details, including your name, email, phone number, and delivery
            address.
          </p>
        </div>
        <div className="flex items-center md:flex-row flex-col md:gap-6 gap-3 mt-[50px]">
          <div className="overflow-hidden md:w-auto w-full">
            <Button
              size="small"
              className="up-text md:w-auto w-full"
              beforeicon={
                <Image
                  alt=""
                  src={"/assets/playstore.svg"}
                  height={24}
                  width={24}
                />
              }
            >
              Playstore
            </Button>
          </div>
          <div className="overflow-hidden md:w-auto w-full">
            <Button
              size="small"
              className="up-text md:w-auto w-full"
              beforeicon={
                <Image
                  alt=""
                  src={"/assets/apple.svg"}
                  height={24}
                  width={24}
                />
              }
            >
              Applestore
            </Button>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: 'url("../assets/phone-hand.png")',
          backgroundRepeat: "no-repeat",
        }}
        className="h-[398px] w-[529px]"
      ></div>
    </div>
  )
}
