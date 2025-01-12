"use client"
import React, { useEffect, useRef, useState } from "react"
import { Button } from "../utilities/Button"
import Image from "next/image"
import { toast } from "react-toastify"
import gsap from "gsap"
import Link from "next/link"

const items = [
  {
    title: (
      <>
        <h2 className="text-[24px] md:text-[60px] md:leading-[68px] mb-3 md:mb-5 up-text-get-started">
          Turn Your Time Into <span className="text-[#2E7931]">Money.</span>
        </h2>
      </>
    ),
    context: (
      <>
        <p className="text-[#565656] md:text-[16px] md:leading-[22px] text-sm max-w-[527px] up-text-get-started">
          Join our community of riders. Deliver on your schedule, meet new
          people, and boost your earnings—all with one app.
        </p>
      </>
    ),
    image: "/assets/swiftvia-phone.png",
  },
  {
    title: (
      <>
        <h2 className="text-[24px] md:text-[60px] md:leading-[68px] mb-3 md:mb-5 up-text-get-started">
          Simplify Your Deliveries,{" "}
          <span className="text-[#2E7931]">Anytime, Anywhere.</span>
        </h2>
      </>
    ),
    context: (
      <>
        <p className="text-[#565656] md:text-[16px] md:leading-[22px] text-sm max-w-[527px] up-text-get-started">
          Send parcels quickly and securely. Download the app and enjoy
          stress-free delivery at your fingertips.
        </p>
      </>
    ),
    image: "/assets/iPhone-16-Pro.png",
  },
  {
    title: (
      <>
        <h2 className="text-[24px] md:text-[60px] md:leading-[68px] mb-3 md:mb-5 up-text-get-started">
          One platform to make your logistics{" "}
          <span className="text-[#2E7931]">world-class.</span>
        </h2>
      </>
    ),
    context: (
      <>
        <p className="text-[#565656] md:text-[16px] md:leading-[22px] text-sm max-w-[527px] up-text-get-started">
          Streamline your logistics today, sign up now and transform your
          business.
        </p>
      </>
    ),
    image: "/assets/dashboard-2.png",
  },
]

export const Hero = () => {
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
      ".animate-slide-hero",
      { opacity: 0, x: 100, y: 100 },
      { opacity: 1, duration: 0.5, stagger: 0, x: 0, y: 0 }
    )
  }, [active])
  return (
    <div className="max-w-[1590px] my-[90px] md:my-[183px] mx-auto px-4 md:px-[70px]">
      <div className="flex gap-7 justify-between md:flex-row flex-col animate-slide-hero">
        <div className="max-w-[620px]" ref={ref}>
          <div className="overflow-hidden">{toRenderItem?.title}</div>
          <div className="overflow-hidden">{toRenderItem?.context}</div>
          <div className="flex items-center xl:flex-row flex-col md:gap-6 gap-3 max-w-[600px] md:mt-[80px] mt-[40px]">
            {active === 3 ? (
              <>
                <div className="overflow-hidden xl:w-auto w-full">
                  <Link href={"http://logistics.swiftvia.com"} target="_blank">
                    <Button
                      size="large"
                      className="up-text xl:w-auto w-full up-text-get-started"
                    >
                      Get started for free
                    </Button>
                  </Link>
                </div>
                <div className="overflow-hidden xl:w-auto w-full">
                  <Link href={"http://logistics.swiftvia.com"} target="_blank">
                    <Button
                      size="large"
                      className="up-text xl:w-auto w-full up-text-get-started"
                      variant="secondary"
                    >
                      Learn more now
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="overflow-hidden xl:w-auto w-full">
                  <Button
                    size="large"
                    className="up-text xl:w-auto w-full up-text-get-started"
                    onClick={() => toast.info("Coming Soon")}
                    beforeicon={
                      <Image
                        alt=""
                        src={"/assets/playstore.svg"}
                        height={24}
                        width={24}
                      />
                    }
                  >
                    Download on Playstore
                  </Button>
                </div>
                <div className="overflow-hidden xl:w-auto w-full">
                  <Button
                    size="large"
                    className="up-text xl:w-auto w-full up-text-get-started"
                    onClick={() => toast.info("Coming Soon")}
                    beforeicon={
                      <Image
                        alt=""
                        src={"/assets/apple.svg"}
                        height={24}
                        width={24}
                      />
                    }
                  >
                    Download on Applestore
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="get-started-reveal">
          <div className="md:w-[618px] md:h-[470px] relative w-[300px] h-[300px] justify-self-center">
            <Image
              src={toRenderItem?.image}
              fill
              alt=""
              className="w-full h-full md:object-contain object-contain"
            />
          </div>
          <div className="md:mt-20 mt-4 flex gap-[6px] items-center justify-end">
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

      <div className="mt-[70px] md:mt-[153px] get-started-reveal">
        <p className="mb-6 md:mb-[57px] md:text-[18px] text-center">
          Learn more about our product
        </p>
        <div className="relative max-w-[1120px] md:max-w-[1280px] mx-auto">
          <video
            className="w-[100%] h-[320px] md:w-[100%] md:h-[630px] lg:h-[720px] object-cover rounded-xl"
            autoPlay
            loop
            muted
          >
            <source src="/assets/swiftvia.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/70 to-black/0 rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}
