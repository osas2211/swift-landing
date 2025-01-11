"use client"
import React, { ReactNode, use, useEffect, useRef } from "react"
import { Tabs } from "../utilities/Tabs"
import { MoneyIcon } from "../icons/MoneyIcon"
import { PercentIcon } from "../icons/PercentIcon"
import { TrackingIcon } from "../icons/TrackingIcon"
import { PercelIcon2 } from "../icons/PercelIcon"
import { NearRiderIcon } from "../icons/NearRiderIcon"
import { horizontalLoop } from "@/helpers/horizontalScrollHelper"
import gsap from "gsap"
import {
  customerItems,
  logisticsItems,
  riderItems,
} from "@/constants/about-values"

export const OurValue = () => {
  const tabItems = [
    {
      title: "Customer",
      children: <SubTab items={customerItems} />,
    },
    {
      title: "Rider",
      children: <SubTab items={riderItems} />,
    },
    {
      title: "Logistic",
      children: <SubTab items={logisticsItems} />,
    },
  ]
  return (
    <div className="md:my-[153px] my-[70px] ">
      <div className="max-w-[1590px] mx-auto p-4 lg:py-[90px] py-6 lg:px-[70px] px-4">
        <div>
          <p className="text-[#60605E]">Our Value</p>
          <h2 className="max-w-[631px] md:text-[64px] md:leading-[84px] text-[24px] leading-[30px] mt-2 font-medium">
            Powering Cutting-Edge{" "}
            <span className="text-[#37913B]">Solutions</span>
          </h2>
          <p className="md:my-[32px] my-4 md:text-[18px] md:leading-[26px] text-[#7C7C7A] text-sm max-w-[627px]">
            Our team supports logistics partners and regularly checks in with
            independent riders to help grow their businesses.
          </p>
        </div>
      </div>
      <div className="2xl:ml-[11%] lg:ml-[2.5%] pl-4 md:pl-0 overflow-hidden">
        <Tabs {...{ tabItems }} />
      </div>
    </div>
  )
}

const SubTab = ({
  items,
}: {
  items: {
    icon: ReactNode
    title: string
    body: string
  }[]
}) => {
  const boxes = useRef<(HTMLDivElement | null)[]>([])
  // const boxes = Array.from(document?.querySelectorAll(".value-card"))
  const loop = horizontalLoop(boxes.current, { paused: true })
  const [hasMoved, setHasMoved] = React.useState(false)
  const dots = [0, 2]
  const [activeDot, setActiveDot] = React.useState(0)

  return (
    <div>
      <div className="flex w-[max-content]">
        {items.map((item, index) => {
          boxes.current.push(null)
          return (
            <div
              key={index}
              className="!pr-5 value-card"
              ref={(el) => (boxes.current[index] = el) as any}
            >
              <div className="items-center gap-4 inline-block bg-[#CEFBD0] w-[309px] h-[296px] p-4 md:py-6 md:px-[18px] rounded-[12px] mb-4">
                <div className="w-[44px] h-[44px] bg-[#FFFFFF] flex items-center justify-center rounded-full">
                  {item.icon}
                </div>
                <div className="mt-[48px]">
                  <h3 className="md:text-[18px] md:leading-[26px] font-medium mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#454544] text-sm leading-5">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-between gap-[18px] md:mt-16 mt-5 max-w-[1590px] mx-auto p-4">
        <div></div>
        <div className="flex items-center gap-[18px] ">
          <div
            className="w-12 h-12 rounded-full border-[1px] border-[#37913B] flex items-center justify-center cursor-pointer rotate-180"
            onClick={() => {
              if (!hasMoved) {
                setHasMoved(() => {
                  loop.toIndex(-1, { duration: 0.7, ease: "power1.inOut" })
                  return true
                })
              } else {
                loop.previous({ duration: 0.7, ease: "power1.inOut" })
              }
            }}
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00005 1C1.00005 1 7 5.4189 7 7C7 8.5812 1 13 1 13"
                stroke="#37913B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className="w-12 h-12 rounded-full border-[1px] border-[#37913B] flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (!hasMoved) {
                setHasMoved(() => {
                  loop.toIndex(1, { duration: 0.7, ease: "power1.inOut" })
                  return true
                })
              } else {
                loop.next({ duration: 0.7, ease: "power1.inOut" })
              }
            }}
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00005 1C1.00005 1 7 5.4189 7 7C7 8.5812 1 13 1 13"
                stroke="#37913B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          {/* {dots.map((dot, index) => {
            const toIndex = 1 / ((dot + 0) / dots.length)
            return (
              <div
                key={index}
                className={`w-4 h-4 rounded-full bg-[#000] cursor-pointer ${
                  activeDot === index
                    ? "bg-[#000] scale-[1.4] transform"
                    : "bg-[#E5E5E5]"
                }`}
                onClick={() => {
                  loop.toIndex(toIndex, { duration: 0.7, ease: "power1.inOut" })
                  setActiveDot(index)
                  !hasMoved && setHasMoved(true)
                }}
              ></div>
            )
          })} */}
        </div>
      </div>
    </div>
  )
}
