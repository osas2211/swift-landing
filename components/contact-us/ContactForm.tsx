"use client"
import React from "react"
import { Button } from "../utilities/Button"

export const ContactForm = () => {
  return (
    <div className="bg-[#FAFFFA]">
      <div className="md:mt-[53px] md:mb-[90px] my-[40px] mb-[50px] max-w-[1590px] mx-auto p-4 flex justify-between gap-8 md:flex-row flex-col lg:px-[70px] lg:py-[90px] py-[70px] px-4">
        <div>
          <h2 className="md:text-[64px] md:leading-[82px] text-[24px] leading-[30px] font-normal">
            Contact us
          </h2>
          <p className="mt-3 md:mt-5 text-[#7C7C7A] md:text-[16px] md:leading-[22px] text-sm tracking-[0.75%] max-w-[526px]">
            Get instant assistance with any of your concerns by messaging our
            24/7 customer support team. We&apos;re here to help you anytime, day
            or night
          </p>
        </div>

        <div className="max-w-[528px] w-full px-5 md:px-8 py-4 md:py-6 bg-white rounded-3xl shadow-2xl shadow-[#abcebc6e]">
          <p className="mb-5 md:mb-8 text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] tracking-[0.5%]">
            Customer Information
          </p>
          <form action="" method="post">
            <div className="grid grid-cols-1 gap-4 text-[#7C7C7A] tracking-[1%] text-sm">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full outline-none bg-transparent h-[48px] inline-block  px-[4px] py-[14px] border-b-[1px] border-b-[#D7D8D3] text-[14px]"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="w-full outline-none bg-transparent h-[48px] inline-block  px-[4px] py-[14px] border-b-[1px] border-b-[#D7D8D3] text-[14px]"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                className="w-full outline-none bg-transparent h-[48px] inline-block px-[4px] py-[14px] border-b-[1px] border-b-[#D7D8D3] text-[14px]"
              />
              <div>
                <p className="text-sm px-1 py-[14px]">Message</p>
                <textarea
                  name="message"
                  id="message"
                  className="w-full outline-none bg-transparent h-[96px] inline-block rounded-[4px] px-[10px] py-[8px] text-[14px] border-[1px] border-[#D7D8D3]"
                />
              </div>
              <div className="my-4">
                <Button>Submit</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
