"use client"
import React, { useEffect, useRef, useState } from "react"
import { Button } from "../utilities/Button"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"

export const HowItWorks = () => {
  return (
    <div className="my-[103px]">
      <div className="py-5 text-center space-y-4 mb-[12px] md:w-[632px] mx-auto">
        <p className="md:text-[40px] text-[24px]">How SwiftVia Works</p>
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
      children: <RiderTab />,
    },
    {
      title: "Logistic",
      children: <LogisticTab />,
    },
  ]
  const [active, setActive] = useState(0)
  return (
    <div className="2xl:w-[62%] lg:w-[75%] w-[100%] mx-auto">
      <div className="bg-secondary rounded-full px-[9px] py-[5px] w-[300px] mx-auto flex md:mb-[90px] mb-[40px]">
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
  const items = [
    <>
      <div className="space-y-4 md:min-h-[256px] min-h-[170px]">
        <p className="text-[#60605E] text-[18px]">01</p>
        <p className="font-medium md:text-2xl text-lg">
          Download & Create an Account
        </p>
        <p className="text-sm max-w-[362px] text-[#60605E]">
          Find and download the customer app from your app store. Open the app,
          select &quot;Create Account,&quot; and enter your personal details,
          including your name, email, phone number, and delivery address.
        </p>
      </div>
    </>,
    <>
      <div className="space-y-4 md:min-h-[256px] min-h-[170px]">
        <p className="text-[#60605E] text-[18px]">02</p>
        <p className="font-medium md:text-2xl text-lg">
          Set Your Location & Choose Service
        </p>
        <p className="text-sm max-w-[362px] text-[#60605E]">
          Once logged in, set your current location or input the pick-up and
          drop-off locations if different.
        </p>
      </div>
    </>,
    <>
      <div className="space-y-4 md:min-h-[256px] min-h-[170px]">
        <p className="text-[#60605E] text-[18px]">03</p>
        <p className="font-medium md:text-2xl text-lg">
          Place Your Order & Track Rider
        </p>
        <p className="text-sm max-w-[362px] text-[#60605E]">
          Review your order summary, which includes the delivery fee, estimated
          arrival time, and any additional options chosen. Confirm the order,
          and you&apos;ll be able to track your rider in real-time from pick-up
          to delivery.
        </p>
      </div>
    </>,
    <>
      <div className="space-y-4 md:min-h-[256px] min-h-[170px]">
        <p className="text-[#60605E] text-[18px]">04</p>
        <p className="font-medium md:text-2xl text-lg">
          Receive Your Delivery & Rate Service
        </p>
        <p className="text-sm max-w-[362px] text-[#60605E]">
          Once your delivery arrives, verify the items and confirm receipt in
          the app. After completion, you&apos;ll have the option to rate your
          rider and provide feedback
        </p>
      </div>
    </>,
  ]
  const dots = [1, 2, 3, 4]
  const [active, setActive] = useState(1)
  const toRenderItem = items[active - 1]
  const ref: React.Ref<HTMLDivElement> = useRef(null)
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev % 4) + 1)
    }, 3000) // Change number every 3 second

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [])
  useEffect(() => {
    gsap.fromTo(
      ".animate-slide-how-it-works",
      { opacity: 0, y: "110%" },
      { opacity: 1, duration: 0.7, stagger: 0, y: 0 }
    )
  }, [active])

  return (
    <div className="flex md:items-center md:flex-row flex-col gap-14 justify-center px-4">
      <div>
        <div className="overflow-hidden" ref={ref}>
          <div className="animate-slide-how-it-works">{toRenderItem}</div>
        </div>
        <div className="flex items-center md:gap-6 gap-3 md:mt-[50px] mt-[30px]">
          <div className="overflow-hidden md:w-auto w-full">
            <Link href={"/get-started"}>
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
            </Link>
          </div>
          <div className="overflow-hidden md:w-auto w-full">
            <Link href={"/get-started"}>
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
            </Link>
          </div>
        </div>

        <div className="mt-10 flex gap-[6px] items-center">
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
                    ? "bg-[#37913B] w-[18px]"
                    : "bg-[#D7D8D3] w-[18px] transition-all duration-[0.25s]"
                } h-[6px] rounded-full cursor-pointer`}
              ></div>
            )
          })}
        </div>
      </div>
      <div className="relative h-[398px] md:w-[529px] w-full">
        <Image
          src={"/assets/phone-hand.png"}
          alt=""
          fill={true}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  )
}

const RiderTab = () => {
  const items = [
    <>
      <div className="space-y-4 md:min-h-[256px] min-h-[170px]">
        <p className="text-[#60605E] text-[18px]">01</p>
        <p className="font-medium md:text-2xl text-lg">Download & Register</p>
        <p className="text-sm max-w-[362px] text-[#60605E]">
          Get the app from your Google Playstore or Apple store and complete the
          registration form with your details.
        </p>
      </div>
    </>,
    <>
      <div className="space-y-4 md:min-h-[256px] min-h-[170px]">
        <p className="text-[#60605E] text-[18px]">02</p>
        <p className="font-medium md:text-2xl text-lg">Verify Your Profile</p>
        <p className="text-sm max-w-[362px] text-[#60605E]">
          Upload required documents such as a valid driver&apos;s license,
          vehicle registration, and any necessary permits.
        </p>
      </div>
    </>,
    <>
      <div className="space-y-4 md:min-h-[256px] min-h-[170px]">
        <p className="text-[#60605E] text-[18px]">03</p>
        <p className="font-medium md:text-2xl text-lg">
          Activate & Accept Orders
        </p>
        <p className="text-sm max-w-[362px] text-[#60605E]">
          Once approved, you&apos;ll gain access to the dashboard. Go online
          within the app to mark yourself as available. You will start receiving
          delivery requests from nearby customers.
        </p>
      </div>
    </>,
    <>
      <div className="space-y-4 md:min-h-[256px] min-h-[170px]">
        <p className="text-[#60605E] text-[18px]">04</p>
        <p className="font-medium md:text-2xl text-lg">
          Complete Deliveries & Earn
        </p>
        <p className="text-sm max-w-[362px] text-[#60605E]">
          Head to the pick-up location, confirm the order, and transport it to
          the customer&apos;s address following all delivery guidelines. Once
          delivered, mark the order as completed in the app
        </p>
      </div>
    </>,
  ]
  const dots = [1, 2, 3, 4]
  const [active, setActive] = useState(1)
  const toRenderItem = items[active - 1]
  const ref: React.Ref<HTMLDivElement> = useRef(null)
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev % 4) + 1)
    }, 3000) // Change number every 3 second

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [])
  useEffect(() => {
    gsap.fromTo(
      ".animate-slide-how-it-works",
      { opacity: 0, y: "110%" },
      { opacity: 1, duration: 0.7, stagger: 0, y: 0 }
    )
  }, [active])
  return (
    <div className="flex md:items-center md:flex-row flex-col gap-14 justify-center px-4">
      <div>
        <div className="overflow-hidden" ref={ref}>
          <div className="animate-slide-how-it-works">{toRenderItem}</div>
        </div>
        <div className="flex items-center md:gap-6 gap-3 md:mt-[50px] mt-[30px]">
          <div className="overflow-hidden md:w-auto w-full">
            <Link href={"/get-started"}>
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
            </Link>
          </div>
          <div className="overflow-hidden md:w-auto w-full">
            <Link href={"/get-started"}>
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
            </Link>
          </div>
        </div>

        <div className="mt-10 flex gap-[6px] items-center">
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
                    ? "bg-[#37913B] w-[18px]"
                    : "bg-[#D7D8D3] w-[18px] transition-all duration-[0.25s]"
                } h-[6px] rounded-full cursor-pointer`}
              ></div>
            )
          })}
        </div>
      </div>
      <div className="relative h-[398px] md:w-[529px] w-full">
        <Image
          src={"/assets/rider-phone.png"}
          alt=""
          fill={true}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  )
}

const LogisticTab = () => {
  const items = [
    <>
      <div className="space-y-4 md:min-h-[256px] min-h-[170px]">
        <p className="text-[#60605E] text-[18px]">01</p>
        <p className="font-medium md:text-2xl text-lg">
          Sign Up & Set Up Your Dashboard
        </p>
        <p className="text-sm max-w-[362px] text-[#60605E]">
          To get started as a logistics partner, you can either download the
          rider app and register as a logistics company or continue with the
          web-based registration. After signing up, enter your essential
          business details, including company name, address, and contact
          information
        </p>
      </div>
    </>,
    <>
      <div className="space-y-4 md:min-h-[256px] min-h-[170px]">
        <p className="text-[#60605E] text-[18px]">02</p>
        <p className="font-medium md:text-2xl text-lg">Register your riders</p>
        <p className="text-sm max-w-[362px] text-[#60605E]">
          Add each of your riders to the platform by creating profiles for them
          under your account. Each profile requires rider details, such as their
          name, contact information, and uploaded verification documents
          (license, ID).
        </p>
      </div>
    </>,
    <>
      <div className="space-y-4 md:min-h-[256px] min-h-[170px]">
        <p className="text-[#60605E] text-[18px]">03</p>
        <p className="font-medium md:text-2xl text-lg">
          Monitor & Assign Orders
        </p>
        <p className="text-sm max-w-[362px] text-[#60605E]">
          Using the dashboard, you can view real-time updates on all rider
          locations and track their availability.
        </p>
      </div>
    </>,
    <>
      <div className="space-y-4 md:min-h-[256px] min-h-[170px]">
        <p className="text-[#60605E] text-[18px]">04</p>
        <p className="font-medium md:text-2xl text-lg">
          Track Performance & Earnings
        </p>
        <p className="text-sm max-w-[362px] text-[#60605E]">
          Analyze data from the dashboard to track each rider&apos;s
          performance, including delivery times, customer ratings, and order
          volumes.
        </p>
      </div>
    </>,
  ]
  const dots = [1, 2, 3, 4]
  const [active, setActive] = useState(1)
  const toRenderItem = items[active - 1]
  const ref: React.Ref<HTMLDivElement> = useRef(null)
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev % 4) + 1)
    }, 3000) // Change number every 3 second

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [])
  useEffect(() => {
    gsap.fromTo(
      ".animate-slide-how-it-works",
      { opacity: 0, y: "110%" },
      { opacity: 1, duration: 0.7, stagger: 0, y: 0 }
    )
  }, [active])
  return (
    <div className="flex md:items-center md:flex-row flex-col gap-14 justify-center px-4">
      <div>
        <div className="overflow-hidden" ref={ref}>
          <div className="animate-slide-how-it-works">{toRenderItem}</div>
        </div>
        <div className="flex items-center md:gap-6 gap-3 md:mt-[50px] mt-[30px]">
          <div className="overflow-hidden md:w-auto w-full">
            <Link href="/get-started">
              <Button size="small" className="up-text md:w-auto w-full">
                Download App
              </Button>
            </Link>
          </div>
          <div className="overflow-hidden md:w-auto w-full">
            <Link
              href={"https://logistics.swiftvia.com/auth/signup"}
              target="_blank"
            >
              <Button
                size="small"
                className="up-text md:w-auto w-full"
                variant="secondary"
              >
                Continue with web
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-10 flex gap-[6px] items-center">
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
                    ? "bg-[#37913B] w-[18px]"
                    : "bg-[#D7D8D3] w-[18px] transition-all duration-[0.25s]"
                } h-[6px] rounded-full cursor-pointer`}
              ></div>
            )
          })}
        </div>
      </div>
      <div className="relative h-[398px] md:w-[529px] w-full">
        <Image
          src={"/assets/sign-up-screen.png"}
          alt=""
          fill={true}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  )
}
