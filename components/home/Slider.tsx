"use client"
import React, { useEffect, useRef, useState } from "react"
import { BankIcon } from "../icons/Bank"
import { PercelIcon } from "../icons/Percel"
import { RiderIcon } from "../icons/Rider"
import { SupportIcon } from "../icons/Support"
import Image from "next/image"
import { GoLaw } from "react-icons/go"
import { FaRoute } from "react-icons/fa"
import { MoneyIcon } from "../icons/MoneyIcon"
import { PiWallet } from "react-icons/pi"
import { CiDeliveryTruck, CiGift } from "react-icons/ci"
import { LuSmartphone } from "react-icons/lu"
import gsap from "gsap"

const items = [
  {
    title: (
      <>
        Building a logistics platform to grow your{" "}
        <span className="text-[#40A945]">business.</span>
      </>
    ),
    description:
      "Grow your logistics business with us. Our platform offers a comprehensive dashboard to track and optimize your performance.",
    benefits: [
      <>
        <BankIcon />
        <p>Financial Insight</p>
      </>,
      <>
        <PercelIcon />
        <p>Order management</p>
      </>,
      <>
        <RiderIcon />
        <p>Rider Accessibility</p>
      </>,
    ],
    meta: (
      <>
        <div className="w-[24px]">
          <SupportIcon />
        </div>
        <div>
          <p className="text-black mb-1">Internal Support</p>
          <p className="text-xs">
            We campaign and support our logistics partner on how they can grow
            their business
          </p>
        </div>
      </>
    ),
    image: "/assets/swift-home-page.svg",
  },

  {
    title: (
      <>
        Connect with <span className="text-[#40A945]">trusted</span> drivers for
        fast, reliable delivery—right when you need it
      </>
    ),
    description:
      "Order with confidence and get real-time updates every step of the way.",
    benefits: [
      <>
        <LuSmartphone size={24} />
        <p>Help A Friend Track</p>
      </>,
      <>
        <FaRoute size={24} />
        <p>Real Time Tracking</p>
      </>,
      <>
        <GoLaw size={24} />
        <p>Swift Customer Support</p>
      </>,
    ],
    meta: (
      <>
        <div className="w-[24px]">
          <MoneyIcon />
        </div>
        <div>
          <p className="text-black mb-1">Transparent Pricing</p>
          <p className="text-xs">
            Fixed prices that won&apos;t change at the end of the trip, giving
            you full control and no surprises.
          </p>
        </div>
      </>
    ),
    image: "/assets/connect-with-drivers.svg",
  },

  {
    title: (
      <>
        Drive with us, deliver with{" "}
        <span className="text-[#40A945]">purpose</span>
      </>
    ),
    description:
      "Join our team of trusted drivers and make a difference with every delivery.",
    benefits: [
      <>
        <MoneyIcon />
        <p>Cash Delivery Perk</p>
      </>,
      <>
        <PiWallet size={24} />
        <p>Extra Income from Express Deliveries</p>
      </>,
      <>
        <CiGift size={24} />
        <p>Low Commission Rate</p>
      </>,
    ],
    meta: (
      <>
        <div className="w-[24px]">
          <CiDeliveryTruck size={24} />
        </div>
        <div>
          <p className="text-black mb-1">Group Delivery</p>
          <p className="text-xs">
            Pick up multiple packages along a similar route and maximize your
            earnings in a single trip.
          </p>
        </div>
      </>
    ),
    image: "/assets/drive-with-us.svg",
  },
]

export const Slider = () => {
  const [active, setActive] = useState(1)
  const dots = [1, 2, 3]
  const toRenderItem = items[active - 1]
  const ref: React.Ref<HTMLDivElement> = useRef(null)
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev % 3) + 1)
    }, 7000) // Change number every 5 second

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [])
  useEffect(() => {
    gsap.fromTo(
      ".animate-slide",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, stagger: 0 }
    )
  }, [active])
  return (
    <div className="lg:mt-[143px] reveal-display pb-7 md:px-[70px] px-4 max-w-[1590px] mx-auto">
      <div>
        <div className="md:flex gap-6 md:gap-20" ref={ref}>
          <div className="lg:pt-12 animate-slide">
            <div className="overflow-hidden">
              <p className="xl:text-4xl xl:leading-[54px] md:text-[28px] md:leading-[36px] leading-[32px] text-[24px] max-w-[607px]">
                {toRenderItem.title}
              </p>
            </div>
            <div className="overflow-hidden">
              <p className="md:my-[27px] my-5 text-[#7C7C7A] up-text md:text-[16px] text-sm max-w-[607px]">
                {toRenderItem.description}
              </p>
            </div>
            <div>
              <ul className="space-y-7">
                {toRenderItem.benefits.map((benefit, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-[#7C7C7A] px-[8px] py-[6px]"
                    >
                      {benefit}
                    </li>
                  )
                })}

                <li className="flex gap-3 text-sm text-[#7C7C7A] bg-secondary px-[8px] py-[6px] pb-3 rounded-lg md:w-[296px]">
                  {toRenderItem.meta}
                </li>
              </ul>
            </div>
          </div>
          <div className="md:-mr-64 animate-slide">
            <div className="md:block hidden">
              <Image
                src={toRenderItem.image}
                alt=""
                width={1000}
                height={555}
              />
            </div>

            <div className="relative md:w-[1000px] md:h-[555px] w-[100%] h-[308px] md:hidden block">
              <Image
                src={toRenderItem.image}
                alt=""
                fill={true}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="md:-mt-20 flex gap-[6px] items-center">
          {dots.map((index) => {
            const isActive = index === active
            return (
              <div
                onClick={() => {
                  setActive(index)
                }}
                key={index}
                className={`${
                  isActive
                    ? "bg-[#37913B] w-[22px]"
                    : "bg-[#D7D8D3] w-[8px] transition-all duration-[0.25s]"
                } h-[6px] rounded-full cursor-pointer`}
              ></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
