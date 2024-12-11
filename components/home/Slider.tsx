"use client"
import React from "react"
import { BankIcon } from "../icons/Bank"
import { PercelIcon } from "../icons/Percel"
import { RiderIcon } from "../icons/Rider"
import { SupportIcon } from "../icons/Support"
import Image from "next/image"

export const Slider = () => {
  return (
    <div className="w-full 2xl:ml-[9%] lg:ml-[2.5%] ml-0 lg:mt-[143px] reveal-display pb-7">
      <div>
        <div className="flex gap-6">
          <div className="w-[30%] lg:pt-12">
            <p className="text-4xl leading-[54px]">
              Building a logistics platform to grow your{" "}
              <span className="text-[#40A945]">business.</span>
            </p>
            <div className="overflow-hidden">
              <p className="md:my-[27px] my-5 text-[#7C7C7A] up-text md:text-[16px] text-sm">
                Grow your logistics business with us. Our platform offers a
                comprehensive dashboard to track and optimize your performance.
              </p>
            </div>
            <div>
              <ul className="space-y-7">
                <li className="flex items-center gap-3 text-sm text-[#7C7C7A] px-[8px] py-[6px]">
                  <BankIcon />
                  <p>Financial Insight</p>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#7C7C7A] px-[8px] py-[6px]">
                  <PercelIcon />
                  <p>Order management</p>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#7C7C7A] px-[8px] py-[6px]">
                  <RiderIcon />
                  <p>Rider Accessibility</p>
                </li>

                <li className="flex gap-3 text-sm text-[#7C7C7A] bg-secondary px-[8px] py-[6px] pb-3 rounded-lg md:w-[296px]">
                  <div className="w-[24px]">
                    <SupportIcon />
                  </div>
                  <div>
                    <p className="text-black mb-1">Internal Support</p>
                    <p className="text-xs">
                      We campaign and support our logistics partner on how they
                      can grow their business
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-32">
            <div>
              <Image
                src={"/assets/swift-home-page.svg"}
                alt=""
                // fill={true}
                // className="w-full h-full"
                width={1000}
                height={555}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
